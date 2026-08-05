const numArr=[1,2,3,4,5,6,7];
const myHeros=["marvel","avenger"];

const numArr2=new Array(1,2,3,4);
// console.log(numArr[2]);

// JavaScript array-copy-operation create shallow copies rather than deep copies.
// shallow copies share same reference means changes happen in original array also
//deep copies do not share same references 

// numArr.push(5); // insert in first
// numArr.push(6);
// numArr.pop();  // remove last 

// numArr.unshift(9); // add in first 
// numArr.shift();   // remove from first

// console.log(numArr.includes(3)); // return true if available and flase if unavilable

// console.log(numArr.indexOf(5)); // if not avilable return -1 


// const arr=numArr.join() ; // it will copy numArr to arr but in string type
// console.log(arr); 


// console.log(numArr);


                  //  Slice 
// console.log("A",numArr);
// const myn1=numArr.slice(1,3);  // range from 1 to 3 but ignore 3 and don't chnage the original array 

// console.log(myn1);
// console.log("B",numArr);
 
//                     // splice 
// const myn2=numArr.splice(0,4);  // change the original array take same range  
// console.log("C",numArr);
// console.log(myn2);




 const marvel_heroes=["thor","ironman","spiderman"]
 const dc_heroes=["superhero","flash","batman"]

//  marvel_heroes.push(dc_heros);  // change in main array
//  console.log(marvel_heroes[3][2]);
 
// const all_heroes=marvel_heroes.concat(dc_heroes);  //  combine , create and return completly new array 

// const all_heroes=[...marvel_heroes,...dc_heroes] ;  // (spread operator)    

// console.log(all_heroes);


// const unique_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_array=unique_arr.flat(Infinity); //make 1 array of array of array 
// console.log(real_array);
// console.log(unique_arr);


// console.log(Array.isArray("Amrit")); // check aeeay available or not 
// console.log(Array.from("Amrit"));  // create a charecter array ['A','m','r','i','t']
// console.log(Array.from({name:"Amrit"}));  // return empty array 


let num1=10;
let num2=20;
let num3=30;
console.log(Array.of(num1,num2,num3,num1));  // return new array by multiple variables 




