//array
const myarr=[0,1,2,3,4,5]
const myheros=["salman khan","usman khan"]
const myarr2= new Array(1,2,3,4)
// console.log(myarr[1]);
// array methods
myarr.push(6)
myarr.pop(6)
myarr.unshift(6)
myarr.shift()
// console.log(myarr);
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

const newarr=myarr.join()
// console.log(myarr);
// console.log(newarr);

//slice,splice
console.log("a",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("b",myarr);
const myn2= myarr.splice(1,3)
console.log(myn2);
console.log("c",myarr);

