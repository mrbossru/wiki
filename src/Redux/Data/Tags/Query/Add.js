import {tagData} from "../Data/tagData";

export const  Add = (tag) => {
    let _tag = tagData.find(a => a.id == tag.id)
    if(_tag){
        _tag.name = tag.name;
    } else  {
        tagData.push(tag);
    }
}