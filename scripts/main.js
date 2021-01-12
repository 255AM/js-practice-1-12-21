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



let dairyFree = [];
function newDairyFree(array){
    
    for (i=0; i<array.length; i++){
        if (array[i].ingredients.includes('cheese') === false){
            console.log(array[i].name)
            dairyFree.push(array[i].name)
        }
        
    }
    console.log(dairyFree)
}
 newDairyFree(menu)