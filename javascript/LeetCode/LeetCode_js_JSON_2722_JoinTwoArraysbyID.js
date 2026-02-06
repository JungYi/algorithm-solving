/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var joinPractice = function(arr1, arr2) {
    const joinedArray = {};

    for (let i = 0; i < arr1.length; i++) {
        joinedArray[arr1[i].id] = arr1[i];
    }
    console.log(joinedArray);

    for (let i = 0; i < arr2.length; i++) {
        if (joinedArray[arr2[i].id]) {
            // { ...old, ...new }: 점 세 개(Spread) 문법 "자동 덮어쓰기"
            joinedArray[arr2[i].id] = { ...joinedArray[arr2[i].id], ...arr2[i]};
        } else
            joinedArray[arr2[i].id] = arr2[i];
    }
    
    // Object.values(arr): 객체에 담긴 데이터들을 다시 배열로 꺼내오는
    const result = Object.values(joinedArray);
    result.sort((a,b) => a.id - b.id);

    return result;
};

var join = function(arr1, arr2) {
    const resultObj = {};

    // 1. arr1의 모든 요소를 객체에 담기 (id가 key)
    for (const item of arr1)
        resultObj[item.id] = item;
    
    // 2. arr2를 순회하며 합치거나 덮어쓰기
    for (const item of arr2)
        resultObj[item.id] = { ...resultObj[item.id], ...item };
    /**
    for (const item of arr2) {
        if (resultObj[item.id]) // 이미 있으면
            resultObj[item.id] = { ...resultObj[item.id], ...item }; // 덮어쓰기 (arr2가 우선순위!)
        else // 없으면
            resultObj[item.id] = item; // 새로 추가
    } */ // 한줄로 가능 (한줄은 조금 더 느림)
    
    // 3. 객체의 값들만 뽑아서 배열로 만들고 'id'로 정렬!
    return Object.values(resultObj).sort((a, b) => a.id - b.id);
};