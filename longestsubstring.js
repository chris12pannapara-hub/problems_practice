function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const charMap = new Map();
    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            left = charMap.get(s[right]) + 1;
        }
        charMap.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
const inputString = prompt("Enter a string:"); // User input for the string
const result = lengthOfLongestSubstring(inputString);
console.log(result);

// Sliding window concept:
// function slidingWindow(arr, k) {
//     let maxSum = 0;
//     let windowSum = 0;

//     // Calculate sum of first window
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i]; // can also be written as windowSum = windowSum + arr[i];
//     }
//     maxSum = windowSum;

//     // Slide the window from start to end
//     for (let i = k; i < arr.length; i++) {
//         windowSum += arr[i] - arr[i - k]; // can also be written as windowSum = windowSum + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }

//     return maxSum;
// }

// Example usage
// const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// const k = 4;
// console.log(slidingWindow(arr, k)); // Output: 39
