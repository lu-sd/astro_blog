// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;

  if (n === 0 || k === 0) return [];

  const result: number[] = [];
  const deque: number[] = [];

  for (let i = 0; i < n; i++) {
    // remove indices of elements that are smaller than the current element
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    // add the current index to the deque
    deque.push(i);
    // remove indices of elements that are no longer in the window
    while (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }
    // the result array is updated only when the number of elements being traversed is greater than k.
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}
