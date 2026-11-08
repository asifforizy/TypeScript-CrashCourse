// union | 

type UserRole = "admin" | "user" | "guest";

const getDashboardAccess = (role: UserRole) => {
    if (role === "admin") {
        return "Full access to the dashboard";
    } else if (role === "user") {
        return "Limited access to the dashboard";
    }
    return "No access to the dashboard";
};

console.log(getDashboardAccess("admin"));
console.log(getDashboardAccess("user"));
console.log(getDashboardAccess("guest"));


// intersection &

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeePerson = Person & Employee;


const Rahim: EmployeePerson = {
    name: "Rahim",
    age: 30,
    employeeId: 12345,
    department: "IT",
};


console.log(Rahim);