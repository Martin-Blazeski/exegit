
/*
function sayHi() {
    var i = 0;
    while (i <20);{
        console.log ("ZDRAVOO");
        i++;
        if (i=== 10) {

        }
    } 
    console.log("Function end")
}




function HighNumb(){
    var biggest =0;
    var i =0;
while (i<10) {
   var i= Math.random();
   console.log ("current number is", i)
    if (i>biggest){
        biggest=i
    }
}
console.log ("Bigest number is", biggest)
}

// koren na sum od 101 do 150//
function sum (){
var rezultat =0;
for (var num = 101; num <=150; num ++) {
    var squares = Math.pow (num, 2);
    rezultat= rezultat+ squares;
}
console.log (rezultat);
}
sum();




20 x 20 x 20 ;











function sumOfNumbers (number)
var suma = 0;

while () {
    var cifra = number % 10;
    suma+=cifra;
    number = Math.floor(number / 10);

}
console.log("this sum is", suma);
}

sumOfNumbers (3453);

/////////////////////

function myFunction (){
    var i = 0;
    
    for (i= 0; i<=15; i++){
        if(i%2== 0){
            console.log ("Brojot e paren");
        }
    
     else {
        console.log("Brojot e neparen");
    }
}
     myFunction();


     function fizz (){
         
         for (var i= 0; i<=100; i++){
           if (i%5 === 0 && i%3 === 0){
                 console.log ("fizz")
             }else if (i % 5 ===0) {
                 console.log ("Buzz")
             }else if (i % 3 ===0){
             console.log("FizzBuzz");
         }
        }
    
     }
    
     fizz ();

    }
*/
/*
    function armstrong() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
    armstrong(371);
  }



function sumOfNumbers (number){
var suma = 0;

while (number) {
    var cifra = number % 10;
    suma+=Math.pow (cifra, 3);
    number = Math.floor(number / 10);

}
console.log("this sum is", suma);


}
sumOfNumbers




function multiples() {
    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
  
    if (i % 3 === 0 && i % 5 === 0) {
      sum=sum+= i;
        }
      }
      console.log (sum);
    }
    
    multiples();
    



function intRange(start, finish) {

    var sum = 0;
    for (var i = start; i<=finish; i++){
        sum =sum + i;
    }
    console.log(sum);
}
intRange(10, 11);







function noPrimes(num1, num2){
    var suma = 0;
    for( var  index= num1; index <num2;)







// Najdi Prime Number
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  isPrime(num);
  //////////////////////////////////////////

  



  var  testArray = ["Vrata", "Prozor", "Stol"];

for (var index = 0; index < testArray.length; index++) {
    var element = testArray[index];
    console.log(element);
    
}
}


function feedingBear();

this.animals= ["Fox", "Boar", "Goat", "Wolf"];
    this.hunt = function (){
  for (var  day= 0; day < 30; day++) {
    
     for (var i = 0; i < animals.length; i++) {
        var element = animals[i];
        if (element === "Fox") {
            this.bear.mass + Fox.mass
            console.log(element + "Started eating fish");
        }else if (element === "Lizzie") {
            console.log(element + "Started eating chicken");

    }else if (element === "Mary") {
            console.log(element + "Started eating leftovers");


            }
        
    }
       }
  }

    feedingBear();



/*
function saveLife(){

    var time = 60;

    for (var index = 0; index < time; index++ ){

        if (index % 15 ===0) {
        console.log("check pulse");
        } 
     else  {
        console.log("performing CPR");
        }if (index === time -1){
        console.log ("He is ALIVE");

        }
    }
}

saveLife();


function flirting(tries, boyHitPoint){

    for (var i=0; i<tries; i++){
        var result = i;
        if (i ===1 ) {
            result = i+1;
            console.log(result)
        }
        if (i==3){
            result=i +3;
            console.log(result);
        }
        if(i==5){
            result=i+10
            console.log(result);
        }
    }
        
    }
        
        
    }

*/




/*An orc warrior is fighting a human footman. 
The battle ends when one of them dies.
 The orc has 720 hitpoints, does 23-35 damage and has 5 armor.
  The human footman has 550 hitpoints, does 18-27 damage,
   but has a shield that gives him 9 armor. 
   Shields and armor deduct the damage that the fighter takes.
    Who will win the fight? */
/*
function war () {
    var Orc = new Warrior("Orc", 720, 5, 23, 35);
    var Human = new Warrior("Human", 550, 9, 18, 27);
  
    while (Orc.hitPoints > 0 && Human.hitPoints > 0) {
        Orc.hitPoints = Orc.hitPoints - Human.damage() + Orc.armor;
        Human.hitPoints = Human.hitPoints - Orc.damage() + Human.armor;
    }
if (Orc.hitPoints <= 0) {
    console.log (Warrior.name + "IS DEAD")
}else if (Human.hitPoints <= 0){
    console.log (Warrior.name + "IS DEAD")
}

}


function Warrior (name, hitPoints, armor, min, max ){
this.name = name;
this.hitPoints = hitPoints;
this.armor = armor;
this.minDamage = min;
this.maxDamage = max;
this.attack = function (target) {
   
    var damage = Math.floor(Math.random() * (this.maxDamage - this.minDamage)) + this.minDamage;
  }   
  this.recieveDamage = function(dmg){
      this.health = this.health + this.armor - dmg;
  }
}

war ();




Create a hotel that will work for 14 days. The hotel has rooms that can be taken/vacant, 
clean/dirty and have a minibar with items to buy that needs to be restocked. 
There are employees working in the hotel, that get added through a recruitment drive every 3 days. 
There is a restaurant in the hotel that serves clients. Each day, clients come to the hotel and stay a few days, 
paying money for the rooms, the minibar and the restaurant. Choose the price of each by yourself. 
Every day vacant rooms get cleaned and restocked.

Calculate the total profit of the hotel after the 14 day work period as well as the number of employees it
 currently has and the number of guests the hotel served during that period.



hotel  14 dena raboti

sobite da znaeme ,imat ili nemat gosti
dali se cisti ili prljavi
mini bar da se polni /prazni 
vraboteni se rotiraat na 3 dena
*/

/*

function hotelCalc ()


var Hotel = new Hotel (price, guests);

hotel.workdays = 30;
hotel.rooms = 
        function ocupied  () {
            20 - guests;
        } 
hotel.minibar = (6 * 20) - guests (math.random );
hotel.workers = (workdays / 3) * 5;
hotel.guests = guests;
hotel.revenue = (price * rooms+ minibar) - (workers);


*/



/*

function Hotel (name){
    this.name = name;
    this.rooms = [];

    this.work = function () {

    }
this.admit = function (customer){
    for (var index = 0; index < this.rooms.length)
}
}
    this.generateRooms = function (){
        for (var index = 1; index < 100; index++){
            var room = new 
        }
    }

}





function Room (number){
    this.roomNumber ="Room Number" + number;
    this.isTaken = false;
    this.isDirty = false;
    this.customer = null;
    this.minibar = 200;
    this.cost = 60;

    this.fillVacation = function (customer);{
        this.isTaken = true;
        this.customer = customer;
    }
    this.leaveRoom = function (){
        this.isDirty = true;
        this.isTaken = false;
        this.bill  += (this.spentDays * this.price);
    }
}

    this.spendDay = function (){
        if (this.customer){
            this.spendDays++;
            this.minibar -=20;
            this.customer.calculateDays();
            this.bill += 20;
            this.leaveRoom ();
        }
    }
    this.getCleaned = function(){
        this.isDirty = false;
        this.minibar = 200;
        return this.bill
    }
}
}




var hotel = new Hotel ("Hilton");

for ( var i = 0; i < 30; i++);{
    var newCustomers = 3;
    for (var index = index < newCustomers; index ++)
        var

function Human (index){
    this.name = "Person -" + name;
    this.vacationDays = 5;
    this.money = 2000;

    this.pay = function (money){

    }
*/

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






function Bear (){
    this.mass = mass;
    this.nutrition = nutrition;

}


function Forest (){
    this.winter = 30;
    this.animals = function (){
        this.boar = 
    }

}



function huntAnimal (){


}
*/


function feedingBear(){

 var animals = this.animals;
    this.hunt = function (){
  for (var  day= 0; day < 30; day++) {
    
     for (var i = 0; i < animals.length; i++) {
        var element = animals[i];
        if (element === "Fox") {
            this.bear.mass + Fox.mass;
            console.log(this.bear + "Eating Fox");
        }else if  (element === "Boar") {
            this.bear.mass + boar.mass;
            console.log(this.bear + "Started eating Boar");

      }else if  (element === "Goat") {
        this.bear.mass + Goat.mass;
        console.log(this.bear + "Eating Goat");
      }else if  (element === "Wolf") {
            this.bear.mass +( Wolf.mass /2 ) - (this.bear.mass / 1.10);
            console.log(this.bear + "Eating Wolf");


            }
        
    }
       }
  }
  feedingBear();
}
    