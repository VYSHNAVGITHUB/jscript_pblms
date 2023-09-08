var products=[
    {code:1,name:"potatto",price:45,avl_qty:50,category:"veg"},
    {code:2,name:"onion",price:30,avl_qty:150,category:"veg"},
    {code:3,name:"brinjal",price:30,avl_qty:10,category:"veg"},
    {code:4,name:"carrot",price:75,avl_qty:0,category:"veg"},
    {code:5,name:"tomatto",price:34,avl_qty:20,category:"veg"},
    {code:6,name:"apple",price:190,avl_qty:50,category:"veg"},
    {code:7,name:"egg",price:5,avl_qty:250,category:"nonveg"},
    {code:8,name:"chicken",price:145,avl_qty:250,category:"nonveg"},
    {code:9,name:"garlic",price:240,avl_qty:0,category:"veg"},
    {code:10,name:"chilly",price:100,avl_qty:15,category:"veg"},


]
// total no: of items

console.log(products.length);


//total num of avl items

var avl_items=products.filter(p=>p.avl_qty>0).length
console.log(avl_items);

// out of stock prod names

var outofstock=products.filter(p=>p.avl_qty==0).map(p=>p.name)
console.log(outofstock);

// in stock names
var in_stock=products.filter(p=>p.avl_qty!=0).map(p=>p.name)
console.log(in_stock);


//is there any prod available under rs 40

var under=products.some(p=>p.price<=40)
console.log(under);

//costly prod name

var costly=products.reduce((p1,p2)=>p1.price > p2.price ? p1:p2).name
console.log(costly);

// low price
var low=products.reduce((p1,p2)=>p1.price < p2.price ? p1:p2).name
console.log(low);


// print apple prod price

var apple_data=products.find(p=>p.name=="apple").price
console.log(apple_data);

// forEach() 

products.forEach(p=>console.log(p.name))
products.forEach(p=>console.log(p.price))

// is there any veg product avl

var is_avl=products.some(p=>p.category=="veg")
console.log(is_avl);


