import React from "react";
import {Catalog} from "./Catalog/Catalog";

export const Articles = (props) =>{
    const OnSave = (treeData, initialOpen) => {
        console.log("save");
        props.state.openFolders = initialOpen;
        props.state.Articles.SetArticlesTree(treeData);
    }
    return (
            <div>
                <Catalog treeData={props.state.Articles.GetArticlesTree(props.state.rootCatalog)} initialOpen={props.state.openFolders} rootId={props.state.rootCatalog} OnSave={OnSave} GetId={props.state.helpers.generateUUID}/>
            </div>
    )
}