// 647:Given a string s, return the number of palindromic substrings in it.
function countSubstrings(s: string): number {
  // fix the center and expand to all the sub string
  let result = 0;
  for (let center = 0; center < s.length; center += 0.5) {
    let left = Math.floor(center);
    let right = Math.ceil(center);
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) result += 1;
      else break;
      left -= 1;
      right += 1;
    }
  }
  return result;
}
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
