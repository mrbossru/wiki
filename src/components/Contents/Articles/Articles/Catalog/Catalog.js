import React, {Component, useState} from 'react';
import {getBackendOptions, getDescendants, MultiBackend, Tree} from "@minoru/react-dnd-treeview";
import {DndProvider} from "react-dnd";
import styles from "./Catalog.module.css";
import {CustomNode} from "./CustomNode/CustomNode";
import {CustomDragPreview} from "./CustomDragPreview/CustomDragPreview";
import {Placeholder} from "./Placeholder/Placeholder";

export class Catalog extends React.Component {
    initialOpen = [];
    _removeFolder = {};
    isEdit = false;
    constructor(props) {
        super(props);
        this.state = { treeData: this.props.treeData, enableDnd: false};
        this.initialOpen = this.props.initialOpen? this.props.initialOpen : [];
        this._removeFolder = {"id": "remove","parent": this.props.rootId,"droppable": true,"text": "Удаленные", data:{ index: 0}};
        window.addEventListener("beforeunload", (ev) => {if (this.state.enableDnd) this.props.OnSave(this.state.treeData, this.initialOpen)});
    }
    componentWillUnmount() {if (this.state.enableDnd) this.props.OnSave(this.state.treeData, this.initialOpen)}

    render() {
        const handleDrop = (newTree) => {
            let rNode = newTree.find(node => node.id == "remove");
            if(rNode) {
                if (rNode.parent != this.props.rootId) return;
            }
            this.setState({treeData: newTree})
        }
        const handleTextChange = (id, value) => {
            const newTree = this.state.treeData.map((node) => {
                if (node.id === id) {
                    return {
                        ...node,
                        text: value
                    };
                }
                return node;
            });
            this.setState({treeData: newTree})
        };
        const onChangeOpen = (dataOpen) => this.initialOpen = dataOpen;
        const handleDelete = (id) => {
            const deleteIds = [
                id,
                ...getDescendants(this.state.treeData, id).map((node) => node.id)
            ];
            const newTree = this.state.treeData.filter((node) => !deleteIds.includes(node.id));
            this.setState({treeData: newTree})
        };
        const handleRemove = (id) => {
            let newTree = this.state.treeData;
            let rNode = newTree.find(node => node.id == id);
            let removeFolder = newTree.find(node => node.id == "remove");
            if (!removeFolder) {
                newTree = [
                    ...newTree,
                    this._removeFolder
                ];
            }
            if(rNode){
                if (rNode.id == "remove") return;
                newTree[newTree.indexOf(rNode)].parent = "remove";
            }
            this.setState({treeData: newTree})
        };
        const handleNew = (node) => {
            if (node.droppable) {
                const lastId = 7;
                let newTree = [
                    ...this.state.treeData,
                    {
                        "id": this.props.GetId(),
                        "parent": this.props.rootId,
                        "droppable": true,
                        "text": "New",
                        "data": {
                            "index": 0
                        }
                    }];
                this.setState({treeData: newTree})
            } else {
                //Открыть new article
            }
        };
        const handleClickEditCatalog = () => {
            this.setState({enableDnd: !this.state.enableDnd});
        };
        const handleSave = () => {
            this.props.OnSave(this.state.treeData, this.initialOpen)
            handleDelete("remove");
            handleClickEditCatalog();
        }
        return (
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                <div className={styles.app}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.title}>Содержание</div>
                        {!this.state.enableDnd && (
                            <div className={styles.actionButton} onClick={handleClickEditCatalog}>
                                <i className="fa fa-edit" aria-hidden="true"></i>
                            </div>
                        )}
                        {this.state.enableDnd && (
                            <>
                                <div className={styles.actionButton}>
                                    <i className="fa fa-close" aria-hidden="true" onClick={handleClickEditCatalog}></i>
                                </div>
                                <div className={styles.actionButton}>
                                    <i className="fa fa-copy" aria-hidden="true" onClick={() => handleNew({droppable: true})}></i>
                                </div>
                                <div className={styles.actionButton} onClick={handleSave}>
                                    <i className="fa fa-save" aria-hidden="true"></i>
                                </div>
                            </>)}
                    </div>
                    <Tree
                        tree={this.state.treeData}
                        rootId={this.props.rootId}
                        canDrag={() => this.state.enableDnd}
                        onChangeOpen={onChangeOpen}
                        render={(node, {depth, isOpen, onToggle}) => (
                            <CustomNode
                                node={node}
                                depth={depth}
                                isOpen={isOpen}
                                onToggle={onToggle}
                                onTextChange={handleTextChange}
                                canEdit={() => this.state.enableDnd}
                                onDelete={handleRemove}
                                onNew={handleNew}
                            />
                        )}
                        dragPreviewRender={(monitorProps) => (
                            <CustomDragPreview monitorProps={monitorProps}/>
                        )}
                        onDrop={handleDrop}
                        classes={{
                            root: styles.treeRoot,
                            draggingSource: styles.draggingSource,
                            placeholder: styles.placeholderContainer
                        }}
                        sort={false}
                        insertDroppableFirst={false}
                        canDrop={(tree, {dragSource, dropTargetId, dropTarget}) => {
                            if (dragSource?.parent === dropTargetId) {
                                return true;
                            }
                        }}
                        dropTargetOffset={5}
                        placeholderRender={(node, {depth}) => (
                            <Placeholder node={node} depth={depth}/>
                        )}
                        initialOpen={this.initialOpen ? this.initialOpen : []}
                    />
                </div>
            </DndProvider>
        );
    }
}

