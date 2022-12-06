import React from "react";
import {Catalog} from "../../../Components/Catalog/Catalog";
import {GetArticlesTree} from "./Presenters/GetArticlesTree";
import {SetArticlesTree} from  "./Presenters/SetArticlesTree"

export const Articles = (props) =>{
    const ArticlesTree = GetArticlesTree(props.model, props.stateData.rootId);
    const OnSave = (treeData, initialOpen, isEdit) => {
        props.stateData.openArticlesFolders = initialOpen;
        if (isEdit) SetArticlesTree(props.model, treeData);
    }
    return (
            <div>
                <Catalog title="Содержание" treeData={ArticlesTree} initialOpen={props.stateData.openArticlesFolders} rootId={props.stateData.rootId} OnSave={OnSave}/>
            </div>
    )
}