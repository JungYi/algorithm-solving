/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {};
    for (let i = 0; i < this.length; i++) {
        const value = this[i];
        console.log(value);
        const key = fn(value);
        console.log(key);
        
        /**
        if (!obj[fn(this[i])])
            obj[fn(this[i])] = [];
        obj[fn(this[i])].push(this[i]);
         */

        if (!obj[key])
            obj[key] = [];
        obj[key].push(value);
    }
    console.log(obj);

    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */