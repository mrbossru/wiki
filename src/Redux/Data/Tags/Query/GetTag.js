import {tagData} from "../Data/tagData";

export  const  GetTag = (id) => {
    return  tagData.find(a => a.id == id);
}