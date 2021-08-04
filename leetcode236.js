// 分解成子问题：判断左右子树中是否包含任意一个目标节点
var lowestCommonAncestor = function(root, p, q) {
    let res = null
    function dfs(root, p, q){
        if(!root){
            return false
        }
        let leftHasSon = dfs(root.left,p,q)
        let rightHasSon = dfs(root.right,p,q)
        if((leftHasSon&&rightHasSon)||((root.val===p.val||root.val===q.val)&&(leftHasSon||rightHasSon))){
            res = root
        }
        return leftHasSon||rightHasSon||(root.val===p.val||root.val===q.val)
    }
    dfs(root, p, q)
    return res
};