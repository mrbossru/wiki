import {Helpers} from "../../../../Helpers/Helpers";

export const  CreateNew = () => {
    return {id: Helpers.generateUUID(), parentId: "", childId: ""};
}