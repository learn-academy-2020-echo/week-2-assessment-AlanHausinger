// // ASSESSMENT 2: Coding Practical Questions
//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// // Use the test variables provided.
//
//

var num1 = 15
var num2 = 0
var num3 = -7
//
// // put a const so I can console log it later
const divisibleOrnot = (num) => {
// // Create an equation so whenever I have a no remainder it'll spit out is divisible by 3
    if(num % 3 == 0){
        return `${num} Divisible by 3`
    }else{
        return `${num} Not divisible by 3`
    }
}
// // these syntaxes are gonna be the end of me
console.log(divisibleOrnot(num1));
console.log(divisibleOrnot(num2));
console.log(divisibleOrnot(num3));
//
//
// // Expected output: "-7 is not divisble by three"
// // Expected output: "15 is divisible by three"
// // Expected output: "0 is divisible by three"
//
//
//
// // --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.
//
var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
//
// // I'm declaring a function that takes in this array ^ and returns the first letter capitalized.
  const capitalizer = (array) => {
// // So I have to declare a function that takes in the array
    let eachItem = array.map(value => {
// // Then access the first index and capalize the letter
    return value[0].toUpperCase() + value.substring(1)
  })
// // return the local variable with a .join so itll go back into a string
  return eachItem.join(" ")
}
console.log(capitalizer(randomNouns));
//
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
//
// // --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
//
var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
//
const onlyNums = (array)=>{
  let filteredArray = array.filter(value=> {
    return (typeof value === "number")
  })
      return filteredArray.sort(function(a, b){return a-b})
}
console.log(onlyNums(mixedDataArray));
//
//
//
//
// // Expected output: [-8, 0, 8, 46, 59, 90, 107]



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// At first we would want to create a funtion thatll take in voweltester1 and 2 and split them.
// use a fitler to get rid of the vouls a,e,i,o,u,y and then do a .join at the end

//
//   const str = ("";
//   var res = str.split(`a` && `e` && `i` && `o` && `u`);
// )

// I'm not 100% sure if the sytaxes are right but I wanna say I'm close so then after that I would .join it afterwords

// console.log(str(res));


var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3


//
//
//
//
// // --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
//
const calculator = (num1, symbol, num2) => {
  if (symbol === "*")
return (num1 * num2)
  else (symbol === "+")
return (num1 + num2)
  if (symbol === "/")
return `${"0" } can't divide by 0`
}
// // honestly im pretty stuck on this last line because i feel everything is correct but its not
// // coming back in the quotes its only returning 89.
// console.log(calculator);
//
//
// // Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// // Expected output: 27
//
console.log(calculator(16, "+", 3))
// // Expected output: 19
//
console.log(calculator(89, "/", 0))
// // Expected output: "Can't divide by 0!"
