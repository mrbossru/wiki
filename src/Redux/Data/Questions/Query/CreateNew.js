import {Helpers} from "../../../Helpers/Helpers";
import {Contents} from "../../Contents/Contents";

export const  CreateNew = () => {
    let newContent = Contents.CreateNew();
    let newQuestion = {id: Helpers.generateUUID(), name:"", ContentId: newContent.id, vCount: 0, rang: 0};
    return newQuestion;
}