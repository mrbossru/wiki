import {tagData, Set} from "../Data/tagData";

export  const  Del = (id) => {
    let _tag = tagData.find(a => a.ud == id);
    if(_tag){
        Set(tagData.filter(a => a.id != id));
    }
}