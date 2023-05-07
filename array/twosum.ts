// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
function twoSum(nums: number[], target: number) {
  // create a map as a method of key value storage for O(1) search / access
  // Array has an O(n) search-time, so we opt for the map
  const numberMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numberMap.has(diff)) {
      return [numberMap.get(diff), i];
    }
    numberMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([1, 2, 3, 6], 9));
