import {linkData} from "../Data/linkData";

export  const  Del = (id) => {
    let _link = linkData.find(a => a.id == id);
    if(_link){
        const index = linkData.indexOf(_link);
        linkData.slice(index,1);
    }
}