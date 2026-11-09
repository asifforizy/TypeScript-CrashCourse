// generics mean dynamically genaraalize
type GenericArray<T> = Array<T>;



const friends: GenericArray<string> = ["sachin", "virat", "dhoni"];

const rollNumbers:GenericArray<number> = [1, 2, 3 ];

const isEligible: GenericArray<boolean> = [true, false, true]


//  touple
type Coordinates<X, Y> = [X, Y];

const coordinates: Coordinates<number, number>[] = [[1, 2], [3, 4], [5, 6]];    
console.log(coordinates);





//   generics in array of objects



const userList : GenericArray< {name: string , age: number , role: string}> = [
    {
        name: "Asif",
        age: 22,
        role: "ADMIN"
    }
]