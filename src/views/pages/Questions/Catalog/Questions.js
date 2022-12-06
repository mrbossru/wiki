import React from "react";
import {Catalog} from "../../../Components/Catalog/Catalog";
import {GetQuestionsTree} from "./Presenters/GetQuestionsTree";
import {SetQuestionsTree} from  "./Presenters/SetQuestionsTree"

export const Questions = (props) =>{
    const Tree = GetQuestionsTree(props.model, props.stateData.rootId);
    const OnSave = (treeData, initialOpen, isEdit) => {
        props.stateData.openQuestionsFolders = initialOpen;
        if (isEdit) SetQuestionsTree(props.model, treeData);
    }
    return (
        <div>
            <Catalog title="Вопросы" treeData={Tree} initialOpen={props.stateData.openQuestionsFolders} rootId={props.stateData.rootId} OnSave={OnSave}/>
        </div>
    )
}