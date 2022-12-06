import {useParams} from "react-router-dom";
import React from "react";
import {HeaderBtn} from "../../../Header/HeaderBtn/HeaderBtn";
import style from "../../Articles/Article/Article.module.css";

export const Question = (props) => {
    const params = useParams();
    const  question = props.model.Questions.GetQuestion(params.id);
    if(!question) return(<div>Данный вопрос не найден</div>)
    const qContent = props.model.Contents.GetContent(question.aContentId);
    const aContent = props.model.Contents.GetContent(question.aContentId);
    if(!question) return(<div>Данный вопрос не найден</div>)
    return(
        <div>
            <HeaderBtn editlnk={"/question/edit/" + question.id}/>
            <h3 className={style.header}>{question.name}</h3>
            <h4 className={style.header}>Вопрос:</h4>
            <div className={style.content} dangerouslySetInnerHTML={{__html:  qContent.data}}></div>
            <h4 className={style.header}>Ответ:</h4>
            <div className={style.content} dangerouslySetInnerHTML={{__html:  aContent.data}}></div>
        </div>
    )
}