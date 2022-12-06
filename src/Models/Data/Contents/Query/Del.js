import {contentData, Set} from "../Data/contentData";

export const Del =(id) => {
    let _content = contentData.find(a => a.id == id);
    if(_content){
        Set(contentData.filter(a => a.id != id));
    }
}