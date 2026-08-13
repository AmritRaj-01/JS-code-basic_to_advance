const user={
  username:"Amrit Raj",
  price:99,

  welcomeMessage:function(){
    console.log(`${this.username} , welcomw to website`);
    console.log(this);  // in output it return the full (user) object 
    
  }
}
// In normal function this is treated as a global object 

// user.welcomeMessage();   // output username="Amritraj"
// user.username="Ammy parker";
// user.welcomeMessage();   // output username="Ammy parker"

// console.log(this);   // output  {}



// function one(){
//   let username="Amrit "
//   console.log(this.username);  // output -> undefined (this will not use in function work only with object)
// }
// one();


                //  ARROW FUNCTION
const code=()=>{
  let fname ="Amrit"
  let lname="Raj"
  console.log(this);   // output  {}
  console.log(this.fname);   // output undefined 
  
}
// code();


                //BASIC ARROW FUNCTION with parameters 
// const addtwo=(num1,num2)=>{
//   return num1+num2;
// }
// console.log(addtwo(2,3));



      // ARROW FUNCTION WITH IMPLICIT RETURN 
//  in implicit arrow function we not use {} and do not need to write return   (both is implicit )
// in Explicit we have to add return 

// const addtwo=(num1,num2)=> num1+num2;
// const addtwo=(num1,num2)=> (num1+num2);
// console.log(addtwo(2,3));



// Immediately Invoked Function Expression(IIFE) ->
// means after function declaration  we have to run that fuction

// global scope ke wajah se pollution hota uss problem ko remove karne ke liye ham IIFE ka use karte hai 
//synatx-> pahle () phir function and in last again ()  

(function code1(){
    // This is Named IIFE beacause it has name code 1
  console.log(`Database connected `);
})();

((name)=>{
  // this is simple IIFE or unnamed IIFE
  console.log(`DB connected  ${name}`);
  
})('Amrit');

