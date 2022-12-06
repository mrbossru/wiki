export let catalogData = [
    {id: "1", name: "wiki", parent: "root", index: 1},
    {id: "2", name: "wiki1", parent: "root", index: 0},
    {id: "3", name: "wiki2", parent: "1", index: 1}
]

export const Set = (data) => {
    catalogData = data;
}