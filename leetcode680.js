var validPalindrome = function(s) {
    if(s.length === 1) return true
    let left = 0
    let right = s.length-1
    
    while(left < right) {
        if(s[left] != s[right]) {
            return judge(left+1, right,s) || judge(left, right-1,s)
        }
        left++
        right--
    }
    return true
  }
  function judge(left, right,s) {
    while(left < right) {
        if(s[left] != s[right]) {
            return false
        }
        left++
        right--
    }
    return true
  }