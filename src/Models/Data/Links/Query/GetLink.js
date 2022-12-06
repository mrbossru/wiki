import {linkData} from "../Data/linkData";

export const  GetLink = (id) => {
    return linkData.find(link => link.id == id);
}