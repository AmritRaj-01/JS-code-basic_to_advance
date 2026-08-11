function myName(){
  console.log("Amrit Raj");
}

// myName->reference or myName()->execution
// myName()


// function sum(num1,num2){   // num1 ,num2 is parameters
//   console.log(num1+num2);
// }

function sum(num1,num2){   
  // let result=num1+num2
  // return result

  return num1+num2
  
}
// const result=sum(34,33)    // num1,num2 is arguments 
// console.log("Result : ",result);



function loginUser(username){
  if(username===undefined){  
    //username===undefined or !username 
    console.log("Please enter a valid user name ");
    return ;
  }
  return `${username} just logged in`
}

// console.log(loginUser("Amrit Raj"))
// console.log(loginUser())


function calculateCaetPrice(...num1){
  //    ... is also a spread operator and  rest operator  
  return num1
}

// console.log(calculateCaetPrice(200));
// console.log(calculateCaetPrice(200,300,400));


      //    objects in function 
const user={
  username:"Amrit",
  prices:200
}

function handleObjec(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// handleObjec(user);
// handleObjec({
//   username:"Ammy",
//   price:300
// })


        //  Array in function 
const array=[100,300,200,4300]
function return2ndValue(getArray){
  return getArray[2]
}
console.log(return2ndValue(array));
