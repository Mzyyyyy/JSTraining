var corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0)
    let len = bookings.length
    for (let i = 0; i < len; i++) {
        let [start, end, count] = bookings[i]
        for (let j = start; j <= end; j++) {
        res[j - 1] += count
        }
    }
    return res
};
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5))