// ternary operator

let age: number = 20;

let result: string = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult


// syntax condition ? valueIfTrue : valueIfFalse;


let isLoggedIn: boolean = true;

let message = isLoggedIn ? "Welcome Back!" : "Please Login";

console.log(message); // Welcome Back!



// nullishing coalescing operator

let username: string | null = null;

let result1 = username ?? "Guest";

console.log(result1); // Guest


let age1: number | undefined = undefined;

let userAge = age1 ?? 18;

console.log(userAge); // 18






// Optional Chaining

type User = {
    name: string;
    address?: {
        city: string;
    };
};

let user: User = {
    name: "Asif"
};

console.log(user.address?.city); // undefined


// Logical OR (||) vs Nullish Coalescing

let age2: number = 0;

let result3 = age2 || 18;
let result4 = age2 ?? 18;

console.log(result3); // 18
console.log(result4); // 0







