// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
//Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permutations(nums: number[]) {
  const len = nums.length;
  const curr: number[] = [];
  //   const res: number[][] = [];
  const res: Array<number[]> = [];
  const visited: { [key: number]: number } = {};
  function dft(nth: number) {
    if (nth === len) {
      res.push(curr.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1;
        curr.push(nums[i]);
        dft(nth + 1);
        curr.pop();
        visited[nums[i]] = 0;
      }
    }
  }
  dft(0);
  return res;
}
// The function dft is then defined, which takes an argument nth representing the index of the next number to be included in the permutation. If nth is equal to len, the current permutation is complete and is added to res. Otherwise, the function iterates over each element in nums, and for each element that has not already been included in the current permutation (!visited[nums[i]]), it adds the element to curr, marks it as visited in visited, and recursively calls dft with nth + 1. Once the recursive call returns, it removes the element from curr and marks it as unvisited in visited.

// Finally, the dft function is called with an initial nth value of 0 to start constructing the permutations, and the resulting res array is returned.
