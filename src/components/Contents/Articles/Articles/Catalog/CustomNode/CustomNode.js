import React, {useEffect, useState} from "react";
import { TypeIcon } from "../TypeIcon/TypeIcon";
import styles from "./CustomNode.module.css";
import {IconButton, TextField, Typography} from "@mui/material";
import {useDragOver} from "@minoru/react-dnd-treeview";
import { useNavigate } from "react-router-dom";

export const CustomNode = (props) => {
    const [hover, setHover] = useState(false);
    const { id, text } = props.node;
    const { droppable, data } = props.node;
    const [visibleInput, setVisibleInput] = useState(false);
    const [labelText, setLabelText] = useState(text);
    const indent = props.depth * 24;
    let navigate = useNavigate();
    const handleToggle = (e) => {
        e.stopPropagation();
        if(props.node.droppable) {
            props.onToggle(props.node.id);
        }
        else {
            if(!props.canEdit()) navigate('/' + props.node.data.href);
        }
    };

    const handleShowInput = () => {
        setVisibleInput(true);
    };

    const handleCancel = () => {
        setLabelText(text);
        setVisibleInput(false);
    };

    const handleChangeText = (e) => {
        setLabelText(e.target.value);
    };

    const handleSubmit = () => {
        setVisibleInput(false);
        props.onTextChange(id, labelText);
    };

    const dragOverProps = useDragOver(id, props.isOpen, props.onToggle);



    return (
        <div
            className={`tree-node ${styles.root}`}
            style={{ paddingInlineStart: indent }}
            {...dragOverProps}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={`${styles.expandIconWrapper} ${
                    props.isOpen ? styles.isOpen : ""
                }`}
            >

            </div>
            <div onClick={handleToggle}>
                <TypeIcon  droppable={droppable || false} fileType={data?.fileType} isOpen={props.isOpen}/>
            </div>
            <div className={styles.labelGridItem}>
                {visibleInput ? (
                    <div className={styles.inputWrapper}>
                        <TextField
                            className={`${styles.textField}
              ${styles.nodeInput}`}
                            value={labelText}
                            onChange={handleChangeText}
                        />
                        <div className={styles.actionButton} onClick={handleSubmit} disabled={labelText === ""}>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div className={styles.actionButton} onClick={handleCancel}>
                            <i className="fa fa-close" aria-hidden="true"></i>
                        </div>
                    </div>
                ) : (
                    <div className={styles.inputWrapper}>
                        <Typography variant="body2" className={styles.nodeLabel} onClick={handleToggle}>
                            {props.node.text}
                        </Typography>
                        {(hover && props.canEdit()) && (
                            <>
                        <div className={styles.actionButton} onClick={handleShowInput}>
                            <i className="fa fa-edit" aria-hidden="true"></i>
                        </div>
                         <div className={styles.actionButton}>
                             <i className="fa fa-copy" aria-hidden="true" onClick={() => props.onNew(props.node)}></i>
                         </div>
                                <div className={styles.actionButton}>
                                    <i className="fa fa-trash" aria-hidden="true" onClick={() => {props.onDelete(props.node.id)}}></i>
                                </div>
                            </>)}
                    </div>
                )}
            </div>
        </div>
    );
};
