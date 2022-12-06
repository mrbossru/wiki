import {Helpers} from "../../../../Helpers/Helpers";

export const  CreateNew = (catalogId) => {
    return {id: Helpers.generateUUID(), name:"Вопрос", catalogId: catalogId,qContentId: "Вопрос", aContentId: "Ответ", vCount: 0, rang: 0, index: 0};
}