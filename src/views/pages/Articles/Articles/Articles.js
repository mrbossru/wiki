import React from "react";
import {Catalog} from "../../../Components/Catalog/Catalog";

export const Articles = (props) =>{
    const OnSave = (treeData, initialOpen, isEdit) => {
        props.stateData.openArticlesFolders = initialOpen;
        if (isEdit) props.state.Articles.SetArticlesTree(treeData);
    }
    return (
            <div>
                <Catalog treeData={props.state.Articles.GetArticlesTree(props.stateData.rootCatalog)} initialOpen={props.stateData.openArticlesFolders} rootId={props.stateData.rootCatalog} OnSave={OnSave} GetId={props.state.helpers.generateUUID}/>
            </div>
    )
}