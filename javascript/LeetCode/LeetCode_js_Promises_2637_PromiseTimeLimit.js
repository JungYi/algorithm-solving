/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        /**
        const time = new Promise (resolve => {
            setTimeout(resolve, t);
        })
        
        // 여기서 'time'은 항상 '진동벨 객체'라서 무조건 참(true)
        if (time) return fn(...args);
        else throw "Time Limit Exceeded";
         */
        
        // 1. 폭탄 만들기: t초 뒤에 "Time Limit Exceeded"라고 에러를 던지는 약속
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        
        // 2. 실제 요리 시작: fn(...args)를 실행함
        const functionPromise = fn(...args);
        
        // 3. 지독한 달리기 시합! 먼저 끝나는 쪽의 결과를 리턴함
        return Promise.race([functionPromise, timeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */