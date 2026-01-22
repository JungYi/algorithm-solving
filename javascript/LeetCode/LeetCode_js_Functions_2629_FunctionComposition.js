/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // 굳이 예외 처리를 한다면 이렇게 '함수'를 뱉어야 합니다.
    // if (functions.length === 0) return (x) => x;
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */