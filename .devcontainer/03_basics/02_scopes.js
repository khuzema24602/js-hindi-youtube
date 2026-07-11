let a=100
if(true){
    let a=10
    const b=20
    //console.log("INNER:",a);  
}
//console.log(a);
function one(){
    const username="khuzema"
    function two(){
        const website="youtube.com"
        console.log(username);
        
    }
    //two()
}
//one()
if(true){
const username="khuzema"
if(true){
    const website=" youtube"
    console.log(username+website);
    
}
//console.log(website);

}
//console.log(username);
function addone(num){
    return num+1
}
console.log(addone(5));
addtwo()// give error
 const addtwo=function(num){
    return num+1
 }