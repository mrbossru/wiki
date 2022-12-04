import {questionData, Set} from "../Data/questionData";
import {Links} from "../../Links/Links";
import {Tags} from "../../Tags/Tags";

export  const Del = (id) => {
    let _question = questionData.find(a => a.id == id);
    if(_question){
        Set(questionData.filter(a => a.id != id));
        let rLinks = Links.GetChilds(id);
        let ids = rLinks.map(l => l.children);
        rLinks.forEach(l => Links.Del(l.id));
        ids.forEach(rId => {
            Tags.Del(rId);
        })
    }
}