console.log("hello world");
alert("me");
document.write("this is document write");
console.warn("this is a warning");
console.error("error");
// javascript variables
var number1 = 34;
var number2 = 45;
console.log(number1 + number2);
// data types
var str1= "this is a string";
var str2= 'this is also a string';
// objects
var a= true;
var b= false;
console.log(a,b);
var und;
console.log(und)
var a = 1;
var b = 2;
console.log("the value of a+b is",a+b);
var c=2;
c-= 2;
console.log(c);
var s=1;
var r=1;
console.log(s == r);
console.log(true&&true);
// functions
function avg(a,b)
{
    return(a+b)/2;
}
c1= avg(4,6);
console.log(c1);
var age=36;
if (age>18)
{
    console.log("you are not a kid");
}
else{
    console.log("you are a kid");
}
for(var i=0;i<10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i);
}
let arr = ['fan','camera',34,null,true];
console.log(arr.length);
arr.pop();
arr.shift();
console.log(arr);
arr.toString();
let date = new date();
console.log(date);