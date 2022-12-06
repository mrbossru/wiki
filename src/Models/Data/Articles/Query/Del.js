import {articleData, Set} from "../Data/articleData";
import {Links} from "../../Links/Links";
import {Tags} from "../../Tags/Tags";
import {Questions} from "../../Questions/Questions";
import {Contents} from "../../Contents/Contents";

export const Del = (id) => {
    console.log("del",id);
    let _article = articleData.find(a => a.id == id);
    if(_article){
        Set(articleData.filter(a => a.id != id));
        Contents.Del(_article.contentId);
        let rLinks = Links.GetChilds(id)
        let ids = rLinks.map(l => l.child);
        ids.forEach(rId => {
            Tags.Del(rId);
            Questions.Del(rId);
        })
        rLinks.forEach(l => Links.Del(l.id));
    }
}