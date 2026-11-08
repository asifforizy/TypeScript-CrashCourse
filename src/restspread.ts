const friends = ['Alice', 'Bob', 'Charlie'];

const schoolFriends = ['David', 'Eve', 'Frank'];

const collageFriends = ['Grace', 'Heidi', 'Ivan'];

friends.push(...schoolFriends, ...collageFriends);


console.log(friends); // Output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan']




// for object

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const newPerson = { ...person, country: 'USA' };

console.log(newPerson); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }


// rest operators
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`Sending invite to ${friend}`);
  });
}

sendInvite('Alice', 'Bob', 'Charlie', 'David', 'Eve');