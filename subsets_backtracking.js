//Problem: Given a set of distinct integers, return all possible subsets.

function subsets(nums) {
    const result = [];
    function backtrack(temp, start) {
        result.push([...temp]);
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
            backtrack(temp, i + 1);
            temp.pop();
        }
    }
    backtrack([], 0);
    return result;
}
const input = prompt("Enter distinct integers separated by commas:"); // User input for the set of integers
const nums = input.split(",").map(Number);
const subsetsResult = subsets(nums);
console.log(subsetsResult);