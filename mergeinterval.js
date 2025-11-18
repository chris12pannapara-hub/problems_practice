function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    for (let interval of intervals) {
        if (!result.length || result[result.length - 1][1] < interval[0]) {
            result.push(interval);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
        }
    }
    return result;
}
const intervalsInput = prompt("Enter intervals as comma-separated pairs (e.g., [[1,3],[2,6],[8,10],[15,18]]):");
const intervals = JSON.parse(intervalsInput);
const mergedIntervals = merge(intervals);
console.log(mergedIntervals);