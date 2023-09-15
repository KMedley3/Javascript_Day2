//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function call_all(n) {for(let i = 0; i < Object.keys(n).length; i++){
    if(Array.isArray(Object.values(n)[i])){
        console.log(Object.values(n)[i])
    }else {
        console.log(Object.values(n)[i])
    }
}}
call_all(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function people(name, age){
    this.name = name;
    this.age = age;

    // method printinfo //
    this.printInfo = (fav_team, fav_sport) => {
        console.log(`This is ${this.name} who is ${this.age} years old. ${name}'s favorite sport is ${fav_sport} and favorite team is the ${fav_team}.`)
        return "returned"
    }

    // age increment method
    this.age_up = (() => {
        let new_age = age;
        return () => {return new_age ++}
    })()
}

let Jessy = new people('Jessica', 25)
let Caleb = new people('Caleb', 28)

console.log(Jessy.printInfo('Lakers', 'basketball'))
console.log(Caleb.printInfo('Commanders', 'football'))
console.log(Caleb.age_up())
console.log(Caleb.age_up())
console.log(Caleb.age_up())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let string_length = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length > 10){
            resolve('true')
        } else {
            reject('false')
        }
    })
}

string_length('sandwich')

.then( (result) => {
    console.log('Big word')
})

.catch( (reject) => {
    console.log('Small number')
})

// CodeWars 1 //
// Write a function that which converts the input string to uppercase //

function makeUpperCase(str) {
    return str.toUpperCase();
    }

makeUpperCase('wassup')

// CodeWars 2 //

/*
The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):
3 --> "Earth"
*/
// I added break statements, without them you get the wrong output //
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return (name);
  }