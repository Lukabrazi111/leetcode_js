/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    let arr = [[1], [1, 1]];

    for(let i = 2; i <= rowIndex; i++) {
        let prev = arr[i - 1];
        let row = [1];

        for(let j = 1; j < i; j++) {
            row.push(prev[j - 1] + prev[j]);
        }

        row.push(1);
        arr.push(row);
    }

    return arr[rowIndex];
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));