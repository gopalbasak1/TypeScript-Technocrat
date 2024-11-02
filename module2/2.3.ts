{
//

//generic type

// //const rollNumbers : number[] = [3,6,8]; 
// //alternative
// const rollNumbers : Array<number> = [3,6,8];

// //const mentors : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z']
// //alternative
// const mentors : Array <string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

// //const boolArray : boolean[] = [true, false, true]
// //alternative
// const boolArray : Array <boolean> = [true, false, true]



// Reuseable or dynamic

// type GenericArray = Array<number>

// const rollNumbers : Array<number> = [3,6,8];

// const mentors : Array <string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

// const boolArray : Array <boolean> = [true, false, true]


//// amora dynamically hisaba param use kori
// type GenericArray<param> = Array<param>

// const rollNumbers : GenericArray<number> = [3,6,8];

// const mentors : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

// const boolArray : GenericArray<boolean> = [true, false, true]


// const add = (x: number, y:number)=> x+y;

// add(30,20)


// tamon amora dynamically hisaba param use na kora industry level a 'T use korbo
type GenericArray<T> = Array<T>

const rollNumbers : GenericArray<number> = [3,6,8];

const mentors : GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z']

const boolArray : GenericArray<boolean> = [true, false, true]

// const user : GenericArray<{name: string, age: number}> = [
//    {
//     name : 'Gopal',
//     age: 100
//    },
//    {
//     name : 'Jhankar Mahabub',
//     age: 110
//    }
// ]

interface User{
    name: string;
    age: number
}
const user : GenericArray<{name: string, age: number}> = [
   {
    name : 'Gopal',
    age: 100
   },
   {
    name : 'Jhankar Mahabub',
    age: 110
   }
]


const add = (x: number, y:number)=> x+y;

add(30,20)


//generic tuple

type GenericTuple <X, Y> = [X , Y]

const manush : GenericTuple<string, string> = ['Mr. X', 'Ms. Y']

const UserWithId : GenericTuple<number,{name:string, email: string}> = [1234, {name: 'Gopal', email: 'a@gmail.com'}]










//
}