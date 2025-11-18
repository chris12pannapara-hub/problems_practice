//Problem: Given a string and a word dictionary, determine if string can be segmented into space-separated words from dictionary.
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    console.log(wordSet);
    const dp = Array(s.length + 1).fill(false);
    console.log(s.length); 
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}
const s = prompt("Enter the string:"); // User input for the string
const wordDictInput = prompt("Enter words for the dictionary separated by commas:");
const wordDict = wordDictInput.split(",").map(word => word.trim());
const result = wordBreak(s, wordDict);
console.log(result);