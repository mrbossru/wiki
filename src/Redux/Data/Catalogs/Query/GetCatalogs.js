import {catalogData} from "../Data/catalogData";

export const GetCatalogs = (root) => {
    return catalogData.filter(catalog => catalog.parent==root).sort((a,b)=> a.index-b.index);
}