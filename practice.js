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

  //3. Use Recursion to Create a Range of Numbers

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
  