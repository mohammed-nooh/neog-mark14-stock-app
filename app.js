"use strict";


const inputs=document.querySelectorAll(".input");

const subBtn=document.querySelector("#subBtn");
const message=document.querySelector(".message");

function showMessage(text){
    message.classList.remove("hidden");
    message.innerText=text;
}


function check(){
    message.classList.add("hidden");

    const cp=Number(inputs[0].value);
    const quantity=Number(inputs[1].value);
    const sp=Number(inputs[2].value);
    console.log(cp,quantity,sp);
    console.log(cp-sp);
    if(cp>0 && quantity>0 && sp>0){
        //loss
        if(cp>sp){
            const loss=((cp-sp)*quantity).toFixed(2);
            const lossPer=((cp-sp)*100/cp).toFixed(2);
            showMessage(`You lost ${lossPer}%. Your total loss is ${loss}`);
            console.log(`You lost ${lossPer}%. Your total loss is  ${loss}`);

        }
        //profit
        else{
            
        }
    } 

}

subBtn.addEventListener("click",check)