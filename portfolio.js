//polyfill bind
// ---------------

// let name = {
//     firstName:"Anjaly",
//     lastName:"d"
// }

// let printName = function(hometown, state){
//     console.log('====================================');
//     console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);
//     console.log('====================================');
// }

// let printMyName = printName.bind(name, "kaloor");

// printMyName("Kerala");

// Function.prototype.myBind = function(...args){
//     let obj = this;
//     let params = args.slice(1);// second arg will return as []
//     return function(...args2){
//         obj.apply(args[0], [...params, ...args2]);// concat two array into one
//     }

// }

// let printMyName2 = printName.myBind(name, "kaloor");
// printMyName2("Kerala");




//call , apply, bind


// let name = {
//     firstName:"Anjaly",
//     lastName:"d",
    
// }

// let printFulllName= function(place){
//     console.log(this.firstName+ " " + this.lastName+" "+place);
    
// }

// printFulllName.call(name, "dehardun");

// let name2 = {
//     firstName:"sachin",
//     lastName:"tendulkar",

// }

// //function borrowing

// printFulllName.call(name2,"mumbai");

// printFulllName.apply(name2,["mumbai"]);// pass as arraylist

// //bind method

// let printMyName = printFulllName.bind(name2, "kerala");
// printMyName();



// debouncing and throttling

// const getData = () =>{
//     //call an api and gets data

//     console.log("fetching data");
    
// }

// const debounce = function(fn, delay){
//     let timer ;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(context, arguments);
//         }, delay);
//     }
// }


// const betterFunction = debounce(getData, 500) //call if time greater than 300ms




//function currying

let multiply



