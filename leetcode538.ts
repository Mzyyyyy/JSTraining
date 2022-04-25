function convertBST(root: TreeNode | null): TreeNode | null {
    let sum = 0
    function deep(root: TreeNode | null) {
        if (root !== null) {
            deep(root.right)
            sum += root.val
            root.val = sum
            deep(root.left)
        }
    }
    deep(root)
    return root
};