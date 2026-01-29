// const bloomDay = [1,10,3,10,2], m = 3, k = 1;
// const bloomDay = [1,10,3,10,2], m = 3, k = 2;
const bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3;

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    // make m bouquets. use k adjacent flowers.
    // that day. is it possible to make 'm bouquets'?
    // 부케를 만드는 데 필요한 총 꽃의 개수는 m * k개.
    // 만약 우리가 가진 꽃(bloomDay.length)보다 필요한 꽃이 더 많다면,
    // 굳이 이진 탐색을 돌릴 필요도 없이 바로 -1
    if (m * k > bloomDay.length) return -1;

    const makeBouquets = (day) => {
        console.log(`! day: ${day}`);

        let buquets = 0;
        let flowers = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] - day <= 0) flowers++;
            else flowers = 0;

            if (flowers === k) {
                buquets++;
                flowers = 0;
            }
            console.log(`i[${i}], bloomDay[i]: ${bloomDay[i]}},  flowers: ${flowers}, buquets: ${buquets}, `);

            if (buquets === m) return true;
        }
        return false;
    }

    // find the mid day
    // 자바스크립트에서 스프레드 연산자(...)는 배열이 너무 크면(예: 10만 개 이상)
    // Maximum call stack size exceeded 에러를 낼 수 있음
    // const maxBloomDay = Math.max(...bloomDay);
    let maxBloomDay = 0;
    for (const day of bloomDay) if (day > maxBloomDay) maxBloomDay = day;

    let left = 1;
    let right = maxBloomDay;
    let minDay = -1;

    while (left <= right) {
        let mid = left + Math.floor((right-left)/2);

        if (makeBouquets(mid)) { 
            minDay = mid;
            right = mid-1;
        } else left = mid+1;
    }
    // Return the minimum number of days.
    return minDay;
};

console.log(`minDays(bloomDay, m, k): ${minDays(bloomDay, m, k)}`);