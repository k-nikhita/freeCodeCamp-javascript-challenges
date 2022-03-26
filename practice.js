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
    // Only change code below this line
    for (i = 0; i < contacts.length; i++) {
    //if name === "Akira"
    if (name === contacts[i].firstName) {
        // if prop exists...
        for (p = 0; p < contacts.length; p++) {
        console.log(contacts[p][prop])
        if (prop === contacts[p][prop]) {
        return contacts[p][prop]
        }
        else return "No such property"
        }
        
    }
    else return "No such contact"
    // Only change code above this line
  }
}
  
lookUpProfile("Akira", "likes");

lookUpProfile("Nikhita", "likes");

lookUpProfile("Akira", "apple");
  
  //PSEUDOCODE:
  //A loop that runs through each item (object) in the array and looks for 2 properties (name and prop) in each object
  //a loop to run through each object looking for values corresponding to certain keys
  // if name === "Akira" (value of firstName property) return value of prop
  // else return "no such contact"
  // else return "no such property"