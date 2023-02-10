function reverseWord(s) {
  let newWord = s.split(".");
  return newWord.reverse().join(".");
}
console.log(reverseWord("i.like.this.program.very.much"));
