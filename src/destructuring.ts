// object destructuring 

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name);


// nested object destructuring

const student = {
  name: 'Alice',
  age: 20,
    address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

const { name: studentName, age: studentAge, address: { street, city: studentCity, country } } = student;

console.log(studentName);
console.log(studentAge);
console.log(street);
console.log(studentCity);
console.log(country);


// array destructuring

const numbers = [10, 20, 30, 40];

const [first, second, third, fourth] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
