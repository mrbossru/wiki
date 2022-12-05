import {Helpers} from "../../../Helpers/Helpers";
import {Contents} from "../../Contents/Contents";
import {state} from "../../../State";

export const  CreateNew = () => {
    let newContent = Contents.CreateNew();
    let newQuestion = {id: Helpers.generateUUID(), name:"", catalogId: state.rootCatalog,ContentId: newContent.id, vCount: 0, rang: 0};
    return newQuestion;
}