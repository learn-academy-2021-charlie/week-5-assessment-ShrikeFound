// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.


describe("leetEncoder",()=>{
  const secretCodeWord1 = "Lackadaisical"
  const output1         = "L4ck4d41s1c4l"

  const secretCodeWord2 = "Gobbledygook"
  const output2         =  "G0bbl3dyg00k"

  const secretCodeWord3 = "Eccentric"
  const output3         =  "3cc3ntr1c"

  it("replaces a,e,i,o  with 4,3,1,0",() =>{
    expect(leetEncoder(secretCodeWord1)).toEqual(output1)
    expect(leetEncoder(secretCodeWord2)).toEqual(output2)
    expect(leetEncoder(secretCodeWord3)).toEqual(output3)
  })

})

// b) Create the function that makes the test pass.

//I actually ran into this problem the other day where we wanted to swap the (dna) symbols in an array with their corresponding symbols.
// ruby has a really cool method #tr that works on strings. No luck finding one like that for javascript. 
//so instead we're gonna iterate through the string characters and, if the character is special, replace it with a number.
  //split into an array so we can map, then join back up.
//took this out of the function when I refactored.
    //if the letter exists in the object, replace it, otherwise return the letter
    // if(typeof special_words[c.toLowerCase()] == "number"){
    //   return special_words[c.toLowerCase()]
    // }

//there should be a way to check if the character exists in the object. arrays can use the includes() method.
// we can check to see if a key is 'in' an object.

//creating an object with the chosen letters as keys.
//that way we can just look for the replacement using the right key.


const leetEncoder =(string) =>{
  
  const special_letters = {
    "a":4,
    "e":3,
    "i":1,
    "o":0
  } 

  return  string.split("").map((c) =>{
    return c.toLowerCase() in special_letters? special_letters[c.toLowerCase()] : c
  }).join("")

}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
describe("letterFilter",()=>{

  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
  const output1       = ["Apple", "Banana", "Orange"]
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
  const output2       = ["Mango", "Apricot", "Peach"]

  it("removes words that don't contain the chosen letter",()=>{
    expect(letterFilter(arrayOfWords1)).toEqual(output1)
    //the order doesn't matter here, so gonna look for a test that only cares whether the array contains what we want it to
    //arrayContaining() works, just a strange syntax
    expect(letterFilter(arrayOfWords1)).toEqual(expect.arrayContaining(output1))
    //-------------------------//
    //THESE ARE ALL BAD TESTS
    //-------------------------//

    // //this works...
    // expect(letterFilter(arrayOfWords1)).toContainEqual(...output1)
    // //same as this one...
    // expect(letterFilter(arrayOfWords1)).toContainEqual("Apple", "Banana", "Orange")
    // //this also works...
    // expect(letterFilter(arrayOfWords1)).toContainEqual("Apple", "Banana")
    // //this also works...
    // expect(letterFilter(arrayOfWords1)).toContainEqual("Banana","Apple")
    // //as does this...
    // expect(letterFilter(arrayOfWords1)).toContainEqual(...arrayOfWords1)
    // //and this...
    // expect(letterFilter(arrayOfWords1)).toContainEqual("Apple", "Banana", "Plum", "Orange", "Kiwi")
    // //and this...!??!
    // expect(letterFilter(arrayOfWords1)).toContainEqual("Apple", "Banoffee")



    //this works...
    // expect(letterFilter(arrayOfWords1)).toContain(...output1)
    // //same as this one...
    // expect(letterFilter(arrayOfWords1)).toContain("Apple", "Banana", "Orange")
    // //this also works...
    // expect(letterFilter(arrayOfWords1)).toContain("Apple", "Banana")
    // //this also works...
    // expect(letterFilter(arrayOfWords1)).toContain("Banana","Apple")
    // //as does this...
    // expect(letterFilter(arrayOfWords1)).toContain(...arrayOfWords1)
    // //and this...
    // expect(letterFilter(arrayOfWords1)).toContain("Apple", "Banana", "Plum", "Orange", "Kiwi")
    // //and this...!??!
    // expect(letterFilter(arrayOfWords1)).toContain("Apple", "Banoffee")
    //but not this. the test expects "Banoffee" but receives an array.
    // expect(letterFilter(arrayOfWords1)).toContain("Banoffee","Apple")

    //-------------------------//
    //END OF BAD TESTS (I HOPE)//
    //-------------------------//


    expect(letterFilter(arrayOfWords2)).toEqual(output2)
    expect(letterFilter(arrayOfWords2)).toEqual(expect.arrayContaining(output2))
    //explored toContainEqual, but it seems to pass when it shouldn't.

  })


})



// b) Create the function that makes the test pass.

//filters out an words that, if lowercase, don't include the chosen letter
  //chosen letter defaults to a
const letterFilter =(array,letter = "a") =>{
  return  array.filter((word) => word.toLowerCase().includes(letter))
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
describe("fullHouse",() =>{

  var hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  var hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  var hand3 = [5, 5, 5, 5, 4]
  // Expected output: false

  it("returns true only if we have a full house",() =>{
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

//first thought is check to see if we have 2 different things, and then if one of those things has 3.

const fullHouse = (array) =>{
  //sets don't have a length, they have a size.
  const uniqueCount = new Set(array).size
  //we're getting array with just the values that match the first one, then getting the length to get a count
  const firstLength = array.filter(num => num === array[0]).length

  //if there are 2 unique things, then
  //if the first unique thing has a count of 3 we're good.
  //if it has a count of 2 we know the second item has a count of 3.
  if (uniqueCount === 2 && (firstLength === 2 || firstLength === 3)){
    return true
  }
  return false
}