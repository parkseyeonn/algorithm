// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// - stack

function solution(board, moves) {
    let answer = 0;
    let bucket = [];
    for (let i = 0; i < moves.length; i++) {
        const index = board.findIndex(list => list[moves[i] - 1] > 0);
        if (index < 0) {
            continue;
        }
        const poppedItem = board[index][moves[i] - 1];
        board[index][moves[i] - 1] = 0;
        if (bucket.length && bucket[bucket.length - 1] === poppedItem) {
            bucket.pop();
            answer += 2;
            continue;
        }
        bucket.push(poppedItem);
    }
    return answer;
}

console.log(solution(
    [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4]
));