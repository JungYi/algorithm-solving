/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };

    // return function(...args){
    //     return fn(args);
    //
    // ...args로 모은 데이터는 [1, 2, 3]이라는 배열입니다.
    // fn(args) : fn([1, 2, 3])
    // fn은 (a, b, c) 세 개의 숫자를 기다리고 있음.
    // 그래서 다시 펼쳐서(...args) 넣어줘야 합니다.
    // }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */