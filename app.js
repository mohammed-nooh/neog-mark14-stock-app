"use strict";


const inputs=document.querySelectorAll(".input");
const body=document.querySelector("body");
const subBtn=document.querySelector("#subBtn");
const message=document.querySelector(".message");
const heading=document.querySelector(".heading");

function showMessage(text){
    message.classList.remove("hidden");
    message.innerText=text;
}



function check(){
    heading.style.color="black";
    body.style.background="none";
    message.classList.add("hidden");

    const cp=Number(inputs[0].value);
    const quantity=Number(inputs[1].value);
    const sp=Number(inputs[2].value);
    // console.log(cp,quantity,sp);
    if(cp>0 && quantity>0 && sp>0){
        //loss
        if(cp>sp){
            const loss=((cp-sp)*quantity).toFixed(2);
            const lossPer=((cp-sp)*100/cp).toFixed(2);
            showMessage(`You lost ${lossPer}%. Your total loss is ${loss}`);

            if(lossPer>50){
                heading.style.color="white";
                body.style.background="url(gifs/sad.gif)";
            }
            

        }
        //profit
        else if(sp>cp)
        {
            const profit=((sp-cp)*quantity).toFixed(2);
            const profitPer=((sp-cp)*100/cp).toFixed(2);
            showMessage(`You gained ${profitPer}%. Your total gain is ${profit}`);

            if(profitPer>50){
                body.style.background="url(gifs/happy.gif)";
            }

        }
        else{
            showMessage(`There is no change in stock price so no profit or loss`);
        }
    }else{
        showMessage(`Please enter values greater than 0 (Only numbers are valid in above fields)`)
    } 

}

subBtn.addEventListener("click",check)