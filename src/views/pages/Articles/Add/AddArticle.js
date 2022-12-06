import React, {useCallback, useContext, useEffect, useState} from "react";
import style from "./AddArticle.module.css";
import {Navigate, useParams} from "react-router-dom";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";
import ContentEditor from "../../../Components/ContentEditor/ContentEditor";


export const AddArticle = (props) => {
    {
        const params = useParams();
        const [redirect, setRedirect] = useState(false);
        let content, article;
        let tags =[];

        let _article;
        if (params.id) {
            _article = props.state.Articles.GetArticle(params.id);
        }

        if (_article) {
            if(redirect) {
                return (<Navigate to={"/article/" + params.id} replace={true} />);
            }
            article = _article;
        } else {
            if(redirect) {
                return (<Navigate to={"/articles/"} replace={true} />);
            }
            article = props.state.Articles.CreateNew();
        }
        content = props.state.Contents.GetContent(article.contentId);
        let catalogPath = props.state.Catalogs.GetCatalogPath(article.catalogId);
        tags = props.state.Tags.GetTags(article.id);
        let tagsStr = "";
        tags.forEach(t => tagsStr = tagsStr + t.name + ";")
        function Update(data) {
            content.data = data;
        }
        let handlerOnAddTag = () =>{
            let tagsElement = document.getElementById("tags");
            let tagInput = document.getElementById("tag");
            if (tagsElement) {
                if(tagInput.value != "")
                {
                    if (!tags.find(el => el.name == tagInput.value)) {
                        let newTag = props.state.Tags.CreateNew();
                        newTag.name = tagInput.value;
                        props.state.Tags.Add(newTag);
                        let newLink = props.state.Links.CreateNew(article.id, newTag.id);
                        props.state.Links.Add(newLink);
                        tags = [
                            ...tags,
                            newTag
                        ]
                        tagsElement.textContent = "";
                        tags.forEach(t => tagsElement.textContent = tagsElement.textContent + t.name + ";");
                    }
                }
                tagInput.value= "";
            }
        }
        let handlerClearTags = () =>{
            tags.forEach(t => props.state.Tags.Del(t.id));
            let tagIds = tags.map(t => t.id);
            props.state.Links.GetChilds(article.id).forEach(l =>{
                if (tagIds.includes(l.child)) props.state.Links.Del(l.id);
            })
            tags=[];
            document.getElementById("tags").textContent = "";
        }
        const HandlerSave = () => {
            article.name = document.getElementById("atrtName").value;
            props.state.Articles.Add(article);
            props.state.Contents.Add(content);
            setRedirect(true);
        }
        let handlerDelete = () => {
            props.state.Articles.Del(article.id);
            setRedirect(true);
        }
        let handlerAddQuestion = () => {

        }
        return (
            <div>
                <HeaderBtn save={HandlerSave} delete={handlerDelete}/>
                <div>
                    <input id="atrtName" className={style.input} type="text" defaultValue={article.name} required/>
                    <div className={style.labelBox}>
                        <label className={style.label}>Название статьи</label>
                    </div>
                </div>
                <div>
                    <label id="catalog" className={style.label}>{"Каталог: " + catalogPath}</label>
                </div>
                <div className={style.ContentEditor}>
                    <ContentEditor content={content.data} update={Update}/>
                    <input type="text" id="tag" name="name" className={style.select}/>
                    <button className={style.tagsInput} onClick={handlerOnAddTag}>Добавить</button>
                    <button className={style.tagsInput} onClick={handlerClearTags}>Очистить</button>
                    <fieldset className={style.tags}>
                        <legend>Tags</legend>
                            <div id="tags">{tagsStr}</div>
                    </fieldset>
                    <select className={style.select}>
                        <option>Пункт 1 ылвдаовыдлаоывлоаы воадлыводал лвы дла длыоалыво дыалыв  влыодлвофыдлво довдлыофв ыфвдлол оаыво  ывдлаоыв</option>
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