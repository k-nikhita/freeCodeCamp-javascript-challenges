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

  
