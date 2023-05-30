// input nums=[1,2,4,3,3,5],val = 3,keep nums[i]!== val;
// output nums.length
function removeElement(nums: number[], val: number) {
  let f = 0;
  let s = 0;
  while (f < nums.length) {
    if (nums[f] !== val) {
      nums[s] = nums[f];
      s++;
    }
    f++;
  }

  return s;
}
const remove = removeElement([1, 2, 4, 3, 3, 5], 3);
console.log(remove);

function removeDupliccates(nums: number[]) {
  let f = 0;
  let s = 0;
  while (f < nums.length) {
    if (nums[f] !== nums[s]) {
      nums[s] = nums[f];
      s++;
    }
    f++;
  }
  return s + 1;
}

const removeD = removeDupliccates([1, 2, 4, 3, 3, 5]);
console.log("d", removeD);
