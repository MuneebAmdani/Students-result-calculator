function calculateResult(){
let userNumber=document.getElementById('number').value
let percentage=userNumber/750*100;

if(percentage >= 80){
    alert("You got A+ congrats")
}
else if(percentage >= 70){
    alert("You got A congrats")
}
else if(percentage >= 60){
    alert("You got B congrats")
}
else if(percentage>=50){
    alert("You got C")
}
else if(percentage>=40){
    alert("You  got D")
}
else{
    alert("You are fail")
}
console.log(userNumber)
console.log(percentage)


}
