/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    // 1. 현재 상태를 추적할 변수를 하나 만듭니다. (초기값 복사)
    let current = init;

    // 2. 함수 3개를 담은 '객체'를 리턴합니다.
    return {
        increment: function() {
            return ++current; // 값을 먼저 올리고, 그 결과값을 리턴
        },
        decrement: function() {
            return --current; // 값을 먼저 내리고, 그 결과값을 리턴
        },
        reset: function() {
            current = init; // 현재값을 다시 처음 받았던 init으로
            return current;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4