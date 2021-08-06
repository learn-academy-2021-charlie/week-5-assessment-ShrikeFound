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

//I actually ran into this problem the other day where we wanted to swap the symbol in an array with their corresponding symbols.
// ruby has a really cool method #tr that works on strings. No luck finding one like that for javascript. so instead we're gonna iterate through the string characters and, if the character is special, replace it with a number.





const leetEncoder =(string) =>{
  //creating an object with the chosen letters as keys.
  //that way we can just look for the replacement using the right key.
  const special_words = {
    "a":4,
    "e":3,
    "i":1,
    "o":0
  } 
  //split into an array so we can map, then join back up.
  const result =  string.split("").map((c) =>{

    //if the letter exists in the object, replace it, otherwise return the letter
    if(typeof special_words[c.toLowerCase()] == "number"){
      return special_words[c.toLowerCase()]
    }

    return c

  }).join("")

  // return joined string
  return result
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
    expect(letterFilter(arrayOfWords2)).toEqual(output2)
    //the order doesn't matter here, so gonna look for a test that only cares whether the array contains what we want it to

  })


})



// b) Create the function that makes the test pass.

const letterFilter =(array,letter = "a") =>{
  //filters out an words that, if lowercase, don't include the chosen letter
  //chosen letter defaults to a
  const result =  array.filter((word) => word.toLowerCase().includes(letter))
  return result
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