myobj={
    js:"javascript",
    cpp:"c++",
    swift:"swift by each"
}
for (const key in myobj) {
   // console.log(`${key} is shortcut of ${myobj[key]}`);
}
myarr=["js","br","cpp","swift"]
for (const key in myarr) {
//console.log(myarr[key]);
}
const coding=["js","cpp","br","swift"]
// coding.forEach(function(item){
// console.log(item);
// })
// coding.forEach((item)=>{
// console.log(item);
// })
// function printme(val){
//     console.log(val);
    
// }
// coding.forEach(printme)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const mycoding=[
    {
languagename:"javascript",
languagefilename:"java"
},
{
languagename:"swift",
languagefilename:"sw"
},
{
languagename:"c++",
languagefilename:"cpp"
}
]
// mycoding.forEach((item)=>{
//     console.log(item.languagename);
// })
// ***********filter and reduce****************
const mynums=[1,2,3,4,5]
//const numbs=mynums.filter((num)=>num>2)// agr scope use krte to return keyword likhna para ga ni to simple aik line me likh da
//console.log(numbs);
const newnums=[]
mynums.forEach((num)=>{
    if (num>4) {
        newnums.push(num)
    }
})
//console.log(newnums);
const books = [
  {
    title: "book one",
    genre: "history",
    publish: 1900,
    edition: 2005
  },
  {
    title: "book two",
    genre: "science",
    publish: 1945,
    edition: 2009
  },
  {
    title: "book three",
    genre: "fiction",
    publish: 1999,
    edition: 2009
  },
  {
    title: "book four",
    genre: "history",
    publish: 1921,
    edition: 2004
  },
  {
    title: "book five",
    genre: "non-fiction",
    publish: 1943,
    edition: 2002
  },
  {
    title: "book six",
    genre: "history",
    publish: 1944,
    edition: 2035
  },
  {
    title: "book seven",
    genre: "science",
    publish: 1966,
    edition: 2001
  },
  {
    title: "book eight",
    genre: "math",
    publish: 1987,
    edition: 2012
  },
  {
    title: "book nine",
    genre: "history",
    publish: 1989,
    edition: 2025
  },
  {
    title: "book ten",
    genre: "fiction",
    publish: 2000,
    edition: 2007
  }
];

//const userbooks=books.filter((bk)=>bk.genre==="history")
//const userbooks=books.filter((bk)=>bk.publish>=2000 && genre==="fiction")
//console.log(userbooks);

