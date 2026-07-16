//falsy values
//false,0,-0,bignit 0n,"",null,undefined,NaN
//truthy values
//"0",'false'," ",[],{},function(){}
// const useremail=[]
// if(useremail.length===0){
//     console.log("array is empty");
// }
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}
//Nullish Coalescing Operator (??): null undefined
//let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 10
//val1 = null ?? 5 ?? 10
//console.log(val1)
// terniary operator
//condition ? true:false
const iceteaprice=100
iceteaprice<=80 ? console.log("less than 80"):console.log("more than 80");

