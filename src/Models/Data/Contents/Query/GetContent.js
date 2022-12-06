import {contentData} from "../Data/contentData";

export const GetContent = (id) => {
    return contentData.find(content => content.id == id);
}