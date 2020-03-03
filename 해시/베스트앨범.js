(function solution(genres, plays) {
    var answer = [];
    let valuesOfKeyMap = new Map();
    let valuesOfKeyArray = [];

    // 장르별 총 재생횟수 및 고유번호 별 재생횟수를 Map으로 모은다.
    genres.forEach((genre, idx) => {
        if (!valuesOfKeyMap.has(genre)) {
            valuesOfKeyMap.set(genre, { 'totalPlay': plays[idx], 'info': {} });
            valuesOfKeyMap.get(genre).info[idx] = plays[idx];
        }
        else {
            valuesOfKeyMap.get(genre)['totalPlay'] += plays[idx];
            valuesOfKeyMap.get(genre).info[idx] = plays[idx];
        }
    });

    // 총 재생횟수가 많은 장르별 내림차순을 구한다.
    valuesOfKeyMap.forEach((v) => valuesOfKeyArray.push(v));
    valuesOfKeyArray.sort((a, b) => b.totalPlay - a.totalPlay);

    // 장르별 재생횟수가 높은 순으로 answer을 구한다.
    valuesOfKeyArray.forEach(valuesOfKeyObj => {
        Object.entries(valuesOfKeyObj['info'])
            .sort((a, b) => b[1] - a[1])
            .forEach(([key, val], idx) => {
                if (idx < 2) {
                    answer.push(Number(key));
                }
            });
    });


    return answer;
})(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]);