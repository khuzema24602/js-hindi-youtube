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
//console.log("a",myarr);
const myn1=myarr.slice(1,3)
//console.log(myn1);
//console.log("b",myarr);
const myn2= myarr.splice(1,3)
//console.log(myn2);
//console.log("c",myarr);
// ************ array function**************
const marvel_heros=["thor","spiderman","ironman"]
const dc_heros=["superman","batman","flash"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][1]);
marvel_heros.concat(dc_heros)
//console.log(marvel_heros);
// spread operator
const all_new_heros=[...marvel_heros,...dc_heros]
//console.log(all_new_heros);
const another_array=[1,2,3,[4,5,6],5,6[7,8]]
const real_another_array=another_array.flat(Infinity)
//console.log(real_another_array);
//console.log(Array.isArray("khuzema"));
//console.log(Array.from("khuzema"));
//console.log(Array.from({name:"khuzema"}));// interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


