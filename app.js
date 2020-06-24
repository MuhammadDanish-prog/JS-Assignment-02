//PDF o1

// var firstName=prompt("Enter Your First Name")
// var lastName=prompt("Enter Your Last Name")
// var c=alert("Your Full Name Is: "+firstName+" "+lastName)

// var a=prompt("Enter Your Favourite Mobile Phone Model")
// var b=a.length;
// var d=document.write("<p>Your Favourite Model is: "+a+"</p>")
// var c=document.write("Length of string: "+b)

// var a=("Pakistan")
// var b=a.indexOf("n")
// document.write("<p>String: "+a+"</p>")
// document.write("Index of 'n': "+b)

// var a=("Hello World")
// var b=a.lastIndexOf("l")
// document.write("<p>String: "+a+"</p>")
// document.write("Last Index of 'l': "+b)

// var a=("Pakistani")
// var b=a.charAt(3)
// document.write("<p>String: "+a+"</p>")
// document.write("Character at Index 3: "+b)

// var a=("Hyderabad")
// var b=a.replace("Hyder", "Islam"); 
// var c=document.write("<p>City: "+a+"</p>")
// var d=document.write("After Replacement: "+b)

// var message = ("Ali and Sami are best friends. They play cricket and football together.");  
// var b=message.replace(/and/g,"&")
// var c=document.write("<p>Message: "+message+"</p>")
// var d=document.write("<p>After Replacement: "+b+"</p>")


// var a="472"
// var b=Number(a)
// var c=document.write("<p>Value: "+a+"</p><p>Type: String</p>")
// var d=document.write("<p>Value: "+a+"</p><p>Type: Number</p>")

// var a=prompt("Enter Your String")
// var b=document.write("<p>User Input: "+a+"</p>")
// var c=a.toUpperCase();
// var d=document.write("<p>Upper Case: "+c+"</p>")

// var a=prompt("Enter Your String")
// var b=document.write("<p>User Input: "+a+"</p>")
// var c=a.slice(0,1)
// var d=a.slice(1)
// c=c.toUpperCase();
// d=d.toLowerCase();
// var d=document.write("<p>Upper Case: "+c+d+"</p>")


// var a=35.36;
// var b=toString(a)
// var e=document.write("<p>Value: "+a+"</p><p>Type: Number</p>")
// var f=document.write("<p>Value: "+3536+"</p><p>Type: ToString</p>")

// var a=prompt("Enter Your Name")
// for(var i = 0; i<a.length; i++){
//     if(a.charCodeAt(i)===33)
//     {
//         alert("Please Enter a Valid Username");
//         break;
//     }
//     else if(a.charCodeAt(i)===44)
//     {
//         alert("Please Enter a Valid Username")
//         break;
//     }
//     else if(a.charCodeAt(i)===46)
//     {
//         alert("Please Enter a Valid Username")
//         break;
//     }
//     else if(a.charCodeAt(i)===64)
//     {
//         alert("Please Enter a Valid Username")
//         break;
//     }
//     else
//     {
//         alert("Correct! Username")
//         break;
//     }
// }

var b=prompt("What do you want to order")
var b=b.toLowerCase();
var arr=["cake","apple pie","cookies","chips","patties"]
for(var i=0; i<arr.length; i++)
{
    if(arr[i]===b)
    {
        alert("Yes Available")
    
    }
    else
    {
        alert("Not Available Sorry!")
    
    }
}



// var str = "University of karachi";
// for (var i=0;i<str.length;i++)
// var res = str.split(i);
// var c=document.write(res)

//PDF 02

// var a=+prompt("Enter a Value")
// document.write("<p> Number: "+a+"</p>")
// var b=Math.round(a)
// document.write("<p>Rounf Off value: "+b)
// var c=Math.ceil(a)
// document.write("<p>Rounf Off value: "+c)
// var d=Math.floor(a)
// document.write("<p>Rounf Off value: "+d)

// var a=+prompt("Enter a Value")
// document.write("<p> Number: "+a+"</p>")
// var b=Math.round(a)
// document.write("<p>Rounf Off value: "+b)
// var c=Math.ceil(a)
// document.write("<p>Rounf Off value: "+c)
// var d=Math.floor(a)
// document.write("<p>Rounf Off value: "+d)

// var a=+prompt("Enter a value")
// var b=Math.abs(a)
// alert("The absolute value of "+a+" is "+b)

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("<p>Random dice value: "+numberOfStars+"</p>")

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if(numberOfStars===2)
// {
//     document.write("<p>"+numberOfStars+" Random coin Value:Head</p> ")
// }
// else if(numberOfStars===1)
// {
//     document.write("<p>"+numberOfStars+" Random coin Value:Tails</p> ")
// }

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("<p>Random Number Between 1 and 100: "+numberOfStars+"</p>")



// var a=prompt("Enter Your Weight")
// var b=parseInt(a)
// alert("The weight of user is "+b+" kilograms")

// var a=+prompt("Enter a Number Between 1 to 10")
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if(numberOfStars===a)
// {
//     alert("Correct! Answer")
// }
// else
// {
//     alert("Try Again!")
// }

//PDF 03

// var a=new Date();
// document.write(a)

// var a=new Date();
// var b=a.getMonth();
// if(b===0)
// {
//     alert("Current Month: Janvuary")
// }
// else if(b===1)
// {
//     alert("Current Month: Febvuary")
// }
// else if(b===2)
// {
//     alert("Current Month: March")
// }
// else if(b===3)
// {
//     alert("Current Month: April")
// }
// else if(b===4)
// {
//     alert("Current Month: May")
// }
// else if(b===5)
// {
//     alert("Current Month: June")
// }
// else if(b===6)
// {
//     alert("Current Month: July")
// }
// else if(b===7)
// {
//     alert("Current Month: Augest")
// }
// else if(b===8)
// {
//     alert("Current Month: September")
// }
// else if(b===9)
// {
//     alert("Current Month: Octobar")
// }
// else if(b===10)
// {
//     alert("Current Month: November")
// }
// else if(b===11)
// {
//     alert("Current Month: December")
// }



// var a=new Date();
// var b=a.getDay();
// if(b===0)
// {
//     alert("Current Month: Sun")
// }
// else if(b===1)
// {
//     alert("Current Month: Mon")
// }
// else if(b===2)
// {
//     alert("Current Month: Tue")
// }
// else if(b===3)
// {
//     alert("Current Month: Wed")
// }
// else if(b===4)
// {
//     alert("Current Month: Thu")
// }
// else if(b===5)
// {
//     alert("Current Month: Fri")
// }
// else if(b===6)
// {
//     alert("Current Month: Sat")
// }


// var a=new Date();
// var b=a.getDay();
//  if(b===5)
// {
//     alert("It’s Fun day")
// }
// else if(b===6)
// {
//     alert("It’s Fun day")
// }
// else
// {
//     alert("Not It’s Fun day ")
// }


// var a=new Date();
// var b=a.getDate();
// if(b<=15)
// {
//     alert("First Fifteen Days Of the Month")
// }
// else if(b>15)
// {
//     alert("Last Days Of the Month")
// }


// var a=new Date();
// document.write("<p>Current Date: "+a+"</p>")
// var b=a.getTime();
// document.write("<p>Elapsed milliseconds since janvuary 1, 1970: "+b+"</p>")
// var c=b/60000;
// document.write("<p>Elapsed minutes since janvuary 1, 1970: "+c+"</p>")

// var a=new Date();
// var b=a.getHours();
// if(b<=11)
// {
//     document.write("It's AM")
// }
// else if(b>11){
// document.write("It's PM")
// }


// var laterDate = new Date();
// laterDate.setMonth(11);
// laterDate.setDate(31);
// document.write("Later Date: "+laterDate)

// var laterDate = new Date();
// var b=laterDate.getDate()+7;
// document.write(b+" Days have passed since Ramzan: ")

// var laterDate = new Date();
// laterDate.setMonth(3);
// var b=laterDate.setDate(24);
// document.write("Later Date: "+b)

var a=new Date();
var b=a.getDate();
var c=document.write(b)

//PDf 04

// function dateTime(){
// var a=new Date();
// document.write(a)
// }
// dateTime();

// function greet(){
//     var a=prompt("Enter Your First Name")
//     var b=prompt("Enter Your Last Name")
//     var c=a+b;
//     alert(c+" is Your Full Name\n Welcome!")
// }
// greet();

// function Cal(){
//     var a=+prompt("Enter Your First value")
//     var b=+prompt("Enter Your Second value")
//     var c=prompt("Enter Your Operator(e.g +,-,/,*,%)")
//     if(c==="+")
//     {
//         alert("Your Answer is: "+(a+b))
//     }
//     else if(c==="-")
//     {
//         alert("Your Answer is: "+(a-b))
//     }
//     else if(c==="*")
//     {
//         alert("Your Answer is: "+(a*b))
//     }
//     else if(c==="/")
//     {
//         alert("Your Answer is: "+(a/b))
//     }
//     else if(c==="%")
//     {
//         alert("Your Answer is: "+(a%b))
//     }


// }
// Cal();

// function sqr(){
//     var a=prompt("Enter Your Value")
//     var b=a*a;
//     alert("Your Square Value is: "+b)
// }
// sqr();

// function fac(){
//     var a=prompt("Enter Your Value")
//     var b=a*(a-1)*(a-2)*(a-3)
//     alert("Your Factorial Value is: "+b)
// }
// fac();

// function count(){
//     var a=+prompt("Enter Your Starts Value")
//     var b=+prompt("Enter Your End Value")
//     for(var i=a;i<=b;i++)
//     {
//         document.write(i)
//     }
// }
// count();

// function right(){
//     var base=+prompt("Enter Your Base Value")
//     var per=+prompt("Enter Your Perpendicular Value")
//         var c=base*base;
//         var d=per*per;
//         var e=c+d;
//         var f=e*e;
//         var g=f=(c+d)
//     document.write("Your Hyptneaus Value is: "+g)
// }
// right();


// function area(){
//     var a=+prompt("Enter Your width Value")
//     var b=+prompt("Enter Your height Value")
//         var c=a*b;
//     document.write("Your Area Value is: "+c)
// }
// area();
// function palin(){
// var a=prompt("Enter a Word")
// var b="";
// for(i=a.length-1;i>=0;i--){
//   b+=a[i]
// }
// if(a===b)
// {
//   alert(a+ " is Palindrome Word")
// }
// else
// {
//   alert(a+ " is not Palindrome word")
// }
// }

// palin();

// function calcCircumference(){
//   var a=+prompt("Enter Radius Of A Circle")
//   var b=3.14;
//   var c=2*b*a;
//   alert("The Circumference is: "+c )
// }

// calcCircumference();

// function area(){
//   var a=+prompt("Enter Radius Of A Circle")
//   var b=3.14;
//   var c=b*(a*a)
//   alert("The Area of a Circle is: "+c )

// }
// area();

function str(){
    var a=prompt("Enter a string")
    var b=prompt("Enter a Letter")
    for(i=0;i<a.length;i++)
    {
      if(b===a.charAt[i])
      {
        
      }
    }
  }