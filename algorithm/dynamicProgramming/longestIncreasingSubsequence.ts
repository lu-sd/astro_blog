// 300:Given an integer array nums, return the length of the longest strictly increasing subsequence
function lengthOfLIS(nums: number[]): number {
  // dp[i]:The length of the longest subsequence ending at nums[i] among the ith elements.
  const dp: number[] = new Array(nums.length).fill(1);
  let res: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
