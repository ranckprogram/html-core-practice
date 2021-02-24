const tree = document.querySelector("#tree");

console.log(data);

function list2Tree(data, parentsemanticid, children = "nodes", depth = 0) {
  let res = [];
  data.forEach((item) => {
    if (item.parentsemanticid === parentsemanticid) {
      let itemChildren = list2Tree(data, item.id, children, depth + 1);
      if (itemChildren.length) item[children] = itemChildren;
      item.expand = true;
      item.open = true;
      res.push({
        ...item,
        depth,
      });
    }
  });
  return res;
}


function renderNode(root, data) {
  const treeItem = document.createElement("div");
  treeItem.classList.add("tree-item")
  const treeList = document.createElement("div");
  treeList.classList.add("tree-list")
  const treeIcon = document.createElement("div");
  treeIcon.classList.add("tree-icon")

  const treeList = document.createElement("a");
  

}


function renderTree(tree) {

}