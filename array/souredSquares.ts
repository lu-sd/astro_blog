function sortedSquares(nums: number[]) {
  const ans: number[] = [];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // the array is ordered,so right > left
    if (Math.abs(nums[left]) > nums[right]) {
      ans.unshift(nums[left] ** 2);
      left++;
    } else {
      ans.unshift(nums[right] ** 2);
      right--;
    }
  }
  return ans;
}
const a = sortedSquares([-4, -2, 0, 2, 3, 6]);
console.log(a);
