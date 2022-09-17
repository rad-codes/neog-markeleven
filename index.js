const dateofbirth=document.querySelector("#date-of-birth")
const luckynumber=document.querySelector("#lucky-number")
const calculatebutton=document.querySelector("#calculate-number")
const displayMessage = document.querySelector("#output-container");
function handleclick(){
 const dob= dateofbirth.value
//    console.log(dob)
   let sumofdob=calculatesum(dob)
   console.log(sumofdob)
   if(sumofdob%luckynumber.value==0){
    console.log("lucky")
    showmessage("LUCKY")
   }
   else{
    console.log("notlucky")
    showmessage("UNLUCKY")
   }
}
const showmessage = (message) => {
    displayMessage.innerText = message;
  };
calculatebutton.addEventListener("click",handleclick)
function calculatesum(dob){
let sum=0;
console.log(dob)
const dateofbirthnumber=dob.replaceAll("-","")
for(index in dateofbirthnumber){
    sum=sum+Number(dateofbirthnumber[index])
}
console.log(sum)
return sum
}