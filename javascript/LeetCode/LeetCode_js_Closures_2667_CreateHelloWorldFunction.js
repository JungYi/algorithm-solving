/**
 * 클로저: "함수가 끝난 뒤에도 부모의 변수를 잊지 않고 기억하는 능력."
 * 왜 써?: "변수를 아무나 못 건드리게 숨기고(보안), 값을 계속 기억하기 위해서(상태)."
 * 
 * A closure is the ability of a function
 * to remember and access variables from its parent scope,
 * even after the parent function has finished executing.
 * 
 * Data Privacy/Encapsulation:
 *  To prevent outside code from accessing or modifying internal variables directly.
 * 
 * State Persistence:
 *  To maintain and update values across multiple function calls without using global variables.
 * 
 */

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) { // ...args: "너희가 뭘 던지든 내가 배열로 받아줄게."
        return "Hello World";
    }
};

const f = createHelloWorld();
f(); // "Hello World"