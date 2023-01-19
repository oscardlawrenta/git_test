
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let  secretword = document.getElementById("passGen");

let lefttxt = document.getElementById("input1");

let righttxt = document.getElementById("input2");

secretword.addEventListener("click",  function () {

  lefttxt.textContent = randomPassword()
  righttxt.textContent = randomPassword()


})

let passLimit = 15

function randomPassword () {
    let mynaPass = " "
    for (let i = 0; i < passLimit; i++){
        let randomPass = Math.floor(Math.random() * characters.length)
        mynaPass += characters[randomPass]
    }
    return mynaPass
}
