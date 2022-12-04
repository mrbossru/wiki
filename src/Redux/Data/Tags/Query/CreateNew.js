import {Helpers} from "../../../Helpers/Helpers";
import {Tags} from "../Tags";

export const  CreateNew = () => {
    let newTag = {id: Helpers.generateUUID(), name: ""};
    Tags.Add(newTag);
    return newTag;
}