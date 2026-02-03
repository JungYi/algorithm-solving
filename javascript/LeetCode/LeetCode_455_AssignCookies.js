// const g = [1,2,3], s = [1,1];
const g =[10,9,8,7], s =[5,6,7,8];

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);

    let i = 0;
    let j = 0;
    let count = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            count++;
            i++;
        }
        j++;
        console.log(`i=${i},j=${j}`);
    }
    //return i; // 결국 i의 값이 만족한 아이의 총 수!
    return count;
};

console.log(`findContentChildren(g, s): ${findContentChildren(g, s)}`);