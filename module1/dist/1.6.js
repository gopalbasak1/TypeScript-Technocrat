"use strict";
//Learning function
//Normal Function
//Arrow Function
//Normal Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
//object --> function --> method
const poorUser = {
    name: 'Gopal',
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    }
};
console.log(poorUser.addBalance(100));
