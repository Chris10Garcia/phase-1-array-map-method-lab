const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
  
//   const test = tutorials.map (element => {
//     const words = element.split(" ")
//     const updatedWords = words.map(letters => letters.replace(letters[0],letters[0].toUpperCase()))
//     const updatedSenteance = updatedWords.join(" ")
//     return updatedSenteance})

//   return test
// }

const titleCased = () => tutorials.map ( sentence => sentence.split(" ").map (words => words.replace (words[0], words[0].toUpperCase())).join(" ")  )
// // i can't believe i figured out i can do this all on one line.

console.log(titleCased())