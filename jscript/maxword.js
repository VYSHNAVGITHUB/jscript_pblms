var text ="hello good morning all"

// print highest length word

var high_len_word=text.split(" ").reduce((w1,w2)=>w1.length > w2.length ? w1:w2)
console.log(high_len_word);