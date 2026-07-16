const name = "khuzema"
const repocount=50
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gamename=new String('khuzema-hc-wo')
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('e'));
const newstring=gamename.substring(0,4)
console.log(newstring);
const anotherstring=gamename.slice(-7,4)
console.log(newstring);
const newstringone="   khuzema    "
console.log(newstringone);
console.log(newstringone.trim());// spaces remove krta
const url="https:khuzema.com/khuzema%20choudary"
console.log(url.replace('%20','-'));
console.log(url.includes('khuzema'));// true otherwise false
console.log(gamename.split('-'));
