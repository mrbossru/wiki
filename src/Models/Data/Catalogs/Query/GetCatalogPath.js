import {catalogData} from "../Data/catalogData";

export const GetCatalogPath = (catalogId) => {
    let catalog = catalogData.filter(catalog => catalog.id == catalogId)[0];
    if (!catalog) {
        return "";
    } else {
        return GetCatalogPath(catalog.parent) + "/" + catalog.name;
    }
}