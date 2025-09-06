let person={
    name:"Syamala",
    age:19
}
console.log(person.name);
console.log(person["age"]);

const {name,age}=person;//Destructuring Assignment
console.log(name)
console.log(age)

let fruits=["apple","banana","mango"];
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num);//Transform each elememt
console.log(square)

let evens=numbers.filter((num)=>num%2===0);
console.log(evens)
let sum=numbers.reduce((present,num)=>present+num,0)
console.log(sum)

let details=[
    {
        name:"Syamala",
        marks:90
    },
    {
        name:"Sudha",
        marks:85
    },
    {
        name:"sravani",
        marks:80

    }

] 
let maxMarks=0;
let topper="";
for(let student of details){
    if(maxMarks<student.marks){
        maxMarks=student.marks
       topper=student.name
    }
}
console.log(`Topper is ${topper} and he got ${maxMarks}`)
