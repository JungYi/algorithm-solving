/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // 1. 장부를 만듭니다. (입력값: 결과값)
    // Map or Object
    // 성능과 기능 면에서 Map 더 유리
    const cacheMap = new Map();
    const cacheObj = {};

    return function(...args) {
        console.log('args:' + args);

        // args는 배열([2, 3])이라서 단순히 비교하기가 까다로워요. 가장 쉬운 방법은 이걸 문자열로 바꾸는 겁니다.
        // Map or Object
        const keyMap = JSON.stringify(args);
        const keyObj = JSON.stringify(args);
        // const keyObj = args.join(',');
        
        console.log('keyMap:' +keyMap);
        console.log('keyObj:' +keyObj);

        // if (args === '[]') console.log('yes');
        if (args.length === 0) console.log('yes');

        // 4. 장부에 이 키가 적혀 있는지 확인한다.
        // Map or Object
        if (cacheMap.has(keyMap)) return cacheMap.get(keyMap);
        if (keyObj in cacheObj) return cacheObj[keyObj];
        
        const result = fn(...args);
        // Map or Object
        cacheMap.set(keyMap, result);
        cacheObj[keyObj] = result; 

        return result;
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */