//function animalToHunt() {
    
    //this.hunt = function(target) {
    //var damage = getRandomNumber(this.minMass, this.maxMass);
    //target.recieveDamage(damage);
    //}

    //}


    function Fox() {
        this.name = Fox;
        this.minMass = 2;
        this.maxMass = 5;  
        this.isAlive = true;
        // a human class should have properties that relate only to him
        // and he is also a animal
     }
    
     Fox.prototype =  new Animal();
    
     function Boar() {
        this.name = Boar;
        this.minMass = 25;
        this.maxMass = 120;  
        this.isAlive = true;
        // a human class should have properties that relate only to him
        // and he is also a combatant
     }
    
     Boar.prototype = new Animal();
    
    
     function Goat() {
        this.name = Goat;
        this.minMass = 12;
        this.maxMass = 48;  
        this.isAlive = true;
        // a human class should have properties that relate only to him
        // and he is also a combatant
     }
    
     Goat.prototype = new Animal();
    
    
     function Wolf() {
        this.name = Wolf;
        this.minMass = 9;
        this.maxMass = 15;  
        this.isAlive = true;
        // a human class should have properties that relate only to him
        // and he is also a combatant
     }
    
     Wolf.prototype = new Animal();
    
     function Bear(name) {
        // a dragon should have properties that relate only to him
        // and he is also a combatant
        this.name = name;
        
         this.mass = 180;
         
        
     }
    
     Bear.prototype = new Animal();
    
    
     function animalToHunt() {
                     // a combatant is a being that can fight
                    // place combat related methods here
             this.attack = function(target) {
            var damage = getRandomNumber(this.minMass, this.maxMass);
            target.recieveDamage(damage);
         }
        
        }
        function Animal() {
       
        
        this.mass = getRandomNumber (this.minMass, this.maxMass);
        this.checkHealth = function(){
            if (this.health <= 0){
                this.isAlive = false;
                console.log (this.name + "is Dead");
            }
        }
        // everyone is a Animal
        }