import {generateUUID} from "../../../../Helpers/generateUUID";
import {Contents} from "../Contents";

export const CreateNew = () => {
    let newContent = {id:generateUUID, data: ""};
    Contents.Add(newContent);
    return newContent;
}