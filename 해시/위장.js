(function solution(clothes) {
    let answer = 1;
    let clothsMap = new Map();

    clothes.forEach(cloth => {
        if (!clothsMap.has(cloth[1])) {
            clothsMap.set(cloth[1], [cloth[1]]);
        }
        else {
            clothsMap.get(cloth[1]).push(cloth[1]);
        }
    });

    clothsMap.forEach((value, key) => {
        answer *= value.length + 1
    });

    return answer - 1;


})([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);