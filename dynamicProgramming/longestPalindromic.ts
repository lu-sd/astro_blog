// 516:Given a string s, find the longest palindromic subsequence's length in s.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
function longestPalindromeSuesq(s: string): number {
  //  The DP array is defined as follows: For a substring s[i..j], where i represents the reverse traversal and j represents the forward traversal, the length of the longest palindromic subsequence is represented by dp[i][j].
  let n = s.length;
  let dp: number[][] = new Array(n).fill(0).map((val) => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][n - 1];
}
