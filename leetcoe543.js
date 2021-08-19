let tree = {
    val:1,
    left:{
        val:2,
        left:{
            val:4
        },
        right:{
            val:5
        }
    },
    right:{
        val:3,
        left:{
            val:6
        },
        right:{
            val:7
        }
    }
}

var diameterOfBinaryTree = function(root) {
    if(!root){
        return 0
    }
    let res = getDeep(root.left)+getDeep(root.right)+1
    return res
};

function getDeep(root){
    if(!root){
        return 0
    }
    return Math.max(getDeep(root.left),getDeep(root.right))+1
}


console.log(diameterOfBinaryTree(tree))