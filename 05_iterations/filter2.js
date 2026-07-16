//const mynumbers=[1,2,3,4,5,6,7,8,9,10]
//const newnums=mynumbers.map((num)=>num+10)
//const newnums=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
//console.log(newnums);
//*****************reduce******************
const mynums=[1,2,3,4]
// const totalnums=mynums.reduce(function(acc,currval){
//     return acc+currval
// },0)
const totalnums=mynums.reduce((acc,currval)=>acc+currval,0)
//console.log(totalnums);
const shoppingcart=[
    {
        itemname:"js course",
        price:299
    },
    {
        itemname:"cpp course",
        price:999
    },
{
        itemname:"py course",
        price:599
    },
    {
        itemname:"react course",
        price:1299
    },

]
const totalbill=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalbill);
