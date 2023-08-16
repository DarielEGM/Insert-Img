"use strict";

const file = document.getElementById('file');

file.addEventListener("change", (e)=>{
    readFile(file.files);
});

const readFile = fi =>{
    for(let i = 0; i < fi.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(fi[i]);
        reader.addEventListener("load", (e)=>{
            let newImg = `<img src='${e.currentTarget.result}'>`;
            document.querySelector(".result").innerHTML += newImg;
    });
    }
}

