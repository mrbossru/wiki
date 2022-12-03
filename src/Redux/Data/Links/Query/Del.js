import {linkData, Set} from "../Data/linkData";

export  const  Del = (id) => {
    let _link = linkData.find(a => a.id == id);
    if(_link){
        Set(linkData.filter(a => a.id != id));
    }
}