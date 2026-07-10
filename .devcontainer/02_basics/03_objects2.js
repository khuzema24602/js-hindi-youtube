//const tinderuser=new object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false
console.log(tinderuser);
const regularuser={
    email:"khuzema@gmail.com",
    fullname={
        userfullname={
            firstname:"khuzema",
            lastname:"Akhtar"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={31:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//const obj3=object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
console.log(obj3);
const user=[
    {
        id=1,
        email="k@gmail.com"
    },
    {
        id=1,
        email="k@gmail.com"
    },
    {
        id=1,
        email="k@gmail.com"
    }
]
user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));// very imp
console.log(Object.value(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));











