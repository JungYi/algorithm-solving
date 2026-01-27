/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // 1. [중요] 기다리지 말고 즉시 한 번 실행! (Time: 0)
    fn(...args);

    // 2. [반복] 이제 t 밀리초마다 계속 실행해라! (폭탄이 아니라 무한 알람)
    const timer = setInterval(() => {
        fn(...args);
    }, t);

    // 3. [리모컨] 부모의 'timer' ID를 배낭에 챙겨서 나가는 클로저
    return function() {
        // 이 리모컨을 누르면 무한 알람이 멈춤
        clearInterval(timer);
    };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */