import {generateUUID} from "../../../Helpers/generateUUID";
import {state} from "../../../State";
import {Contents} from "../../Contents/Contents";
import {Articles} from "../Articles";

export const  CreateNew = () => {
    let newContent = Contents.CreateNew();
    let newArticle = {id: generateUUID(), catalogId: state.rootCatalog, contentId: newContent.id, name: "NewArticle", index: 0};
    Articles.Add(newArticle);
    return newArticle;
}