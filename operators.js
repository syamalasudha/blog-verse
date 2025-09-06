Arithmetic operators
let x=5,y=6;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)
console.log(x%y)
//Assignment operators
let z=5;
z+=3
console.log(z)
z*=2
console.log(z)
z-=4
console.log(z)
z/=2
console.log(z)
z%=2
console.log(z)
//Comparision operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
//Logical operators
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))
//string operators
let firstName="Syamala"
let lastName="Sudha"
let fullName=firstName+" "+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName} ,Welcome`
console.log(correctName)
//Ternary Operators
let myAge=18
if(myAge>=18){
    console.log("Eligible to vote")
}else{
    console.log("You cannot vote")
}
let result=myAge>=18? "Eligible to vote":"You cannot vote"
console.log(result)
//Increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
console.log(count)
//typeof operators
console.log(typeof count)
console.log(typeof "syamala")
console.log(typeof 19)