var convertToTitle = function(columnNumber) {
    let res = [];
    while (columnNumber > 0) {
        const a0 = (columnNumber - 1) % 26 + 1;
        res.push(String.fromCharCode(a0 - 1 + 'A'.charCodeAt()));
        columnNumber = Math.floor((columnNumber - a0) / 26);
    }
    res.reverse();
    return res.join('');
};
