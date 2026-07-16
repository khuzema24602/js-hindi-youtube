const accountId = 144553
let accountEmail = "khuzema@gmail.com"
var accountPassword = "1234"
accountCity = "Muridke"
let accountState;

// accountId = 2 // not allowed in const 
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functionl scope
*/