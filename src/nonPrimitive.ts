//   non primitive datatype 

//  object 

let student: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Asif",
  age: 24,
  isStudent: true,
};



// array


let numbers: number[] = [10, 20, 30, 40];

let names: string[] = ["Asif", "Rahim", "Karim"];


// tuple

let employee : [string, number, boolean] = ["Asif",24,true];



// normal   function 

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // 30



// arrow function

const multiply = (a: number, b: number): number => {
  return a * b;
}

console.log(multiply(10, 20)); // 200


// callback function

const arr : number[] = [1, 2, 3, 4, 5];

const sqrArray = arr.map((element: number): number => {
    return element * element;
});

console.log(sqrArray); // [1, 4, 9, 16, 25]