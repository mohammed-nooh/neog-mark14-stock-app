"use strict";


const inputs=document.querySelectorAll(".inputs");

const subBtn=document.querySelector("#subBtn");
const message=document.querySelector(".message");

function check(){
    let [pur,no,sell]=[...inputs.values];
    console.log(pur,no,sell);

}

subBtn.addEventListener("click",check)