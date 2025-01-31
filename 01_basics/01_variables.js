
// Notes

/*
V8 Engine for javscript is hidden in chrome browser

Q.What is the difference in saving the file as .js or .txt?
A.The syntax for v8 Engine is defined in such a way that when v8 engine encounters .js file:
 v8 engine will identify the keywords and do respective action.
   For Ex:
   console.log     : log the output on to console
   let, var, const : assign them in the memory etc,.
   
*/

/*
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

//For variables Interview Qs:
//ref:https://www.hellojavascript.info/docs/general-javascript-questions/javascript-fundamentals/variables
//ref:https://chatgpt.com/c/679c5a75-f164-8007-adb0-f151f77f9ebd


const accountId=3214214 //memory assigned with name of reference variable and value can't be re-assigned.
// accountId=2  // re-assigning not allowed for const variable.


let accountEmail="ag@gmail.com"
var accountPassword="12345"
let address;

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword);
console.log(address)

console.table({accountId,accountEmail,accountPassword,address})






