let line = {
    val:-10,
    next:{
        val:-3,
        next:{
            val:0,
            next:{
                val:5,
                next:{
                    val:9
                }
            }
        }
    }
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var sortedListToBST = function(head) {
    if(!head) return null
    if(!head.next) return new TreeNode(head?head.val:0)
    let {pre,cur} = getMid(head)
    pre.next = null
    let root = new TreeNode(cur.val)
    if(head){
      root.left = head.next?sortedListToBST(head):new TreeNode(head.val)
    }
    if(cur){
      root.right = cur.next?sortedListToBST(cur.next):null
    }
    return root
};

function getMid(head){
  let dummy = new ListNode()
  dummy.next = head
  let pre = dummy
  let cur = head
  let double = head
  while(double && double.next){
    pre = cur
    double = double.next.next
    cur = cur.next
  }
  return {pre,cur}
}

// console.log(sortedListToBST(line))
console.log(sortedListToBST(null))