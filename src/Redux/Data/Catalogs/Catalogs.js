import {GetCatalogPath} from "./Query/GetCatalogPath";
import {GetCatalogs} from "./Query/GetCatalogs";
import {GetCatalog} from "./Query/GetCatalog";
import {Add} from "./Query/Add";
import {Del} from "./Query/Del";

export let Catalogs = {
    Add: Add,
    Del: Del,
    GetCatalogPath: GetCatalogPath,
    GetCatalogs: GetCatalogs,
    GetCatalog: GetCatalog
}