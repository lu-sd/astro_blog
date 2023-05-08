// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
function isPalindrome(s: string, st: number, ed: number): boolean {
  while (st <= ed) {
    if (s[st] !== s[ed]) return false;
    st++;
    ed--;
  }
  return true;
}
function validPalindrome(str: string): boolean {
  const len = str.length;
  let i = 0,
    j = len - 1;
  while (i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return isPalindrome(str, i + 1, j) || isPalindrome(str, i, j - 1);
    }
  }
  return true;
}
console.log(validPalindrome("ad"));
