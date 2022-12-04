import {Links} from "../../Links/Links";
import {tagData} from "../Data/tagData";


export const GetTags = (parent) => {
    let links = Links.GetChilds(parent).map(l => l.child);
    return tagData.filter(t => links.includes(t.id));
}