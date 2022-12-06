import {linkData} from "../Data/linkData";

export  const  Add = (link) => {
    let _link = linkData.find(a => a.id == link.id);
    if(_link) {
        _link.childId = link.childId;
        _link.parentId = link.parentId;
    } else {
        linkData.push(link);
    }
}