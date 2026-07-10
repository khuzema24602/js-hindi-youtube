//singleton
//objects.create

//object literal
const mysym=Symbol("mykey1")
const Jsuser={
    name:"khuzema",
    "full name":"khuzema akhtar",
    [mysym]:"mykey1",
    age:20,
    location="Muridke",
    email="khuzema@gmail.com",
    isLoggedIn=false,
    lastloggindays=["Monday","saturday"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym])
Jsuser.email = "khuzema@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email = "khuzema@microsoft.com"
console.log(Jsuser);
Jsuser.greeting=function(){
    console.log("Hello Js user");
    
}
Jsuser.greetingtwo=function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
