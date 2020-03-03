function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    var answer = participant[participant.length -1];
    for (let idx = 0; idx < participant.length; idx++) {
      if (participant[idx] !== completion[idx]) {
        answer = participant[idx];
          break;
      }
    }

    return answer;
}