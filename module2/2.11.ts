{
//
//utility types
//Pick

type Person = {
    name: string;
    age: number;
    email?:string;
    contactNo: string
}


type NameAge = Pick<Person, "name"|"age">

//Omit(Pick ar opposite holo Omit mana baad dawya)

type ContactInfo = Omit<Person, "name"|"age">

//Required (main var and optional var all ar show required)
type PersonRequired =  Required<Person>

//Partial
type PersonPartial = Partial<Person>

//Readonly means not change properties value
type PersonReadonly = Readonly<Person>
const person1 : Person ={
    name: "Mr. XY",
    age: 200,
    contactNo: "017"
}

person1.name="Mr. YZ"


//Record

//you can't add new properties it's fixed do you add so you can do manually 
type MyObj = {
    a: string,
    b: string
}

const obj1 : MyObj = {
    a: "aa",
    b: "bb"
    //no add more, if you add so you can do manually. 1st add type variable 
}


// Dynamically add property
type MyObj2 = Record<string, string>

const obj2 : MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd"
    //you add more and more
}


//very very important
// kono empty object ar khatra ae role
const EmptyObj : Record<string, unknown> = {}

//
}