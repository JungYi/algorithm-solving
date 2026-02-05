/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    // 디바운스(Debounce)는 클로저(Closure)와 타이머(setTimeout)

    let timerId; // 1. 타이머 번호를 저장할 변수 (Closure)

    return function(...args) {
        // 2. [핵심] 만약 이미 돌아가고 있는 타이머가 있다면? 가차 없이 취소!
        clearTimeout(timerId);

        // 3. 새로운 타이머를 세팅 (setTimeout)
        timerId = setTimeout(() => {
            fn(...args); // 4. t 밀리초 동안 아무런 방해가 없었다면 드디어 실행!
        }, t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */