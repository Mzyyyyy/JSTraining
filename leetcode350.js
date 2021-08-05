// 350. 两个数组的交集 II
var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b) 
    nums2.sort((a,b)=>a-b) 
    let left = 0
    let right = 0
    let res = []
    while(left<nums1.length&&right<nums2.length){
        if(nums1[left]===nums2[right]){
            res.push(nums1[left])
            left++
            right++
        }else if(nums1[left]<nums2[right]){
            left++
        }else{
            right++
        }
    }
    return res
};
console.log(intersect([4,9,5],[9,4,9,8,4]))