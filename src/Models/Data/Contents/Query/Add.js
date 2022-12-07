import {contentData} from "../Data/contentData";

export  const  Add = (content) => {
    console.log("Content.Add",content);
    let _content = contentData.find(a => a.id == content.id);
    if(_content) {
        _content.data = content.data;
    } else {
        contentData.push(content);
    }
}