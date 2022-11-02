function pal(string){
let str=""
for(let i=string.length-1;i>=0;i--){
   str+=string[i]

}
return str;

}
let reversed=pal("aman");
if(reversed==string){
console.log("palindrome")
}else{
console.log("No")
}