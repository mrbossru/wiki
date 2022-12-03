import {catalogData} from "../Data/catalogData";

export const GetCatalogPath = (id) => {
    let catalog = catalogData.filter(catalog => catalog.id == id)[0];
    if (!catalog) {
        return "";
    } else {
        return GetCatalogPath(catalog.parent) + "/" + catalog.name;
    }
}