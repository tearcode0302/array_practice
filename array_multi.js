function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum);
        }
        answer.push(row);
    }

    return answer;
}

// 테스트
console.log(solution([[1,4], [3,2], [4,1]], [[3,3], [3,3]]));




// ex1) input
// arr1 : [[1,3], [3,2], [4,1]] , arr2 : [[3,3], [3,3]]
// ex2) output
// [[15,15], [15,15], [15,15]]




// arr1 : [[2,3,2], [4,2,4], [3,1,4]] , arr2: [[5,4,3], [2,4,1], [3,1,1]] 





