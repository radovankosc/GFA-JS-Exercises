import { Animal } from "./Animal";
import { Farm } from "./Farm";
let animal1 = new Animal();
animal1.eat();
animal1.drink();
animal1.play();
console.log(animal1);

let farmsAnimal: Farm = new Farm(5);

farmsAnimal._listOfAnimals.push(new Animal(20, 40));
farmsAnimal._listOfAnimals.push(new Animal(50, 60));
farmsAnimal._listOfAnimals.push(new Animal(30, 50));
farmsAnimal._listOfAnimals.push(new Animal(0, 0));
console.log(farmsAnimal);

farmsAnimal.breed();
console.log(farmsAnimal);

farmsAnimal.sell();
console.log(farmsAnimal);
