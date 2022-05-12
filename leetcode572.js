var isSubtree = function(root, subRoot) {
    if (!root){
        return subRoot === null
    }
    if(same(root,subRoot)) return true
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)

};
function same(p,q){
    if(!p || !q) return p === q
    return p.val === q.val && same(p.left,q.left) && same(p.right,q.right)
}
console.log(isSubtree())