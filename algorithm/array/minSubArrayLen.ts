function minSubArrayLen(nums: number[], target: number) {
  let left = 0,
    right = 0;
  let sum = 0;
  let res = nums.length + 1;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      //move left pointer ,narrow the arraylength
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      res = Math.min(res, right - left + 1);
    }
    right++;
  }
  return res === nums.length + 1 ? 0 : res;
}

let s = 7,
  nums = [2, 3, 1, 2, 4, 3];

minSubArrayLen(nums, s);
