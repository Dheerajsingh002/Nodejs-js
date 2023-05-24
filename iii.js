1-Write a program to read an entire text file.
const fs = require('fs');
const data = fs.readFileSync('path/to/file.txt', 'utf-8');
console.log(data);


2. Write a program to read first n lines of a file.
const fs = require('fs');
function readFirstNLines(filePath, n) 
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  const firstNLines = lines.slice(0, n).join('\n');
  return firstNLines;
}
const filePath = 'path/to/file.txt';
const n = 5;
const firstNLines = readFirstNLines(filePath, n);
console.log(firstNLines);


3. Write a program to append text to a file and display the
text.
const fs = require('fs');
function appendToFile(filePath, text) {
  
  fs.appendFileSync(filePath, text);
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log(data);
}
const filePath = 'path/to/file.txt';
const textToAppend = 'This is some new text to append to the file.';
appendToFile(filePath, textToAppend);

4.Write a program to read last n lines of a file.


const fs = require('fs');
function readLastNLines(filePath, n) {
   const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  const lastNLines = lines.slice(-n).join('\n');
  return lastNLines;
}
const filePath = 'path/to/file.txt';
const n = 5;
const lastNLines = readLastNLines(filePath, n);
console.log(lastNLines);



const fs = require('fs');

5. Write a program to read a file line by line and store itinto a list.
each line in an array
function readFileIntoArray(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  const filteredLines = lines.filter(line => line.trim() !== '');
  return filteredLines;
}
const filePath = 'path/to/file.txt';
const linesArray = readFileIntoArray(filePath);
console.log(linesArray);



6-Write a program to read a file line by line store it into a variable.
  const fs = require('fs');

function readFileIntoVariable(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');

  
  const lines = data.split('\n');

  const filteredLines = lines.filter(line => line.trim() !== '');
  const fileContents = filteredLines.join('\n');

   return fileContents;
}
const filePath = 'path/to/file.txt';
const fileContents = readFileIntoVariable(filePath);
console.log(fileContents);

7. Write a program to read a file line by line store it into an array.
const fs = require('fs');
function readFileIntoArray(filePath) {
 
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n');
  const filteredLines = lines.filter(line => line.trim() !== '');
  return filteredLines;
}
const filePath = 'path/to/file.txt';
const linesArray = readFileIntoArray(filePath);
console.log(linesArray);








function findLongestWords(str) {
    const words = str.split(' ');
    let longestWords = [];
    let maxLength = 0;
    words.forEach(word => {
      if (word.length > maxLength) {
        longestWords = [word];
        maxLength = word.length;
      }
  
      else if (word.length === maxLength) {
        longestWords.push(word);
      }
    });
    return longestWords;
  }
  const sentence = "The quick brown fox jumped over the lazy dog";
  const longestWords = findLongestWords(sentence);
  console.log("Longest words:", longestWords);


















  const fs = require('fs');

function countLines(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const lines = contents.split('\n');
  return lines.length;
}
const filename = 'example.txt';
const numLines = countLines(filename);
console.log("Number of lines:", numLines);










const fs = require('fs');

function countWordFrequency(filename) {
  const contents = fs.readFileSync(filename, 'utf8');
  const words = contents.split(/\s+/);
  const frequencies = {};
  words.forEach(word => {
    if (!frequencies[word]) {
      frequencies[word] = 1;
    }
    else {
      frequencies[word]++;
    }
  });

  return frequencies;
}

const filename = 'example.txt';
const wordFrequencies = countWordFrequency(filename);
console.log("Word frequencies:", wordFrequencies);


const fs = require('fs');

function getFileSize(filename) {
  const stats = fs.statSync(filename);
  return stats.size;
}
const filename = 'example.txt';
const fileSize = getFileSize(filename);
console.log("File size:", fileSize, "bytes");



const fs = require('fs');

function writeListToFile(list, filename) {
  const listString = list.join('\n');
  fs.writeFileSync(filename, listString);
}
const myList = ['apple', 'banana', 'cherry'];
const filename = 'example.txt';
writeListToFile(myList, filename);
console.log("List written to file:", filename);



const fs = require('fs');

function copyFile(source, destination) {
  const contents = fs.readFileSync(source);

  fs.writeFileSync(destination, contents);
}

const source = 'example.txt';
const destination = 'example-copy.txt';
copyFile(source, destination);
console.log("File copied to:", destination);



const fs = require('fs');

function combineFiles(file1, file2, output) {
  const contents1 = fs.readFileSync(file1, 'utf8').split('\n');
  const contents2 = fs.readFileSync(file2, 'utf8').split('\n');
  const combinedContents = [];
  const maxLength = Math.max(contents1.length, contents2.length);
  for (let i = 0; i < maxLength; i++) {
    const line1 = contents1[i] || '';
    const line2 = contents2[i] || '';
    combinedContents.push(`${line1} ${line2}`);
  }
  const combinedString = combinedContents.join('\n');
  fs.writeFileSync(output, combinedString);
}
const file1 = 'file1.txt';
const file2 = 'file2.txt';
const output = 'combined.txt';
combineFiles(file1, file2, output);
console.log("Files combined into:", output);




const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

async function getRandomLineFromFile(filePath) {
  const fileContent = await readFileAsync(filePath, 'utf8');
  const lines = fileContent.trim().split('\n');
  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
}
getRandomLineFromFile('myFile.txt')
  .then((randomLine) => console.log(randomLine))
  .catch((err) => console.error(err));






  const fs = require('fs');

function isFileClosed(filePath) {
  try {
    const fd = fs.openSync(filePath, 'a', 0o600);
    fs.closeSync(fd);
    return true;
  } catch (err) {
    return false;
  }
}
console.log(isFileClosed('myFile.txt')); 



const fs = require('fs');

function removeNewlinesFromFile(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  fileContent = fileContent.replace(/\n/g, '');
  fs.writeFileSync(filePath, fileContent);
}
removeNewlinesFromFile('myFile.txt');

\


const fs = require('fs');

function countWordsInFile(filePath) {
  // Read the file content into a string
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Split the content into an array of words
  const words = fileContent.split(/\s+/);
  
  // Return the number of words
  return words.length;
}

// Example usage: count words in 'myFile.txt'
console.log(countWordsInFile('myFile.txt')); // outputs the number of words in the file






const fs = require('fs');

function extractCharactersFromFiles(filePaths) {
  const characters = []; // create an empty array to hold the characters
  
  // Loop through each file path
  for (let filePath of filePaths) {
    // Read the file content into a string
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Split the string into an array of characters
    const fileCharacters = fileContent.split('');
    
    // Add the characters to the main array
    characters.push(...fileCharacters);
  }
  
  // Return the final array of characters
  return characters;
}

// Example usage: extract characters from 'myFile1.txt' and 'myFile2.txt'
const filePaths = ['myFile1.txt', 'myFile2.txt'];
const characters = extractCharactersFromFiles(filePaths);
console.log(characters); // outputs an array of all the characters from the files



const fs = require('fs');

// Loop through the alphabet (ASCII codes 65 to 90)
for (let i = 65; i <= 90; i++) {
  const fileName = String.fromCharCode(i) + '.txt'; // generate the file name (e.g. 'A.txt')
  fs.writeFileSync(fileName, ''); // create an empty file with the generated name
}

console.log('Done!'); // output confirmation message when all files have been created

const fs = require('fs');

function createAlphabetFile(fileName, lettersPerLine) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let fileContent = '';
  
  // Loop through each letter in the alphabet
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    
    // If the current line is full, add a newline character
    if (i % lettersPerLine === 0 && i !== 0) {
      fileContent += '\n';
    }
    
    // Add the current letter to the file content
    fileContent += letter;
  }
  
  // Write the file content to a new file with the specified name
  fs.writeFileSync(fileName, fileContent);
}

// Example usage: create a file called 'alphabet.txt' with 5 letters per line
createAlphabetFile('alphabet.txt', 5);
console.log('Done!'); // output confirmation message when the file has been created




