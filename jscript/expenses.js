var expenses=[12000,8000,24000,23000,45000,10000]
//total expense

var total=expenses.reduce((e1,e2)=>e1+e2)
console.log(total);

// highest exp

var highest=expenses.reduce((e1,e2)=> e1>e2 ? e1:e2)
console.log(highest);

//lowest exp

var lowest=expenses.reduce((e1,e2)=> e1<e2 ? e1:e2)
console.log(lowest);

// avg exp



// sort exp
var sort=expenses.sort((e1,e2)=>e1-e2)
console.log(sort);

// expenses >20000

var gt=expenses.filter((e1,e2)=>e1>20000 ? e1:e2)
console.log(gt);