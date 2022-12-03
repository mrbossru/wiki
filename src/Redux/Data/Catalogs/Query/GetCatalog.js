import {catalogData} from "../Data/catalogData";

export const GetCatalog = (id) => {
    return catalogData.filter(catalog => catalog.id == id);
}