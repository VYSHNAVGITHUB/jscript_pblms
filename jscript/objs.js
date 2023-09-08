var temps={"tvm":34,"ktm":28,"apy":29,"ekm":34,"tsr":30,"pkd":35}



console.log(Object.entries(temps));


//highest temp

var max_temp=Object.entries(temps).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2)
console.log(max_temp);