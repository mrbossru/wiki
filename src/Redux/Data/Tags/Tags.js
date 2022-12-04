import {GetTag} from "./Query/GetTag";
import {Del} from "./Query/Del";
import {Add} from "./Query/Add";
import {CreateNew} from "./Query/CreateNew";
import {GetTags} from "./Query/GetTags";

export const Tags = {
    Add: Add,
    Del: Del,
    GetTag: GetTag,
    CreateNew : CreateNew,
    GetTags: GetTags
}