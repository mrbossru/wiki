import {Helpers} from "../../../../Helpers/Helpers";
import {state} from "../../../State";

export const CreateNew = (name, parent) => {
    let newCatalog = {id: Helpers.generateUUID(), name: name, parent: parent, index: 1}
    return newCatalog;
}