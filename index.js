let shoppingList = ['Milk', 'bread', 'eggs'];
console.log(shoppingList[1]);
console.log(shoppingList.length);
shoppingList.push('butter');
console.log(shoppingList);
shoppingList.unshift('flowers','veggies');
console.log(shoppingList);


let employees = ['Lethabo','Siya','Solomon'];
employees.push('Siya3');
console.log(employees);
employees.pop();
console.log(employees);
if(employees.includes('Lona')){
    console.log('He is a student')
}
else{
    console.log('He is not a student')
}

let priceList = [19,20,12,16];


let cities = ['JBH','capetown','DBN','EC'];
console.log(cities.length);
if(cities.length == 4){
    cities.unshift('PTA');
    console.log(cities)
}else{
    cities.shift();
    console.log(cities)
}

//Array and objects
let cars = [
    {name:"Ford", models:"Fiesta",color: "blue"},
    {name:"BMW", models:"X3",color: "white"},
    {name:"Merc", models:'A200',color: "black"}
  ];

console.log(cars[0].name,cars[2].models);

// functions

function grocery(product,price,quantity){
    return "the quantity is " + quantity + "  and the price is " + price;
}
let item= grocery("Rice", "20" , "3");
console.log(item);


let product = {name: "laptop", make: "HP", price: 1200, quantity: 2};
function items(product){
    return;
// another way to do it:
//return product.name + '\n' + product.make
}

console.log(product.make,product.price);
 //console.log(items(product))

let products = [
    {name: "laptop", make: "HP", price: 1200, quantity: 2},
    {name: "Desktop", make: "HP", price: 2200, quantity: 1},
    {name: "laptop", make: "Dell", price: 1500, quantity: 3}

]

function hardware(products){
    return products[0].make + " " + products[2].price
}

console.log(hardware(products))

const customer ={
    name:'Lona',
    amount: 500,

     productss : [
         {keyboard : 150},
         {mouse: 90},
         {cable: 50 }
     ]
}

function cart(customer){
    return customer.amount- customer.productss[0].keyboard
}
console.log(cart(customer))