{
//
//interface

// sokal primitive khatara type alise use korbo & object khatara type alise use korbo & chila interface use korta parbo
// type User1 = {
//     name: string;
//     age: number
// }

//type alise madhoma kono properties extend korta chi toba intersection use korbo
type User1 = {
    name: string;
    age: number
}

interface User2 {
    name: string;
    age: number
}

 type UserWithRole1 = User1 & {role : string};

 interface UserWithRole2 extends User2 {
    role: string
 }

 const user2 : UserWithRole2  ={
    name: 'Gopal',
    age: 29,
    role: 'manager',
 }

//  const user1 : UserWithRole1  ={
//     name: 'Gopal',
//     age: 29,
//     role: 'manager',
//  }

//interface khatara primitive type define korta parba na
type RollNumber = number




// interface User2 {
//     name: string;
//     age: number
// }

// const user1 : User1 = {
//     name: 'Gopal',
//     age: 28
// }

// const user1 : User2 = {
//     name: 'Gopal',
//     age: 28
// }



// array ka type alise chara array ka interface modhoma declare korta pari

//array khatara type alise use koro and function type alise use korla valo

//Abar object khatara interface or type alise(jodi type alise use kora hoy & madhoma and intersection extends korta parbo ar extends korta hola use extends use korta hoba) 

// js --> object, array -> object function -> object
type Roll1 = number[];

interface Roll2{
    [index : number] :number
}

const rollNumber1 : Roll2 = [1,2,3]
//const rollNumber1 : Roll1 = [1,2,3]


type Add1 = (num1: number, num2:number)=> number

interface Add2{
    (num1: number, num2: number) : number
}

//const add: Add1 = (num1, num2) => num1 + num2

const add: Add2 = (num1, num2) => num1 + num2



//
}