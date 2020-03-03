(function solution(heights) {
    var answer = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (heights[i] < heights[j]) {
                answer.unshift(j + 1);
                break;
            }
            if (j === 0) {
                answer.unshift(0);
            }
        }
    }

    answer.unshift(0);
    return answer;
})([6, 9, 5, 7, 4])