import {generateUUID} from "../../../Helpers/generateUUID";

export const  CreateNewArticle = () => {
    return {id: generateUUID, catalogId: "-1", contentId: "0", name: "", index: 0};
}