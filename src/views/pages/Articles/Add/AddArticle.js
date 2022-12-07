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
        let articleName = React.createRef();

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
            articleData.article.name = articleName.current.value;
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
                    <input ref={articleName} className={style.input} type="text" defaultValue={articleData.article.name} required/>
                    <div className={style.labelBox}>
                        <label className={style.label}>Название статьи</label>
                    </div>
                </div>
                <div>
                    <label id="catalog" className={style.label}>{"Каталог: " + props.model.Catalogs.GetCatalogPath(articleData.article.catalogId)}</label>
                </div>
                <div className={style.ContentEditor}>
                    <ContentEditor content={articleData.content.data} update={Update}/>
                    <input type="text" id="tag" name="name" className={style.select}/>
                    <button className={style.tagsInput} onClick={handlerOnAddTag}>Добавить</button>
                    <button className={style.tagsInput} onClick={handlerClearTags}>Очистить</button>
                    <fieldset className={style.tags}>
                        <legend>Tags</legend>
                            <div id="tags">{TagsToStr(articleData.tags)}</div>
                    </fieldset>
                    <select className={style.select}>
                        <option>Пункт 1 </option>
                        <option>Пункт 2</option>
                    </select>
                    <button className={style.tagsInput} onClick={handlerAddQuestion}>Добавить</button>
                    <fieldset className={style.tags}>
                        <legend>Вопросы</legend>
                        <div id="tags">
                            <a href="src/views/pages/Articles/Add/AddArticle#">Вопрос 1</a>
                            <div>Вопрос 2</div>
                            <div>Вопрос 3</div>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}