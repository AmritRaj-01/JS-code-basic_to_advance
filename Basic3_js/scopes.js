          //  global scope 
// let num=5;
// const num1=120;
// var num2=23;

if(true){      // in this if block global variable are used without any error 
  let num=50;     // block scope ->they are not used outside from this if block  
  const num1=12;    
  var num2=230;
}

// console.log(num);
// console.log(num1);
// console.log(num2);

function one() {
  const username="Amrit"
  function two(){
    const website="YT"
    console.log(username);
  }
  two()
}

if(true){
  const username="Amrit";
  if(username==="Amrit"){
    const web=" YT.com"
    // console.log(username+web);
  }
  // console.log(web);
  
}
// console.log(username);    // throw error  because variable has no scope 


//  if we call a function before initialize it it will execute but if we create a function and store that in a variable and then after call the function before initialization(addtwo function) then it throw error
addone(5);
function addone(num){
  return num +1;
}

// addtwo(5);
const addtwo = function(num){
  return num+2;
}
addtwo(5);


