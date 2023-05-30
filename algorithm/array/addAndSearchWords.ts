// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

class WordDictionary {
  words: { [key: number]: string[] };
  constructor() {
    this.words = {};
  }
  addword(word: string): void {
    if (this.words[word.length]) {
      // If an array of words with the same length exists, add the word to the array.
      this.words[word.length].push(word);
    } else {
      this.words[word.length] = [word];
    }
  }
  search(word: string) {
    const len = word.length;
    if (!this.words[len]) return false;
    if (!word.includes(".")) {
      return this.words[len].includes(word);
    }
    const reg = new RegExp(word);
    return this.words[len].some((item) => reg.test(item));
  }
}
const word = new WordDictionary();
word.addword("abc");
word.addword("efgg");
const c = word.search("ef.");
console.log(c);
