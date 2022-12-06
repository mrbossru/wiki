import {GetCatalogs} from "./Query/GetCatalogs";
import {GetCatalog} from "./Query/GetCatalog";
import {Add} from "./Query/Add";
import {Del} from "./Query/Del";
import {CreateNew} from "./Query/CreateNew";
import {GetCatalogPath} from "./Query/GetCatalogPath";

export let Catalogs = {
    Add: Add,
    Del: Del,
    GetCatalogs: GetCatalogs,
    GetCatalog: GetCatalog,
    CreateNew: CreateNew,
    GetCatalogPath : GetCatalogPath
}