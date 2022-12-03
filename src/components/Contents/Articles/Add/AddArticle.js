import React, {useContext} from "react";
import ContentEditor from "../../../ContentEditor/ContentEditor";
import style from "./AddArticle.module.css";
import {useParams} from "react-router-dom";

let Context = 0;


export const AddArticle = (props) => {
    {
        const params = useParams();
        let content, article, _article;
        if (params.id) {
            _article = props.state.Articles.GetArticle(params.id)[0];
        }
        if (_article) {
            article = _article;
        } else {
            article = props.state.Articles.CreateNewArticle();
        }
        let _content = props.state.Contents.GetContent(article.contentId)[0];
        if (_content) {
            content = _content
        } else {
            content = props.state.Contents.CreateNewContent();
        }
        let catalogPath = props.state.Catalogs.GetCatalogPath(article.catalogId);

        function Update(data) {
            content.data = data;
        }

        return (
            <div>
                <div>
                    <input className={style.input} type="text" defaultValue={article.name} required/>
                    <div className={style.labelBox}>
                        <label id="1" className={style.label}>Название статьи</label>
                    </div>
                </div>
                <div>
                    <label id="catalog" className={style.label}>{"Каталог: " + catalogPath}</label>
                </div>
                <div className={style.ContentEditor}>
                    <ContentEditor content={content.data} update={Update}/>
                </div>
            </div>
        )
    }
}