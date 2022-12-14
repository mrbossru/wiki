import React, {useCallback, useContext, useEffect, useState} from "react";
import style from "./AddArticle.module.css";
import {Navigate, useParams} from "react-router-dom";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";
import ContentEditor from "../../../Components/ContentEditor/ContentEditor";
import {GetArticleData} from "./Presenters/GetArticleData";
import {AddTag} from "./Presenters/AddTag";
import {ClearTags} from "./Presenters/ClearTags";
import {Save} from "./Presenters/Save";
import {Delete} from "./Presenters/Delete";
import {TagsToStr} from "./Presenters/TagsToStr";


export const AddArticle = (props) => {
    {
        const params = useParams();
        const [redirect, setRedirect] = useState(false);
        if(props.model.Articles.GetArticle(params.id)){
            if(redirect) return (<Navigate to={"/article/" + params.id} replace={true} />);
        } else {
            if (redirect) return (<Navigate to={"/articles/"} replace={true} />);
        }
        let articleData = GetArticleData(props.model, params.id);
        function Update(data) {
            articleData.content.data = data;
        }
        let handlerOnAddTag = () =>{
            AddTag(props.model, articleData)
        }
        let handlerClearTags = () =>{
            ClearTags(props.model, articleData)
        }
        const HandlerSave = () => {
            articleData.article.name = document.getElementById("atrtName").value;
            Save(props.model, articleData);
            setRedirect(true);
        }
        let handlerDelete = () => {
            Delete(props.model, articleData);
            setRedirect(true);
        }
        let handlerAddQuestion = () => {}
        return (
            <div>
                <HeaderBtn save={HandlerSave} delete={handlerDelete}/>
                <div>
                    <input id="atrtName" className={style.input} type="text" defaultValue={articleData.article.name} required/>
                    <div className={style.labelBox}>
                        <label className={style.label}>???????????????? ????????????</label>
                    </div>
                </div>
                <div>
                    <label id="catalog" className={style.label}>{"??????????????: " + props.model.Catalogs.GetCatalogPath(articleData.article.catalogId)}</label>
                </div>
                <div className={style.ContentEditor}>
                    <ContentEditor content={articleData.content.data} update={Update}/>
                    <input type="text" id="tag" name="name" className={style.select}/>
                    <button className={style.tagsInput} onClick={handlerOnAddTag}>????????????????</button>
                    <button className={style.tagsInput} onClick={handlerClearTags}>????????????????</button>
                    <fieldset className={style.tags}>
                        <legend>Tags</legend>
                            <div id="tags">{TagsToStr(articleData.tags)}</div>
                    </fieldset>
                    <select className={style.select}>
                        <option>?????????? 1 ???????????????????????????????????? ?????????????????????? ?????? ?????? ?????????????????? ????????????  ???????????????????????????? ?????????????????? ?????????????? ??????????  ????????????????</option>
                        <option>?????????? 2</option>
                    </select>
                    <button className={style.tagsInput} onClick={handlerAddQuestion}>????????????????</button>
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