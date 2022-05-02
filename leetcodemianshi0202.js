var kthToLast = function(head, k) {
    const arr = []
    let newList = new ListNode(0,head)
    let cur = newList
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    return arr[arr.length-k]
};
