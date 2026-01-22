/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // ...args : 너희가 몇 개를 던지든 내가 전부 싹 모아서 '배열'로 만들어줄게
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 * argumentsLength({}, null, "6"); // 3
 */