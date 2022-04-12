let tree = {
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:{
                val:7
            },
            right:{
                val:2
            }
        }
    },
    right:{
        val:8,
        left:{
            val:13
        },
        right:{
            val:4,
            left:{
                val:5
            },
            right:{
                val:1
            }
        }
    }
} 
function pathSum(root, target) {
    if(!root) return []
    let res = []
    function dfs(path,sum,node){
        if(!node) return
        path.push(node.val)
        sum+=node.val
        if(!node.left&&!node.right){
            if(sum === target){
                res.push(path)
            }
        }else{
            dfs([...path],sum,node.left)
            dfs([...path],sum,node.right)
        }
    }
    dfs([],0,root)
    return res
};

console.log(pathSum(tree,22))