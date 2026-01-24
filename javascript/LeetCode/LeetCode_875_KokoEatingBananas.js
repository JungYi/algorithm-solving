// const piles = [3,6,7,11], h = 8;
// const piles = [30,11,23,4,20,100], h = 5;
const piles = [101], h = 2;

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getTime = (K) => {
        let time = 0;
        for (let i = 0; i < piles.length; i++)
            time += Math.ceil(piles[i]/K);
        return time;
    }
    // for (let speed = 10; speed < 40; speed++) console.log(`스피드 = ${speed} 일때, h = ${getTime(speed)} 만큼의 시간이 걸린다.`);
    
    let left = 1;
    let right = Math.max(...piles);
    let answer = right;

    if (!right) return 0;

    while (left <= right) {
        // let mid = Math.floor((left+right)/2);
        let mid = left + Math.floor((right-left)/2);

        if (getTime(mid) <= h) {
            console.log(`oh ! mid = ${mid} 일때, h = ${getTime(mid)} 만큼의 시간이 걸린다.`);

            answer = mid;
            right = mid-1;
        }
        else {
            left = mid+1;
            
            console.log(`h(${h}) mid = ${mid} 일때, h = ${getTime(mid)} 만큼의 시간이 걸린다.`);
        }
    }

    return answer;
};

console.log(`minEatingSpeed(piles, h): ${minEatingSpeed(piles, h)}`);