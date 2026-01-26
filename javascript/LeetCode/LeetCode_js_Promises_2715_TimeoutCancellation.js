/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // [1] 일단 예약 걸기 (폭탄 설치)
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // [2] 취소할 수 있는 '리모컨'을 리턴 (클로저)
    return function() {
        // 이 리모컨은 밖으로 나가서도 부모의 'timeoutId'를 배낭에 넣고 기억합니다.
        clearTimeout(timeoutId);
    };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */