/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    // let arr = [];
    // let countOfZeroes = 0;
    //
    // arr = nums.filter(num => {
    //     if (num === 0) {
    //         countOfZeroes += 1;
    //     }
    //
    //     return num !== 0;
    // });
    //
    // for(let i = 0; i < countOfZeroes; i++) {
    //     arr.push(0);
    // }
    //
    // return arr;

    let countOfZeroes = 0;

    let arr = nums.filter(num => {
        if (num === 0) {
            countOfZeroes += 1;
        }

        return num !== 0;
    });

    for (let i = 0; i < countOfZeroes; i++) {
        arr.push(0);
    }

    nums.length = 0;
    nums.push(...arr);
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));