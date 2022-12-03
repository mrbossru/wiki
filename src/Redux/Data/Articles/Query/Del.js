import {articleData} from "../Data/articleData";

export const Del = (id) => {
    let _article = articleData.find(a => a.id == id);
    if(_article){
        const index = articleData.indexOf(_article);
        articleData.slice(index,1);
    }
}