var constructMaximumBinaryTree = function(nums) {
    let len = nums.length
  let max = nums[0]
  let index = 0
  for(let i =0;i<len;i++){
    if(nums[i]>max){
      max = nums[i]
      index = i
    }
  }
  let node = new TreeNode(max)
  if(index>0){
    node.left = constructMaximumBinaryTree(nums.slice(0,index))
  }
  if(index<len-1){
    node.right = constructMaximumBinaryTree(nums.slice(index+1))
  }
  return node
};
console.log(constructMaximumBinaryTree([3,2,1,6,0,5])) 