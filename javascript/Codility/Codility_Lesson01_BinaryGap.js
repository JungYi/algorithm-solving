console.log("Hello, JS!");

//const number = 9;
//const number = 1041;
//const number = 21;
const number = 161; // 10100001
const binaryString = number.toString(2);
console.log(`The binary representation of ${number} is ${binaryString}`);
let maxGap = 0;
let currentGap = 0;
let hasFirstOne = false;

// Edge Cases
// 100000
// 111
// 0001000110000

// for (let i = 0; i < binaryString.length; i++) {
//     const char = binaryString[i];

//     if (char == '0' && hasFirstOne == true) {
//         currentGap++;
//     }
//     else if (char == '1' && hasFirstOne == false) {
//         hasFirstOne = true;
//     }
//     else if (char == '1' && hasFirstOne == true) {
//         maxGap = Math.max(maxGap, currentGap);
//         currentGap = 0;
//     }
// }

for (const char of binaryString) {
    if (char === '1') {
        if (hasFirstOne) {
            maxGap = Math.max(maxGap, currentGap);
        }
        hasFirstOne = true;
        currentGap = 0;
    }
    else if (char === '0' && hasFirstOne) {
        currentGap++;
    }
}

console.log(`The maximum binary gap is ${maxGap}`);