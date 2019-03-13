/*
You are a bear in the forest. You have to survive the winter for 30 days. 
You will die if your total mass reaches 110 amount of kilograms. 
You will be unable to move for 1 day if your total mass exceeds 250 kg, during which you lose 20% of your total mass. 
Each day you have a 30% chance to catch an animal from the forest and eat it. 
The forest is populated by a fixed number of animals, each with different nutrition value in kg. 
Some of those fixed animals are wolves. If the caught animal is a wolf, you lose 10% of your mass killing it,
 but you gain half of its nutrition value (kg/2). After the 20th day, each day there will be a 5% chance for a hunter to come and start hunting you. 
 You lose 30% of your mass when you run away from him, but if you’re overweight, he kills you.
Will you survive the winter? How many kilograms will be your total mass?

*/



function Forest(name) {
    this.animals = [];
    this.bear = new Bear("Medo");

    this.winter = function (){
        var winter = 30;
        for ( i = 0; i < 30; i ++){
            if (winter === 30);
            console.log ("winter is finished")
        }
        
    }
        
    this.generateAnimals = function() {
    for (var index = 0; index < 0; index++) {
        var type = getRandomNumber(1, 4);
        switch (type) {
            case 1:
                this.animals.push(new Fox("Fox-" + index));
                break;
            case 2:
                this.animals.push(new Boar("Boar-" + index));
                break;
                case 3:
                this.animals.push(new Goat("Goat-" + index));
                break;
            default:
                this.animals.push(new Wolf("Wolf-" + index));
                break;
         }
        }
    }
    this.generateAnimals();

    


    this.processTurn = function() {
    var victimIndex = getRandomNumber(0, 99);
    var victim = this.animals[victimIndex];
    if (victim.isAlive) {
        this.bear.hunt(victim);
    } else {
        return this.processTurn();
    }
    
    for (var index = 0; index < this.animal.length; index++) {
        var victim = this.animals[index];
        if (this.bear.mass < 250 ) {
            this.bear.hunt(this.animals[index]);

        }      
        }
    }
    



    this.liveAnimals = function() {
        var aliveAnimals = 0;
        for (var index = 0; index < this.animals.length; index++) {
        var victim = this.animals[index];
        if (victim.isAlive) {
            aliveAnimals++;
        }
    }
    if (aliveAnimals > 0 && this.bear.mass <= 250) {
        this.processTurn();
    } 
    
    }

}


    //function animalToHunt() {
    
    //this.hunt = function(target) {
    //var damage = getRandomNumber(this.minMass, this.maxMass);
    //target.recieveDamage(damage);
    //}

    //}


