// 912:Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, len));
  arr = mergeArr(left, right);
  return arr;
}

function mergeArr(arr1: number[], arr2: number[]): number[] {
  let i = 0,
    j = 0;
  const res: number[] = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  while (len1 > i && len2 > j) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  if (len1 > i) {
    return res.concat(arr1.slice(i));
  } else return res.concat(arr2.slice(j));
}
