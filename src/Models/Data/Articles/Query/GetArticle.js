import {articleData} from "../Data/articleData";

export const GetArticle = (id) => {
    return articleData.find(article => article.id == id);
}