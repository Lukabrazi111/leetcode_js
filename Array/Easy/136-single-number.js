/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let unique = [];

    for (let i = 0; i < nums.length; i++) {
        if (!unique.includes(nums[i])) {
            unique.push(nums[i]); // [4,1,2]
        } else {
            unique.splice(unique.indexOf(nums[i]), 1);
        }
    }

    return unique[0];
};

console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));