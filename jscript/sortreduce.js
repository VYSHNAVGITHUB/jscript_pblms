var nums=[2,3,4,6,7,8,10,11,200,2000]
var srt=nums.sort((o1,o2)=>o1-o2)
console.log(srt);






var sum=nums.reduce((n1,n2)=>n1+n2)
console.log(sum);

//max
var max=nums.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);
//min
var min=nums.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);
