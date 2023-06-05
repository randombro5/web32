





















































// "s".toUpperCase()
// const str = "sai"
// var char = str.charCodeAt(1)
// char+=3;
// console.log(String.fromCharCode(char))

// document.getElementById("id").innerHTML = "<b>ddend"
// document.getElementById("id").innerText = "ddend"

// // document.getElementById("id").addEventListener('click', () => {
// // console.log(String.fromCharCode(char))
// // })







// //. Jump Search for a given key and report success or failure. Prompt the user to enter the key and a list of numbers.
// function jumpSearch(arr, x) {
//   const n = arr.length;
//   const step = Math.floor(Math.sqrt(n));
//   let prev = 0;

//   while (arr[Math.min(step, n) - 1] < x) {
//     prev = step;
//     step += Math.floor(Math.sqrt(n));
//     if (prev >= n) {
//       return -1;
//     }
//   }

//   while (arr[prev] < x) {
//     prev++;
//     if (prev === Math.min(step, n)) {
//       return -1;
//     }
//   }

//   if (arr[prev] === x) {
//     return prev;
//   }

//   return -1;
// }

// const key = parseInt(prompt("Enter the key:"));
// const input = prompt("Enter the list of numbers separated by commas:")
//   .split(",")
//   .map((num) => parseInt(num));

// const index = jumpSearch(input, key);

// if (index !== -1) {
//   alert(`Success! Key ${key} found at index ${index}.`);
// } else {
//   alert(`Failure! Key ${key} not found.`);
// }

// //. Caesar Cipher technique. Display the encrypted text. Prompt the user for input and the shift pattern.
// let plainText = prompt("Enter text to encrypt:");
// let shift = parseInt(prompt("Enter shift pattern:"));
// let encryptedText = "";
// for (let i = 0; i < plainText.length; i++) {
//   let charCode = plainText.charCodeAt(i);
//   let encryptedCharCode = charCode;

//   if (charCode >= 65 && charCode <= 90) {
//     encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
//   } else if (charCode >= 97 && charCode <= 122) {
//     encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
//   }

//   encryptedText += String.fromCharCode(encryptedCharCode);
// }
// alert("Encrypted text: " + encryptedText);

// //. Write a JavaScript code to print all the Disarium numbers between 1 and 100.
// function isDisarium(n) {
//   let sum = 0;
//   const digits = n.toString().split("").map(Number);
//   for (let i = 0; i < digits.length; i++) {
//     sum += Math.pow(digits[i], i + 1);
//   }
//   return sum === n;
// }
// for (let i = 1; i <= 100; i++) {
//   if (isDisarium(i)) {
//     alert(i);
//   }
// }

// // 1a. Function numTest - Testing if a number is greater than 20 using a Promise

// function numTest(number) {
//   return new Promise((resolve, reject) => {
//     if (number > 20) {
//       resolve("Number is greater than 20");
//     } else {
//       reject("Number is not greater than 20");
//     }
//   });
// }

// const num = prompt("Enter a number:");
// numTest(Number(num))
//   .then((result) => {
//     document.getElementById("output1").textContent = result;
//   })
//   .catch((error) => {
//     document.getElementById("output1").textContent = error;
//   });

// // 3a. Write a program to store values into a set, and to retrieve value from the set, to iterate over the set   CO2, 4
// let mySet = new Set();
// mySet.add("apple");
// mySet.add("banana");
// mySet.add("cherry");
// alert(mySet.has("banana"));
// alert(mySet.has("orange"));
// alert(mySet.size);
// mySet.delete("banana");
// mySet.forEach(function (value) {
//   alert(value);
// });
// mySet.clear();

// //.4a Write a program to store values into a map, and to retrieve value from the map using key, to iterate over the map
// const myMap = new Map();
// myMap.set("key1", "value1");
// myMap.set("key2", "value2");
// myMap.set("key3", "value3");
// alert(myMap.get("key2"));
// for (const [key, value] of myMap) {
//   alert(`${key} = ${value}`);
// }

// // .5a Write a JavaScript code to insert and remove elements from the array for the given index
// let array = [1, 2, 3, 4, 5];

// function insertElement(array, index, element) {
//   array.splice(index, 0, element);
// }

// function removeElement(array, index) {
//   array.splice(index, 1);
// }

// console.log("Original Array:", array);

// insertElement(array, 2, 6);
// console.log("Array after inserting element:", array);

// removeElement(array, 4);
// console.log("Array after removing element:", array);

// //. 6a Write a JavaScript code that returns a passed string with letters in alphabetical order. Use addEventListener() method.
// // Get the input string and sort it alphabetically on button click
// document.getElementById("sortBtn").addEventListener("click", function () {
//   const inputString = document.getElementById("inputString").value;
//   const sortedString = inputString.split("").sort().join("");
//   document.getElementById("output").textContent =
//     "Sorted string: " + sortedString;
// });

 //1. Show how map is different from object to store key value pairs with coding example and prove Maps perform better than objects in most of the scenarios involving addition and removal of keys.                                 
//  let map = new Map();
//  let obj = {};
//  console.time("map add");
//  for (let i = 0; i < 100000; i++) {
//   map.set(i, i);
//  }
//  console.timeEnd("map add");
//  console.time("obj add");
//  for (let i = 0; i < 100000; i++) {
//   obj[i] = i;
//  }
//  console.timeEnd("obj add");
//  // Remove 100,000 keys
//  console.time("map delete");
//  for (let i = 0; i < 100000; i++) {
//   map.delete(i);
//  }
//  console.timeEnd("map delete");
//  console.time("obj delete");
//  for (let i = 0; i < 100000; i++) {
//   delete obj[i];
//  }
//  console.timeEnd("obj delete");



//  const mySet = new Set(Array.from({length: 100000}, (_, i) => i));
// // Creating an Array with 100,000 unique values
// const myArray = Array.from({length: 100000}, (_, i) => i);
// console.time("set-search");
// mySet.has(99999);
// console.timeEnd("set-search"); 
// console.time("array-search");
// myArray.includes(99999);
// console.timeEnd("array-search"); 




// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>enter usn</h1>
// 	<input type="text" id="usn" name="usn">
// 	<button onclick="validateUSN()">Validate USN</button>

//   <h2>date</h2>
//   <input type="text" id="text" name="text">
// 	<button onclick="searchDate()">Search Date</button>
//   <h3>email</h3>
//   <input type="text" id="email" name="email">
// 	<button onclick="validateEmail()">Validate Email</button>
// </body>
// <script>
//   function validateUSN() {
// 			const usn = document.getElementById("usn").value;
// 			var regex = /^[1]{1}[a-z]{2}[0-9]{2}[a-z]{2}[0-9]{3}$/i;
// 			var d = /^[1]{1}[a-z]{2}[0-9]{2}[a-z]{2}[0]{3}$/i;

// 			if (regex.test(usn) && !d.test(usn)) {
// 				alert("Valid USN");
// 			} else {
// 				alert("Invalid USN");
// 			}
// 		}
//     function searchDate() {
// 			const text = document.getElementById("text").value;
// 			const regex = /(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})/;
// 			const match = text.match(regex);
// 			if (match) {
// 				alert("Date found: " + match[0]);
// 			} else {
// 				alert("No date found");
// 			}
// 		}
//     function validateEmail() {
// 			const email = document.getElementById("email").value;
// 			const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
// 			const regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}.[a-zA-Z]{2,}$/;
// 			const regex3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}.[a-zA-Z]{2}$/;
// 			if (regex.test(email) && !regex1.test(email) || regex3.test(email)) {
// 				alert("Valid email address");
// 			} else {
// 				alert("Invalid email address");
// 			}
// 		}
// </script>
// </html>
