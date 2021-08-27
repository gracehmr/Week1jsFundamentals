

// const person = {
//     name: "Grace",
//     age: 26,
//     faveSongs: [
//         "gone girl",
//         "90s kid",
//         "Over It",
//         "Now and Again"
//     ],

// sayHi(){
//     return `Hello my name is ${this.name}`

// }
// };

// console.log(person.sayHi());

// console.log(person.faveSongs[2])



// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         if(this.hasSpecialOffers){
//             return "Time for a special offer!";
//     }
// },
//     closeCafe(){
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());

// if(time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastoffer);
// } else if(time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }



// let alarm = "";
// let day = "Thursday";

// const alarmClock = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// }
    
// if(day == Saturday || day == Sunday){
//     alarm = alarmClock.weekendAlarm;
//     console.log(weekendAlarm);
// } else{
//     alarm = alarmClock.weekdayAlarm;
//     console.log(weekdayAlarm)

// }





// let food = "fish"
// let drink = "milk"

// const pet = {
//     name: "Tigger",
//     typeOfPet: "Cat",
//     age: 8,
//     colour: "Tortoiseshell",
//     food: [
//         "fish",
//         "chicken",
//         "beef",
//         "duck",
//     ],
//     drink: [
//         "water",
//         "milk",
//     ],

//     eat(){
//         return `${this.name} is eating ${pet.food[3]}`
//     },

//     fluid(){
//         return `${this.name} is drinking ${pet.drink[0]}`
// },
  

// }
// console.log(pet.eat())








const coffeeShop ={
    branch: "Liverpool",
    drinks: [
    "coke",
    "coffee",
    "green tea",
    "kombucha",
    ],
    food: [
    "toastie",
    "salad",
    "bagel",
    "wrap",
    ],
    drinkPrices: [
        "£1.90",
        "£2.50",
        "2.00",
        "2.70",
    ],
    foodPrices: [
        "£2.90",
        "£3.20",
        "£3.10",
        "£3.00",
    ],

      
    fullPrice(){
        return `${this.drinkPrices[3]} + ${this.foodPrices[2]}`
    },


    fullOrder(){
        return `Your full order consists of ${this.drinks[3]} and a ${this.food[2]} which costs ${this.fullPrice}`
    }

    
}

console.log(coffeeShop.fullOrder())