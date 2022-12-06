import {getDescendants} from "@minoru/react-dnd-treeview";

export const SetArticlesTree = (model, tree) => {
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
                model.Catalogs.Add({id: t.id, name: t.text, parent: t.parent, index: t.data.index});
            } else {
                model.Articles.Add({
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
                    model.Catalogs.Del(el.id);
                } else {
                    model.Articles.Del(el.id);
                }
            })
        }
    }
}