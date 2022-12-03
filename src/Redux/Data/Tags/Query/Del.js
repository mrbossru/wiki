import {tagData} from "../Data/tagData";

export  const  Del = (id) => {
    let _tag = tagData.find(a => a.ud == id);
    if(_tag){
        const index = tagData.indexOf(_tag);
        tagData.slice(index,1);
    }
}