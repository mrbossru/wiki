
export const GetArticlesTree = (model, rootId) => {
    let catalogs = model.Catalogs.GetCatalogs(rootId);
    let tree = catalogs.map((c) => {
        let el = {
            id: c.id,
            parent: c.parent,
            droppable: true,
            text: c.name,
            data: {
                index: c.index,
                href: "#"
            }
        }
        return el
    })
    let articles = model.Articles.GetArticles(rootId);
    let aTree = articles.map(a => {
        let el = {
            id: a.id,
            parent: rootId,
            droppable: false,
            text: a.name,
            data: {
                index: a.index,
                contentId: a.contentId,
                href: ("article/"+ a.id),
            }
        }
        return el
    })
    tree = [
        ...tree,
        ...aTree
    ];
    catalogs.forEach(c =>
        tree = [
            ...tree,
            ...GetArticlesTree(model, c.id)
        ])
    return tree
}