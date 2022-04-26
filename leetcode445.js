var addTwoNumbers = function(l1, l2) {
    let r1 = reverse(l1)
    let r2 = reverse(l2)
    let res = []
    let flag = 0
    while(r1||r2){
        let sum = (r1?r1.val:0) + (r2?r2.val:0) + flag
        if(sum>=10){
            flag = 1
            sum -= 10
        }else{
            flag = 0
        }
        res.unshift(new ListNode(sum))
        r1 = r1?r1.next:null
        r2 = r2?r2.next:null
    }

    if(flag===1){
      res.unshift(new ListNode(1))
    }
    
    for(let i =0;i<res.length;i++){
        res[i].next = res[i+1] || null
    }
    return res[0]
};
function reverse(head) {
    let pre =null
    let cur = head
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};