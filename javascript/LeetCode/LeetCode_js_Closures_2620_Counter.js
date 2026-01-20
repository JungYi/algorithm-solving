/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

var createCounterExplanation = function(n) {
    // 이 'n'은 부모 방에 저장된 '상태'입니다.
    return function() { 
        // 자식 함수는 인자를 받지 않습니다. 
        // 대신 부모 방에 있는 'n'을 직접 건드립니다.
        return n++; 
        // n++의 의미: "지금 n을 리턴하고, 그 다음에 1을 더해놔!" (후위 연산자)
    };
};

const counter2 = createCounterExplanation(10); 
// 1. 부모 실행 완료. n=10인 방이 만들어짐.
// 2. counter는 그 방을 열 수 있는 유일한 자식 함수임.

console.log(counter2()); // 10 출력 (방에 가서 10 꺼내오고, n을 11로 바꿔둠)
console.log(counter2()); // 11 출력 (방에 가서 11 꺼내오고, n을 12로 바꿔둠)
console.log(counter2()); // 12 출력 (방에 가서 12 꺼내오고, n을 13으로 바꿔둠)