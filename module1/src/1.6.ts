{
//Learning function
//Normal Function
//Arrow Function

//Normal Function
function add (num1 : number, num2 :number = 10):number{
    return num1 + num2
}

add(2,2)

const addArrow = (num1:number, num2:number): number => num1 + num2

//object --> function --> method

const poorUser = {
    name: 'Gopal',
    balance: 0,
    addBalance(balance:number):string{
        return `My new balance is: ${this.balance + balance}`
    }
}

// console.log(poorUser.addBalance(100));

const arr: number[] =[1,4,10]

const newArray = arr.map((elem : number) : number => elem*elem)

}