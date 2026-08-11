 // Object store data in key value pair      
      // way of declear object 
// singleton -> created by constructor 
// object literals


// Object.create   // object creation through constructor   (Singleton)

const sym=Symbol("Key1"); // Symbol is a primitive data type 

// object creation through Literals
const JsUser={
  name:"Amrit",
  "full name":"Amrit Raj",
  [sym]:"myKey1",   // if we can't use sq. bracket then its type is string but we have to take symbole that we define 
  age:21,
  address:"Haryana",
  email:"amrit@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}
            // Accesing value of object most prefer using sq.bracket with " "
// console.log(JsUser.address);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["address"]);
// console.log(JsUser[sym]);


            // changing object values 
// JsUser.email="amritraj@gmail.com";
// Object.freeze(JsUser);         // after freeze we can't change 
// JsUser.email="amy@gmail.com";
// console.log(JsUser);


                    // Function with object 
// JsUser.greeting=function(){
//   console.log("Hello Js User");
// }

// JsUser.greetingTwo=function(){
//   console.log(`Hello Js User, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// const tinderUser=new Object();    // singleton 
const tinderUser={}               // non-singleton

tinderUser.id="123abc";
tinderUser.name="Mic-John"
tinderUser.isloggedIn=false

// console.log(tinderUser);

            // nested object 
const regularUser={
  email:"mic@gmail.com",
  fullname:{
    userfullname:{
      firstname:"mic",
      lastname:"john"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);


          // combinig object 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}  // object ke ander 2 object 

// const obj3=Object.assign(obj1,obj2)   // single object output
// const obj4=Object.assign({},obj1,obj2)  // similar to obj3 but adding {} is professional way 

const obj3={...obj1,...obj2};   // spread operator 
// console.log(obj3);
// console.log(obj4);


            //object in array 
const users=[
  {
    id:1,
    email:"am@gmail.com"
  },
  {
    id:2,
    email:"ri@gmail.com"
  },
  {
    id:2,
    email:"ra@gmail.com"
  }
]
// console.log(users[2]);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));  // checking property is available or not 




    //  Destructuring 
const course={
  couresename:"Js lectures",
  price:'00.00',
  courseowner:"Amrit"
}

const{courseowner : name}=course
// console.log(courseowner);
console.log(name);    // giving another small name to courseowner ->name

// const navbar=({company})=>{  
// // this is  also used in react and  {company}  is caled destructuring 
// }
// navbar(company="amyinfo")



