// const g = [1,2,3], s = [1,1];
const s = "anagram", t = "nagaram";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    if (sortedS === sortedT) return true;
    else return false;

    // 1. split(''): 문자열을 배열로 쪼개고
    // 2. sort(): 알파벳 순으로 정렬하고
    // 3. join(''): 다시 문자열로 합쳐서 비교!
    // return s.split('').sort().join('') === t.split('').sort().join('');
};

var isAnagramOthers = function(s, t) {
    if (s.length !== t.length) return false;

    const countMap = {};
    for (let char of s) 
        countMap[char] = (countMap[char] || 0) + 1;
    console.log(countMap);

    // 3. 두 번째 단어(t)를 돌면서 알파벳 개수를 깎습니다.
    for (let char of t) {
        // 만약 찾는 알파벳이 없거나, 이미 0개라면? (불일치!)
        if (!countMap[char]) return false;
        countMap[char]--;
    }
    // 4. 여기까지 무사히 왔다면, 모든 숫자가 0이 되었다는 뜻입니다.
    return true;
};

console.log(`isAnagram(s, t): ${isAnagram(s, t)}`);
console.log(`isAnagramOthers(s, t): ${isAnagramOthers(s, t)}`);