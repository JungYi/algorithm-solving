var TimeLimitedCache = function() {
    // 캐시 Map 생성
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // 데이터를 새로 넣기 직전의 상태를 변수에 저장해둬야 함.
    const exists = this.cache.has(key);

    // 이미 있다면, 기존 '타이머' 제거
    // if (this.cache.has(key)) {
    if (exists) {
        clearTimeout(this.cache.get(key).timerId);
    }

    // 새로운 타이머 설정: duration 밀리초 뒤에 삭제해라!
    const timerId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // 키-값 쌍(데이터) 저장 (map.set)
    this.cache.set(key, { value, timerId });

    // 데이터 존재 여부 확인 (map.has)
    // return this.cache.has(key);
    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    // 데이터 조회 (map.get)
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */