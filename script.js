// day-2


//  js keywords(reserve words)

//   var vs let vs const

//   example1(var ):-
//   var num=20 ;
//   { 
//       var num=10 ;
//       console.log(num);//10
//   } 
//  console.log(num); //10
 

// let example:-

// let num=20;
// {
//      let num=10;
//     console.log(num);//10
// }
// console.log(num);//20

// example
//console.log(num)
//var num=10;        //undefined

// console.log(num)
// let num=10;       //error


// variables(to store your info inside the conatiner)
//syntax: let varname=value;
//let name="wajid";

//let name;
//console.log(name);   //o/p undefined

//let num=10.23;
//console.log(typeof(num));   // number(o/p)

//Datatypes(primitive,non-primitive)
//primitive(string,number,boolean,undefined,null)
//non primitive(array,object,functions)
//string="hello"
//number=10,10.23
//boolean=t/f
//undefined= a variable is declared but value has not assigned
//ex

//let name;
//console.log(name);

//null(empty or variable is empty)
//let data = null;
//console.log(typeof(data));

//let num=10;
//let newnum=String(num);
//console.log(newnum);//10
//console.log(typeof(newnum));//string

//let num=10.23456;
//console.log(num.toFixed(2));//toFixed can be used to limit decimal to your requirements.

//let num="100";
//console.log(num);
//console.log(typeof(num));
//let newnum=parseInt(num);
//console.log(newnum);
//console.log(typeof(newnum));

//let num="10.234560";
//console.log(typeof(num));
//let newnum=parseFloat(num);
//console.log(newnum);
//console.log(typeof(newnum));

// non primitive
//array(collection of elements can be stored)

//let array=[10,20,30,40,50,60];
//console.log(array[4]);//50
//console.log(array[0]);//10
//console.log(array[10]);//undefined

//let array=[20,40,50,60,10,30];
//console.log(array.sort());          //10,20,30,40,50,60
//console.log(array.sort().reverse());     //60,50,40,30,20,10

//splice(index,no. of elements we want to remove)

//let fruits=["apple","banana","grapes","mangoes","oranges"];
//console.log(fruits.splice(2));   //g,m,o (splice remove an element from a particular index)
//console.log(fruits.splice(3));  //m,o
//console.log(fruits.splice(2,1));// grapes get removed
//console.log(fruits.splice(2,2));    // grapes and mangoes get removed
//console.log(fruits);

//array methods(push,pop,slice,splice,join,split)

//copy by value:

//let data=10;
//let newdata;
//copy the data value 10 to newdata
//newdata=data;
//console.log(newdata);   //10
//console.log(data);      //10

//copy by reference:
 //let array1=[10,20,30,40];
 //let array2=[12,34,64,89];
 //console.log(array1);    //10 20 30 40 
 //console.log(array2);    //12 34 64 89 
 //array2=array1;          //10,20,30,40 
 //array1.push(100);        
 //console.log(array1);     //10 20 30 40 100  //both are getting updated if u update an array1
 //console.log(array2);     //10 20 30 40 100

 // to overcome copy by reference we use spread operator(...)