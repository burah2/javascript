let n= 15 ;
let sum=0;
for (let i=1; i <=n; i++){
  if(i%3===0  || i% 5===0){
    console.log("this is i",i)
    sum+=i
    console.log("this is the sum",sum)
  }
}
console.log("this is the final result",sum)