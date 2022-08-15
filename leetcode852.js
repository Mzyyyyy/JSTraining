var peakIndexInMountainArray = function(arr) {
    let len = arr.length
    for(let i = 1;i<len;i++){
        if(arr[i]<arr[i-1]){
            return i-1
        }
    }
};