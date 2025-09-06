/*let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
    console.log("A Grade")
}else if(marks>=70){
    console.log("B+ Grade")
}else{
    console.log("Fail")
}
let day=5;
switch(day)
{
    case 1:
           console.log("Sunday")
            break;
    case 2: 
            console.log("Monday")  
            break;
    case 3:
            console.log("Tuesday")
            break;
    case 4:
            console.log("Wednesday")  
            break;
    case 5:
           console.log("Thursday")
           break;
    case 6:
           console.log("Friday")
           break;
    case 7:
          console.log("Saturday")  
          break;
    default:
        console.log("Invalid choice")
}
for(let i=0;i<20;i++)
{
    console.log(i)
}
let j=0;
while(j<=5){
    console.log(j)
   j++}
 let k=0;
 do{
    console.log(k)
    k++
 } while(k<=5);*/
  let colors=["Red","Blue","Green"]
  for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
  }
  for(let color of colors){
    console.log(color)
  }
  let person={
    name:"Syamala",
    age:18,
    college:"JNTUGV"
  }
  for(let key in person){
    console.log(`${key}:${person[key]}`)
  }
  for(let i=5;i>=0;i--){
    if(i===2){
        continue;
         }     else if(i===4){
            break;

     } 
     console.log(i)  
    }
  