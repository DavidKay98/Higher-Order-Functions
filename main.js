console.log(`ForEach Exercises`);
//ForEach Exercise 1:
const favFood = ["bagels", "pizza", "pasta", "peas"];
favFood.forEach((item) => {
console.log(`Question 1 ----> ` + item.toUpperCase());
});

//ForEach Exercise 2:
const numArray = [1, 2, 3, 4, 5, 6];
function sum(arr){
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });

  return sum;
}
console.log(`Question 2 ----> ` + sum(numArray));

//ForEach Exercise 3:
function product(arr){
  let product = 1;
  arr.forEach((item) => {
    product *= item;
  });
  return product;
}
console.log(`Question 3 ----> ` + product(numArray));

//ForEach Exercise 4:
const studentGrades = [70, 20, 53, 64, 78, 60, 32]
function passedGrades(arr){
let pass = 50;

arr.forEach((item) => {
  pass >= 50;
})
  return pass;
};
console.log(passedGrades(studentGrades));

//Map Exercise 1.1
console.log(`Map Exercises`);
const kilometers = [1, 9, 8, 4, 5];
let miles = [];
for (let i = 0; i < kilometers.length; i++){
  miles.push(kilometers[i] * 0.621371);
};
console.log(`Question 1.1 ----> ` + miles);

//Map Exercise 1.2
let mileConversion = kilometers.map(function(element, index, array) {
  return element * 0.621371;
});
console.log(`Question 1.2 ----> ` + mileConversion);

//Map Exercise 2
let inputArray = ["18", "27", 19, 21, "22", NaN, undefined];
console.log(`Question 2.1 How the initial array appears ----> `+ inputArray);
const arrOfNum = inputArray.map(str => {
  return Number(str);
})
console.log(`Question 2.2 How the array of numbers appears ----> ` + arrOfNum);

let outputArray = arrOfNum;
function numberFilter(output) {
  return output.filter(Boolean);
}
console.log(`Question 2.3 How the filtered by type array appears ----> ` + numberFilter(outputArray));

//Join Exercises
//Join Exercise 1:
console.log(`Join Exercises`);
const students = ["Dave", "Lucy", "Pedro", "Markus", "Claire"];
function joinStudents(joiner) {
  return joiner.join(" ");
}
console.log(`Question 1: Joining array names into a string ----> ` + joinStudents(students));

//Join Exercise 2:
//Using const students from Exercise 1...:
function toCSV(arr){
return arr.join(", ");
}
console.log(`Question 2: Joining array string with commas added in ----> ` + toCSV(students));

//String Exercises
//String Exercise 1:
console.log(`String Exercises`);

const greeting1 = "hello there";
const greeting2 = "go away.";
const greeting3 = "come back";
const greeting4 =  "leave here.";

function addFullStop(constant){
  if ((constant.slice(-1)) == "."){
    return constant; 
  }
  else{
    return constant + ".";
  }
}
console.log(addFullStop(`Question 1.1 ----> ` + greeting1));
console.log(addFullStop(`Question 1.2 ----> ` + greeting2));
console.log(addFullStop(`Question 1.3 ----> ` + greeting3));
console.log(addFullStop(`Question 1.4 ----> ` + greeting4));

//String Exercise 2:
const bill = "Bill";
const doreen = "Doreen";
const numberwang = 23;
const notANum = NaN;
const fred = "Fred";

function capitalise(constant){
  if(typeof constant == "string"){
    return constant.toUpperCase();
  }
  else if(typeof constant != "string"){
    return `This is not a string`
  }
}
console.log(`Question 2.1 ----> ` + capitalise(bill));
console.log(`Question 2.2 ----> ` + capitalise(doreen));
console.log(`Question 2.3 ----> ` + capitalise(numberwang));
console.log(`Question 2.4 ----> ` + capitalise(notANum));
console.log(`Question 2.5 ----> ` + capitalise(fred));

//Note to self - typeof requires you to equal the value to what the output of the type is in the console - 
//Here, type of == "string", NOT == String which made more sense to me but was the reason my code failed