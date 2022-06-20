var RandomizedSet = function() {
    this.map = {}
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val]){
        return false
    }else{
        this.map[val] = true
        this.sum+=1
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map[val]){
        delete this.map[val]
        this.sum-=1
        return true
    }else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return Object.keys(this.map)[Math.floor(Math.random()*this.sum)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */