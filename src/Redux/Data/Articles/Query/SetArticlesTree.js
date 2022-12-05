import {getDescendants} from "@minoru/react-dnd-treeview";
import {Catalogs} from "../../Catalogs/Catalogs";
import {Articles} from "../Articles";

export const SetArticlesTree = (tree) => {
    let i = 0;
    let isHaveRemove= false
    tree = tree.map(t => {
        t.data.index = i;
        i++;
        return t
    })
    tree.forEach(t => {
        if(t.id != "remove") {
            if (t.droppable) {
                Catalogs.Add({id: t.id, name: t.text, parent: t.parent, index: t.data.index});
            } else {
                console.log("add", t);
                Articles.Add({
                    id: t.id,
                    catalogId: t.parent,
                    contentId: t.data.contentId,
                    name: t.text,
                    index: t.data.index
                });
            }
        } else {
            isHaveRemove = true;
        }
    })
    if(isHaveRemove){
        let removeNode = tree.find(n => n.id == "remove");
        if(removeNode) {
            let ids = getDescendants(tree, "remove");
            ids.forEach(el => {
                if(el.droppable){
                    Catalogs.Del(el.id);
                } else {
                    Articles.Del(el.id);
                }
            })
        }
    }
}
