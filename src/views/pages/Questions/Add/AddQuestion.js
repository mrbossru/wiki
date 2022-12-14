import React, {useCallback, useContext, useEffect, useState} from "react";
import style from "./AddQuestion.module.css";
import {Navigate, useParams} from "react-router-dom";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";
import ContentEditor from "../../../Components/ContentEditor/ContentEditor";
import {AddTag} from "./Presenters/AddTag";
import {ClearTags} from "./Presenters/ClearTags";
import {Save} from "./Presenters/Save";
import {Delete} from "./Presenters/Delete";
import {TagsToStr} from "./Presenters/TagsToStr";
import {GetQuestionData} from "./Presenters/GetQuestionData";


export const AddQuestion = (props) => {
    {
        const params = useParams();
        const [redirect, setRedirect] = useState(false);
        if(props.model.Articles.GetArticle(params.id)){
            if(redirect) return (<Navigate to={"/question/" + params.id} replace={true} />);
        } else {
            if (redirect) return (<Navigate to={"/questions/"} replace={true} />);
        }
        let questionData = GetQuestionData(props.model, params.id);
        function qUpdate(data) {
            questionData.qContent.data = data;
        }
        function aUpdate(data) {
            questionData.aContent.data = data;
        }
        let handlerOnAddTag = () =>{
            AddTag(props.model, questionData)
        }
        let handlerClearTags = () =>{
            ClearTags(props.model, questionData)
        }
        const HandlerSave = () => {
            questionData.question.name = document.getElementById("atrtName").value;
            Save(props.model, questionData);
            setRedirect(true);
        }
        let handlerDelete = () => {
            Delete(props.model, questionData);
            setRedirect(true);
        }
        let handlerAddArticle = () => {}
        return (
            <div>
                <HeaderBtn save={HandlerSave} delete={handlerDelete}/>
                <div>
                    <input id="atrtName" className={style.input} type="text" defaultValue={questionData.question.name} required/>
                    <div className={style.labelBox}>
                        <label className={style.label}>???????????????? ??????????????</label>
                    </div>
                </div>
                <div>
                    <label id="catalog" className={style.label}>{"??????????????: " + props.model.Catalogs.GetCatalogPath(questionData.question.catalogId)}</label>
                </div>
                <div className={style.ContentEditor}>
                    <div className={style.label}>????????????:</div>
                    <ContentEditor content={questionData.qContent.data} update={qUpdate}/>
                    <div className={style.label}>??????????:</div>
                    <ContentEditor content={questionData.aContent.data} update={aUpdate}/>
                    <input type="text" id="tag" name="name" className={style.select}/>
                    <button className={style.tagsInput} onClick={handlerOnAddTag}>????????????????</button>
                    <button className={style.tagsInput} onClick={handlerClearTags}>????????????????</button>
                    <fieldset className={style.tags}>
                        <legend>Tags</legend>
                        <div id="tags">{TagsToStr(questionData.tags)}</div>
                    </fieldset>
                    <select className={style.select}>
                        <option>?????????? 1 ???????????????????????????????????? ?????????????????????? ?????? ?????? ?????????????????? ????????????  ???????????????????????????? ?????????????????? ?????????????? ??????????  ????????????????</option>
                        <option>?????????? 2</option>
                    </select>
                    <button className={style.tagsInput} onClick={handlerAddArticle}>????????????????</button>
                    <fieldset className={style.tags}>
                        <legend>??????????????</legend>
                        <div id="tags">
                            <a href="src/views/pages/Articles/Add/AddArticle#">???????????? 1</a>
                            <div>???????????? 2</div>
                            <div>???????????? 3</div>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}