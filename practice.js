//1. Basic JavaScript > Profile Lookup
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    const names = contacts.map(contact =>    contact.firstName)
    
    if (names.includes(name)) {
        const indexFinder = (contactName => contactName === name)
        
        const nameIndex = names.findIndex(indexFinder)
        
        if (!(Object.hasOwn(contacts[nameIndex], prop))) {
            return "No such property"
        }
        return (contacts[nameIndex][prop])
    }
    if (!names.includes(name)) {
        return "No such contact"
    }
}
  
console.log(lookUpProfile("Kristian", "lastName"))

// lookUpProfile("Sherlock", "likes")
// lookUpProfile("Harry", "likes")
// lookUpProfile("Bob", "number")
// lookUpProfile("Bob", "potato")
// lookUpProfile("Akira", "address")

//---------------------------------------------------------------
  //2. Basic JavaScript > Use Recursion to Create a Countdown
  
  function countdown(n){
      //base case
      if (n < 1) {
          return []
      }
      else {
          const numbers = countdown(n - 1)
          numbers.unshift(n)
          return numbers
      }
  }

  console.log(countdown(7))
// [5, 4, 3, 2, 1]
// unshift does the opposite of push, i.e. adds one or more elements to the front of an array and returns the new length of the array

//--------------------------------------------------------------------

  //3. Basic JavaScript > Use Recursion to Create a Range of Numbers

  function rangeOfNumbers(startNum, endNum) {
       //Base case
      if (startNum - endNum === 0) {
        return [startNum]
      }
      //Recursive call to itself
      else { 
        const array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum)
        return array
      }
  }

  //ALTERNATIVE WAY OF WRITING THE ABOVE:
//   function rangeOfNumbers(startNum, endNum) {
//       return startNum === endNum
//       ? [startNum]
//       : rangeOfNumbers(startNum, endNum - 1).concat(endNum)
//     }

  console.log(rangeOfNumbers(1, 10))


  //With a recursion function, you are creating a stack of functions.
  //for example, rangeOfNumbers(1,5) would create the following stack of functions:
  // rangeOfNumers(1,4) ---> output is [5]
  // rangeOfNumers(1,3) ---> output is [4]
  // rangeOfNumers(1,2) ---> output is [3]
  // rangeOfNumers(1,1) ---> output is [2]
  // and because we have arrived at the base case (startNum - endNum ===0), then the final output = [startNum], ie. [1]

  //The numbers are pushed to the array in the order of lines 88, 87, 86, 85, 84 because you start at the bottom of the pile of functions, i.e. the base case.
  
  //4. Regular Expressions > Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username)

console.log(result)
// console.log(`1. ${userCheck.test('JACK')}`)
// console.log(`2. ${userCheck.test('J')}`)
// console.log(`3. ${userCheck.test('Jo')}`)
// console.log(`4. ${userCheck.test('Oceans11')}`)
// console.log(`5. ${userCheck.test('RegexGuru')}`)
// console.log(`6. ${userCheck.test('007')}`)
// console.log(`7. ${userCheck.test('9')}`)
// console.log(`8. ${userCheck.test('A1')}`)
// console.log(`9. ${userCheck.test('BadUs3rnam3')}`)
// console.log(`10. ${userCheck.test('Z97')}`)
// console.log(`11. ${userCheck.test('c57bT3')}`)
// console.log(`12. ${userCheck.test('AB1')}`)
// console.log(`13. ${userCheck.test('J%4')}`)

//5. Debugging > Use Caution When Reinitializing Variables Inside a Loop

//PSEUDOCODE
// m is the number of rows; n is columns

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = []; //DON'T UNDERSTAND WHY?!
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
