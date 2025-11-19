//Problem: Find all combinations of numbers that add up to a target.

function combinationSum(candidates, target) {
    const result = [];
    function backtrack(remain, comb, start) {
        if (remain === 0) {
            result.push([...comb]);
            return;
        } else if (remain < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i);
            comb.pop();
        }
    }
    backtrack(target, [], 0);
    return result;
}
const inputCandidates = prompt("Enter candidate numbers separated by commas:"); // User input for candidates
const candidates = inputCandidates.split(",").map(Number);
const targetInput = prompt("Enter the target sum:"); // User input for target
const target = Number(targetInput);
const combinations = combinationSum(candidates, target);
console.log(combinations);