{
//

//generic constraint with keyof operator
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = 'bike' | 'car' | 'ship'; //manually

type Owner2 = keyof Vehicle

//const person1 : Owner2 = "" // please do double coition do ctr + space button

// const user = {
//     name: "Mr. Gopal",
//     age: 28,
//     address: 'kis'
// }

// user['name']


const  getPropertyValue = <X, Y extends keyof X> (obj : X, key : Y) => {
    return obj[key]
}

const user = {
    name: "Mr. Gopal",
    age: 28,
    address: 'kis'
}

const car = {
    model: "Toyota 100",
    year: 2000
}

const result1 = getPropertyValue(user, 'name')
const result2 = getPropertyValue(car, 'model')









//
}