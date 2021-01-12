console.log("Welcome to the main module")
let favSandy = {
    name:"Philly Cheeseteak",
    price: 3.50,
    ingredients: ['bread', 'onions', 'peppers', 'beef', 'cheese']
}


let leastFavSandy = {
    name:'miracle whip',
    price:1.99,
    ingredients: ['bread', 'miraclewhip']
}

let otherSandy = {
    name: 'the king',
    price: 1.25,
    ingredients: ['bread', 'peanut butter', 'bannana'],
}

let menu = [favSandy,
         leastFavSandy,
         otherSandy,   
    ]

// for (i=0;i<menu.length;i++){
//     for(j=0;j<menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
    

// }

// for(let i = 0; i < menu.length; i++){
//     menu[i].name = addName(menu[i].name, 'Dude')
//     console.log(menu[i].name)
    
// }

// function addName(personName){
//     console.log(`This is ${personName}'s menu`);
//     for(let i = 0; i < menu.length; i++){
//         menu[i].name = `${personName}'s ${menu[i].name}`
//         console.log(menu[i].name)
//     }
// }

// addName('dude')
// addName('dudette')
// addName('coolMoeDee'

//**********************************************************//

function howMuch(menu){
    for(let i = 0; i < menu.length; i++){
        let name = menu[i].name;
        let price = menu[i].price
        console.log(`The ${name} is ${price}`);
}
}
//howMuch(menu)
//************************************************************

function addSandy(nameF, priceF, ingredientsF){
    let newObject = {
        name:`${nameF}`,
        priceF:`${priceF}`,
        ingredients:`${ingredientsF}`
    }
    menu.push(newObject)
    console.log(newObject)
    console.log(menu)
}
//addSandy('tunatuna', 12.00, ['bread', 'tuna'])
//*************************************************************** */
function salePrice(menuArray){

    menuArray.forEach(element => console.log(element.price -= (element.price *.25)));
}

//salePrice(menu)

//***************************************************************** */



// let dairyFree = [];
// function newDairyFree(array){
    
//     for (i=0; i<array.length; i++){
//         if (array[i].ingredients.includes('cheese') === false){
//             console.log(array[i].name)
//             dairyFree.push(array[i].name)
//         }
        
//     }
//     console.log(dairyFree)
// }
//  newDairyFree(menu)

 //888888888888888888888888888888888888888888888888888888888888888888

//  Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// function chicken5s(){
//     for (i=0;i<101; i++){
//         if (i % 5 == 0 && i % 7 == 0){
//             console.log('chickenmonkey')
//         }else if (i % 7 == 0){
//             console.log('monkey')
//         }else if (i % 5 == 0){
//             console.log('chicken')
//         }else{
//             console.log(i)
//         }
//     }
// }

// chicken5s()

//***************************************************************** */
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


// let currNum = 0;
// function bandnameber(name){
//     console.log(name, currNum)
//     currNum += 1;
// }

// bandnameber('chucking')
// bandnameber('hfdjaf')

//*******************************************************************
