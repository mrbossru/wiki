import {articleData} from "../Data/articleData";

export const GetArticle = (id) => {
    return articleData.filter(article => article.id == id);
}