import {articleData} from "../Data/articleData";

export const Add = (article) => {
    console.log("add",article);
    let _article = articleData.find(a => a.id == article.id);
    if (_article) {
        _article.name = article.name;
        _article.contentId = article.contentId;
        _article.catalogId = article.catalogId;
        _article.index = article.index;
    } else {
        articleData.push(article);
    }
}