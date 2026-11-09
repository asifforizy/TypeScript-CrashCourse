type User={
    name: string;
    age: number;
}

type Role={
    role: "ADMIN"|"USER"
}


type UserWithRole = User & Role;

const user1 : UserWithRole = {
    name: "Asif",
    age: 22,
    role: "ADMIN"
}

console.log(user1);

const user2 : User = {
    name: "Ali",
    age: 25
}


interface Iuser{     //! interface only for object type datatype array object function 
    name: string;
    age: number;
}


const user3 : Iuser = {
    name: "Ahmed",
    age: 30
}


interface IRole{
    role: "ADMIN"|"USER"
}

interface IUserWithRole extends Iuser{
    role: "ADMIN"|"USER"
} //! interface can extend multiple interfaces



// function interface
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => {
    return num1 + num2;
}