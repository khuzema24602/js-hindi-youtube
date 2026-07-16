function saymyname(){
    console.log("k");
    console.log("h");
    console.log("u");
    console.log("z");
    console.log("e");
    console.log("m");
    console.log("a");
}
//saymyname()
// function addtwonum(num1,num2){
// console.log(num1+num2);

// }
function addtwonum(num1,num2){
//let result=num1+num2
return num1+num2
}
const result=addtwonum(3,4)
//console.log("result:",result);
function userloginmsg(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
return `${username} just logged in`
}
//console.log(userloginmsg("khuzema"));
//console.log(userloginmsg());

function calculatepricecart(val1,val2,...num1){
return num1
}
//console.log(calculatepricecart(200,400,500,2000))
const user={
    username:"khuzema",
    price:"300"
}
function handleobject(anyobject){
//console.log (`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user);
// handleobject({
//     username:"huzefa",
//     price:"400"
// })
const myarray=[1,2,3,4,5]
function returnsecondval(getvalue){
return getvalue[3]
}
//console.log(returnsecondval(myarray));
console.log(returnsecondval([1,2,3,4,5]));
