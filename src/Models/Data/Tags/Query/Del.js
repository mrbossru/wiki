import {tagData, Set} from "../Data/tagData";
import {Links} from "../../Links/Links";

export  const  Del = (id) => {
    let _tag = tagData.find(a => a.id == id);
    if(_tag){
        Set(tagData.filter(a => a.id != id));
    }
}