// 把一棵树转为链表
var flatten = function(root) {
    let arr = []
    function front(node){
        if(!node){
            return
        }
        arr.push(node)
        front(node.left)
        front(node.right)
    }
    front(root)
    for(let i =0;i<arr.length;i++){
        arr[i].left = null;
        arr[i].right = arr[i+1]||null;
    }
};