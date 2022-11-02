function prime(num){
let count=0;
for(let i=1;i<=num;i++)
	if(num%i==0){
	count++;
      }
if(counter==2){
return true;
}else{
return false;

}
}
let ans=prime(13)
if(ans==true){
console.log("Prime");
}else{
console.log("Not Prime")
}