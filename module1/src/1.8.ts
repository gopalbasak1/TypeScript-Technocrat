{
    //Object destructuring

const user = {
    id: 345,
    name: {
        firstName: 'Gopal',
        middleName: 'Basak',
        lastName: 'Dip'
    },
    contactNo: '01754646463',
    address: 'Dhaka'
};

const {
    contactNo, 
    name:{middleName: midName },

} = user;



//Array destructuring
const myFriends = ['Chandler', 'Joey', 'Ross', 'Rachel', 'Monica', 'Phoebe']

const [, , bestFriend, ...rest] = myFriends;





















}