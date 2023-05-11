// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const dic: { [key: string]: string } = {
  "[": "]",
  "{": "}",
  "(": ")",
};

function isvalid(s: string): boolean {
  if (s.length < 2) return false;

  const stack: string[] = [];
  const chars = s.split("");
  for (const char of chars) {
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(dic[char]);
  }
  return stack.length === 0;
}

const a = isvalid("[]{}");
console.log(a);
