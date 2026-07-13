const accountId = 9123
let accountEmail ="amrit@gmail.com"
var accountPassword = " 12345"
accounntCity = "Ambala"
let accountState;

// const aren't change
// accountId = 2
/* prefer not to use var because of 
   issue in block scope and functional scope 
*/
accountEmail="am@gmail.com"
accountPassword="11111"
accounntCity="Sonpur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accounntCity,accountState])
