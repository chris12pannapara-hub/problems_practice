function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const charMap = new Map();
    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
            left = charMap.get(s[right]) + 1;
        }
        charMap.set(s[right], right);
        console.log(charMap); // Debug: show current state of charMap
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
const inputString = prompt("Enter a string:"); // User input for the string
const outcome = lengthOfLongestSubstring(inputString);
console.log(outcome);

// Example for the length Of Longest Substring
// s = "abcabcbb" (showing each iteration):

// Initial: left=0, maxLen=0, charMap={}

// right | char | before action                      | action / update                     | left | charMap               | maxLen | current window
// ---------------------------------------------------------------------------------------------------------------
// 0     | 'a'  | charMap.has('a')? no               | set a -> 0                           | 0    | {a:0}                 | 1      | "a"         (0..0)
// 1     | 'b'  | has b? no                          | set b -> 1                           | 0    | {a:0, b:1}            | 2      | "ab"        (0..1)
// 2     | 'c'  | has c? no                          | set c -> 2                           | 0    | {a:0, b:1, c:2}       | 3      | "abc"       (0..2)
// 3     | 'a'  | has a? yes (0) and 0 >= left(0)    | move left = 0+1 = 1, set a -> 3     | 1    | {a:3, b:1, c:2}       | 3      | "bca"       (1..3)
// 4     | 'b'  | has b? yes (1) and 1 >= left(1)    | move left = 1+1 = 2, set b -> 4     | 2    | {a:3, b:4, c:2}       | 3      | "cab"       (2..4)
// 5     | 'c'  | has c? yes (2) and 2 >= left(2)    | move left = 2+1 = 3, set c -> 5     | 3    | {a:3, b:4, c:5}       | 3      | "abc"       (3..5)
// 6     | 'b'  | has b? yes (4) and 4 >= left(3)    | move left = 4+1 = 5, set b -> 6     | 5    | {a:3, b:6, c:5}       | 3      | "cb"        (5..6)
// 7     | 'b'  | has b? yes (6) and 6 >= left(5)    | move left = 6+1 = 7, set b -> 7     | 7    | {a:3, b:7, c:5}       | 3      | "b"         (7..7)

// Result: maxLen = 3 (from substring "abc")

//-----------------------------------------------------------------------------------//
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
