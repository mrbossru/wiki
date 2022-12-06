import {generateUUID} from "../../../../Helpers/generateUUID";
import {state} from "../../../State";
import {Contents} from "../../Contents/Contents";
import {Articles} from "../Articles";

export const  CreateNew = (catalogId) => {
    let newContent = Contents.CreateNew();
    let newArticle = {id: generateUUID(), catalogId: catalogId, contentId: newContent.id, name: "NewArticle", index: 0};
    Articles.Add(newArticle);
    return newArticle;
}