// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures: number[]): number[] {
  const t = temperatures;
  const answer = new Array(t.length).fill(0);
  const stack: number[] = [];
  if (t.length <= 1) return answer;
  for (let i = 0; i < t.length; i++) {
    while (t[stack[stack.length - 1]] < t[i]) {
      const top = stack.pop() as number;
      answer[top] = i - top;
    }
    stack.push(i);
  }
  return answer;
}
let b = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(b);
