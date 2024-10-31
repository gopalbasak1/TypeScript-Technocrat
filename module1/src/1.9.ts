{
//

//Type Alias

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string
}

const student1: Student = {
    name: 'Gopal Basak',
    age: 29,
    gender: 'male',
    contactNo: '01713115211',
    address: 'kis'
}


const student2: Student = {
    name: 'Mir',
    age: 41,
    gender: 'male',
    address: 'dhk'
}


type UserName = string;
type IsAdmin = boolean;
// type UserName = string;
// type UserName = string;
// type UserName = string;

const userName : UserName = 'Persian';
const isAdmin : IsAdmin = true;


type Add = (num1: number, num2: number) => number

const add: Add =(num1, num2)=> num1 + num2;














//
}