var preorder = function(root) {
    if(!root) return []
    let res = []
    getNode(root,res)
    return res
};
function getNode(node,res){
    res.push(node.val)
    for(let item of node.children){
        getNode(item,res)
    }
}
