// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures: number[]): number[] {
  const t = temperatures;
  //Create an array to hold the result with the same length as the input array and fill it with 0
  const answer = new Array(t.length).fill(0);
  const stack: number[] = [];
  if (t.length <= 1) return answer;
  // Traverse the input array from left to right
  for (let i = 0; i < t.length; i++) {
    // While the stack is not empty and the temperature at the top of the stack is less than the temperature at the current index
    while (stack.length > 0 && t[stack[stack.length - 1]] < t[i]) {
      // Pop the top index from the stack
      const top = stack.pop() as number;
      // Calculate the number of days until the next warmer day and store it in the answer array at the top index
      answer[top] = i - top;
    }
    // Push the current index onto the stack
    stack.push(i);
  }
  // Return the answer array
  return answer;
}
let b = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(b);
