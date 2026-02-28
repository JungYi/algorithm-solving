// const s = "()";
const s = "(]";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false;

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (stack.length && ((stack.at(-1) === "(" && s[i] === ")") || (stack.at(-1) === "[" && s[i] === "]") || (stack.at(-1) === "{" && s[i] === "}"))) {
            stack.pop();
        } else return false;
    }

    return stack.length > 0 ? false : true;
};

var isValidOthers = function(s) {
    if (s.length % 2 !== 0) return false;

    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (pairs[char])
            if (stack.pop() !== pairs[char]) return false;
        else
            stack.push(char);
    }

    return stack.length === 0;
};

console.log(`isValid(s): ${isValid(s)}`);
console.log(`isValidOthers(s): ${isValidOthers(s)}`);