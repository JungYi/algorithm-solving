/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // 1. 첫 번째 진동벨이 울릴 때까지 기다려서 숫자(value1)를 받는다.
    const value1 = await promise1; 
    
    // 2. 두 번째 진동벨이 울릴 때까지 기다려서 숫자(value2)를 받는다.
    const value2 = await promise2;

    // 3. 이제 진짜 숫자끼리 더한다!
    return value1 + value2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */