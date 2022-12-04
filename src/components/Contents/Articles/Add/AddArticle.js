import React, {useCallback, useContext, useEffect, useState} from "react";
import ContentEditor from "../../../ContentEditor/ContentEditor";
import style from "./AddArticle.module.css";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";


let Context = 0;

export const AddArticle = (props) => {
    {
        const params = useParams();
        const [redirect, setRedirect] = useState(false);
        const navigate = useNavigate();
        if(redirect) {
            console.log("nav");
            navigate(("/article/" + params.id), {replace: true});
        }
        let content, article;
        let tags =[];

        let _article;
        if (params.id) {
            _article = props.state.Articles.GetArticle(params.id);
        }
        if (_article) {
            article = _article;
        } else {
            article = props.state.Articles.CreateNew();
        }
        content = props.state.Contents.GetContent(article.contentId);
        let catalogPath = props.state.Catalogs.GetCatalogPath(article.catalogId);
        tags = props.state.Tags.GetTags(article.id);

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
                        props.state.Links.CreateNew(article.id, newTag.id);
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
        let r = false

        const HandlerSave = () => {
            article.name = document.getElementById("atrtName").value;
            props.state.Articles.Add(article);
            props.state.Contents.Add(content);
            tags.forEach(t =>{
                props.Tags.Add(t);
            });
            setRedirect(true);
        }
        let handlerDelete = () => {
            props.Articles.Del(article.id);
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
                    <input type="text" id="tag" name="name" className={style.tags}/>
                    <button className={style.tags} onClick={handlerOnAddTag}>Добавить</button>
                    <button className={style.tags} onClick={handlerClearTags}>Очистить</button>
                    <fieldset>
                        <legend>Tags</legend>
                            <div id="tags"></div>
                    </fieldset>
                </div>


            </div>
        )
    }
}