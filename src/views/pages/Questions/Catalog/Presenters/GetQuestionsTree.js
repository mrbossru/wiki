export const GetQuestionsTree = (model, rootId) => {
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
    let questions = model.Questions.GetQuestions(rootId);
    let aTree = questions.map(a => {
        let el = {
            id: a.id,
            parent: rootId,
            droppable: false,
            text: a.name,
            data: {
                index: a.index,
                qContentId: a.qContentId,
                aContentId: a.aContentId,
                vCount: a.vCount,
                rang: a.rang,
                href: ("questions/"+ a.id),
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
            ...GetQuestionsTree(model, c.id)
        ])
    return tree
}