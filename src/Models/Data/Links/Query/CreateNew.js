import {Helpers} from "../../../../Helpers/Helpers";
import {Links} from "../Links";

export const  CreateNew = (parent, child) => {
    let newLink = {id: Helpers.generateUUID(), parentId: parent, childId: child};
    Links.Add(newLink);
    return newLink;
}