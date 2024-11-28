{
//

//oop-class

//class mudha kono function likha hoy saeta ka bola hoy method

// class Animal {
//     name : string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound(){
//         console.log(`The ${this.name} says ${this.sound}`);
//     }

// }

// //Arrow function aa this kaj kora na

// const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");

// const cat = new Animal("Persian Bhai", "cat", "meaw meaw");

// dog.makeSound();
// cat.makeSound();



// public use
class Animal {
    constructor(public name: string, public species: string, public  sound: string){
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

//Arrow function aa this kaj kora na

const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");

const cat = new Animal("Persian Bhai", "cat", "meaw meaw");

dog.makeSound();
cat.makeSound();


















//
}