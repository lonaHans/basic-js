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



