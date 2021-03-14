/*# Exercise
## Create a class Animal that has:
* name
* type - carnivore/herbivore/omnivore
* age
* size
* eat - a method that checks if the input is an Animal.
	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
* isEaten = default false*/

class Animal { // template/class
    constructor(name, type, age, size, isEaten = false) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
		this.isEaten = isEaten;
    }

    eat(obj) {
        if (obj instanceof Animal) {
			if (obj.type == "herbivore")
			{
				obj.isEaten = true;
				console.log(`The animal ${obj.name} is a herbivore and does not eat other animals.`);
				
                if(obj.size/this.size >= 2) 
				{
					console.log(`The animal ${this.name} tried to eat the ${obj.name} but it was too large.`);
				}
				else
				{
					console.log(`The animal ${this.name} ate the ${obj.name}`); 
				}
			}
			else if (obj.type == "carnivore")
			{
				console.log(`The animal ${obj.name} is a carnivore and likes eating other animals.`);
			}
		}
		else
		{
			console.log(`The animal ${this.name} is eating the  ${obj}`); 
		}
		//return `ID: ${this.id}. NAME: ${this.name}, BATCH: ${this.batchNo}, PRICE: ${this.price}$`;
    }
}


let giraffe = new Animal("Giraffe", "herbivore", 12, 15);
let rabbit = new Animal("Rabbit", "herbivore", 10, 3);
giraffe.eat(rabbit);

let lion = new Animal("Lion", "carnivore", 15, 9);
lion.eat(giraffe);