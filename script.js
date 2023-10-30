// 1. Write a JavaScript function that takes an array of elements and returns the most frequently occurring element in the array. If there are multiple elements with the same highest frequency, return any of them.


function mostFrequentElement(arr) {
  if (arr.length === 0) {
    return null; 
  }
  const elementCount = {};
  let maxCount = 0;
  let mostFrequentElement = arr[0]; 

  for (const element of arr) {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }

    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const array1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(mostFrequentElement(array1)); 
const array2 = ["apple", "banana", "cherry", "apple"];
console.log(mostFrequentElement(array2)); 




// 2. Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
// Test Case:
// console.log(capitalizeWords("this is a test sentence")); // Should return "This Is A Test Sentence"
// console.log(capitalizeWords("javascript is fun")); // Should return "Javascript Is Fun"



function capitalizeWords(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map(word => {
    if (word.length === 0) {
      return word; 
    }
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("gowtham here!")); 
console.log(capitalizeWords("skill safari training center"));



// 3. Write a JavaScript function that takes an array of numbers and returns a new array with only the
// odd numbers.
// Test case:
// const array = [1, 2, 3, 4, 5, 6];
// console.log(removeEvenNumbers(array)); // Should return [1, 3, 5]
// const array = [10, 21, 34, 45, 58, 67];
// console.log(removeEvenNumbers(array)); // Should return [21, 45, 67]



function removeEvenNumbers(arr) {
  const oddNumbers = arr.filter(number => number % 2 !== 0);
  return oddNumbers;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeEvenNumbers(arr1));

const arr2 = [10, 21, 34, 45, 58, 67, 75, 86, 99];
console.log(removeEvenNumbers(arr2));



// 4. Write a JavaScript function that takes a sentence as input and returns the longest word in the sentence.
// Test Case:console.log(findLongestWord(&quot;This is a test sentence with long words&quot;)); // Should return &quot;sentence&quot;
// console.log(findLongestWord(&quot;JavaScript programming can be fun&quot;)); // Should return
// &quot;programming&quot;


function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord("This is a test sentence with long words"));
console.log(findLongestWord("JavaScript programming can be fun"));




// 5.Write a JavaScript function that takes an array of numbers and returns the average (mean) of those numbers.
// Test Case:const array = [10, 20, 30, 40, 50];
// console.log(calculateAverage(array)); // Should return 30
// const array = [5, 15, 25, 35, 45];
// console.log(calculateAverage(array)); // Should return 25


function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  
  const average = sum / arr.length;
    return average;
}

const arry1 = [10, 20, 30, 40, 50, 60, 70];
console.log(calculateAverage(array1)); 

const arry2 = [5, 15, 25, 35, 45, 55, 65];
console.log(calculateAverage(array2)); 


