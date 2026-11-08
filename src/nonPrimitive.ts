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



//  function 

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // 30



// 