import {Catalogs} from "../../Catalogs/Catalogs";
import {Articles} from "../Articles";

export const GetArticlesTree = (root) => {
    let catalogs = Catalogs.GetCatalogs(root);
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
    let articles = Articles.GetArticles(root);
    let aTree = articles.map(a => {
        let el = {
            id: a.id,
            parent: root,
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
            ...GetArticlesTree(c.id)
        ])
    return tree
}
