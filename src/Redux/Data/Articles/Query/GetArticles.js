import {articleData} from "../Data/articleData";

export const GetArticles = (root) => {
    return articleData.filter(article => article.catalogId==root).sort((a,b)=> a.index-b.index);
}