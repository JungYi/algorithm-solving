/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // 꼼수(Hack)
    // 비효율의 극치: 만약 객체 안에 데이터가 100만 개 들어있다면?
    // 시간 복잡도: O(N). 객체가 커질수록 느려짐.
    // if (JSON.stringify(obj).length === 2) return true;
    // else return false;

    /**
     * JSON 방식,        O(N), ★★★★ , 기발하지만 큰 데이터에선 쥐약
     * Object.keys 방식, O(N), ★★★★★, 표준적이고 가장 많이 씀
     * for...in 방식,    O(1), ★★★  , 성능 면에서 가장 효율적
     */

    return Object.keys(obj).length === 0;

    for (let key in obj) return false;
    return true;
};