import React from "react";
import {NavLink, useParams} from "react-router-dom";
import style from "./Article.module.css";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";

export  const Article = (props) => {
    const params = useParams();
    const  article = props.model.Articles.GetArticle(params.id);
    if(!article){
        return(
            <div>Данная статья не найдена</div>
        )
    }
    const content = props.model.Contents.GetContent(article.contentId);
    if(!content){
        return(
            <div>Данная статья не найдена</div>
        )
    }
    return(
        <div>
            <HeaderBtn editlnk={"/article/edit/" + article.id}/>
            <h3 className={style.header}>{article.name}</h3>
            <div className={style.content} dangerouslySetInnerHTML={{__html:  content.data}}></div>
        </div>
    )
}