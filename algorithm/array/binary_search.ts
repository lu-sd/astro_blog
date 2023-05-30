// input nums=,target = 3
// output 2
// find the index of the target in an array

function binarySearch(arr: number[], target: number) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
const a = binarySearch([-1, 0, 3, 5, 6, 12], 7);
console.log("result = ", a);

// if not found ,please return the insert location
// 18 --> return right
