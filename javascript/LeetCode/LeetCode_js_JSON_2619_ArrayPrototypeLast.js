/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    /** pop() 대신 인덱스로 접근하세요! 원본을 건드리지 않고 '조회'만 */
    // if (this.length > 0) return this.pop();
    // else return -1;

    /** 1. 전통적인 방식 (인덱스 활용) */
    if (this.length === 0) return -1;
    return this[this.length - 1];

    /** 2. 최신 방식 (at 메서드 활용) */
    // .at(-1)은 배열이 비었으면 undefined를 뱉으므로 ??를 씁니다.
    // return this.length === 0 ? -1 : this.at(-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */