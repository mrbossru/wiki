import {Helpers} from "../../../Helpers/Helpers";
import {state} from "../../../State";

export const CreateNew = (name) => {
    let newCatalog = {id: Helpers.generateUUID(), name: name, parent: state.rootCatalog, index: 1}
    return newCatalog;
}