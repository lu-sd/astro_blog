// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
function threesum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  const len = nums.length;
  // Note that we only need to traverse up to the third-to-last number, as the left and right pointers will cover the last two numbers during traversal."
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1,
      r = len - 1;
    //If encountering a duplicate number, skip it
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (l < r) {
      let total = nums[i] + nums[l] + nums[r];
      if (total < 0) {
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      } else if (total > 0) {
        r--;
        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
  }
  return res;
}
console.log(threesum([-1, 0, 1, 2, -1, -4]));
// out put [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
//  the left and right pointers move towards the middle from both ends, and this special form of double pointer is called "collision pointer". When do you need to think of collision pointers? ---》 two keywords - "ordered" and "array"."
