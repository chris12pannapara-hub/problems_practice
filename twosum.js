const target = prompt("Enter the target number:");
const numsInput = prompt("Enter numbers separated by commas:");
const nums = numsInput.split(",").map(Number);


function twoSum(nums, target) {
    const finallist = new Map(); // To store value -> index mapping
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (finallist.has(complement)) {
            return [finallist.get(complement), i];
        }
        finallist.set(nums[i], i);
    }
    return []; // no solution found
}

const result = twoSum(nums, parseInt(target));
console.log(result);

// input: nums = [2, 7, 11, 15], target = 9
// iteration 0: complement = 7, map empty -> store 2->0
// iteration 1: complement = 2, map has 2 -> return [0, 1]