var canThreePartsEqualSum = function(arr) {
    let count =0
      let sum=0
      let s=0
      for(let i=0;i<arr.length;i++){
          sum += arr[i]
      }
      if(sum%3!=0) return false
      for(i=0;i<arr.length;i++){
          s += arr[i]
          if(s == sum /3){
              count++
              s=0
          }
      }
      return count >=3
    };