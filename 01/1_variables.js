const accountId = 181001
let accountEmail = "shreyansh@gmail.com"
var accountPassword = "123456"
accountCity = "Prayagraj"
let accountState;

/*
    Prefer not to use var, bcoz of block and functional scope
*/

// accountId = 2 // const values can't be updated
accountEmail = "ashu@gmail.com"
accountCity = "Delhi"
accountPassword = "123"

console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);