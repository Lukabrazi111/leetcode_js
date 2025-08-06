/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    let arr = [];
    if (numRows >= 1) arr.push([1]);
    if (numRows >= 2) arr.push([1, 1]);

    for (let i = 2; i < numRows; i++) {
        let prev = arr[i - 1];
        let row = [1];

        for (let j = 1; j < prev.length; j++) {
            row.push(prev[j - 1] + prev[j]);
        }

        row.push(1);
        arr.push(row);
    }

    return arr;
};

console.log(generate(5));
console.log(generate(1));
