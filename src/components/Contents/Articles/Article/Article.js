import React from "react";
import {NavLink, useParams} from "react-router-dom";
import style from "./Article.module.css";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";

export  const Article = (props) => {
    const params = useParams();
    const  article = props.state.Articles.GetArticle(params.id);

    if(article.length == 0){
        return(
            <div>Данная статья не найдена</div>
        )
    }
    const content = props.state.Contents.GetContent(article[0].contentId);
    if(content.length == 0){
        return(
            <div>Данная статья не найдена</div>
        )
    }
    return(
        <div>
            <HeaderBtn editlnk={"/article/edit/" + article[0].contentId}/>
            <h3 className={style.header}>{article[0].name}</h3>
            <div className={style.content}>
                {content[0].data}
            </div>
        </div>
    )
}