import {linkData} from "../Data/linkData";

export const GetChilds  = (parentId) => {
    return linkData.filter(link => link.parentId == parentId);
}