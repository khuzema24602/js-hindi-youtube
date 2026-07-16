// premitive
//7 types:string,number,boolean,null,undefined,symbol,bigint
const score=100
const scorevlue=100.3
const isloggedIn=false
const outsidetemp=null
let userEmail;
const Id= Symbol('123')
const anotherId= Symbol('123')

console.log(Id===anotherId);//false
const bignumber=13253356578867689n

// reference type(non premitive)
//array,objects,functions
const heros=["huzefa","khuzema","nakash"]
let myobj={
name:zoyan,
age:15
}
const myfunc=function(){
    console.log("hello world");
}
// stack(premitive),heap(non-premitive)
let myyoutubename = "khuzemagoraya"
let anothername=myyoutubename