import {contentData} from "../Data/contentData";

export const Del =(id) => {
    let _content = contentData.find(a => a.id == id);
    if(_content){
        const index = contentData.indexOf(_content);
        contentData.slice(index,1);
    }
}