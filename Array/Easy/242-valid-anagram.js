/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    return a === b;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('aacc', 'ccac'));
