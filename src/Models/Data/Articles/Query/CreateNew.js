import {Helpers} from "../../../../Helpers/Helpers";

export const  CreateNew = () => {
    return {id: Helpers.generateUUID(), catalogId: "", contentId: "", name: "NewArticle", index: 0};
}