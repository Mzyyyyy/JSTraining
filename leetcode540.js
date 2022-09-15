var singleNonDuplicate = function(nums) {
    let len = nums.length
  let left = 0
  let right = len - 1
  while(left<=right){
      let mid = Math.floor((left + right) / 2)
      if(mid===left){
        if(nums[left]===nums[left -1]){
          return nums[right]
        }
        return nums[left]
      }
      if(mid===right){
        if(nums[right]===nums[right + 1]){
          return nums[left]
        }
        return nums[right]
      }
      if(nums[mid] === nums[mid - 1]){
          if(mid%2===0){
              right = mid
          }else{
              left = mid
          }
          
      }   
      else if(nums[mid] === nums[mid + 1]){
          if(mid%2===0){
              left = mid
          }else{
              right = mid
          }
      }
      else{
          return nums[mid]
      }
  } 
};