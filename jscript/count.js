var colors=["red","green","blue","yellow"]
for(let color of colors){
    console.log(color);
}


// vowewls


var vowels=['a','e','i','o','u']

var text='hello'

var vowel_count=0
var cons_count=0

// for(let ch of text){
//     if(vowels.includes(ch)){
//         vowel_count+=1

//     }
//     else{
//         cons_count+=1
//     }
// }
//===========================================ternary method
for(let ch of text){
    vowels.includes(ch) ? vowel_count+=1 :cons_count+=1
}




console.log(vowel_count);
console.log(cons_count);