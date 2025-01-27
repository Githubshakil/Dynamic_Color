const body = document.querySelector("body");
const main = document.querySelector("main");
const containerwrapper = document.querySelector(".containerwrapper");
const creatBtn = document.querySelector("#creatBtn");
const bgColorList = document.querySelector("#bgColorList");

const bgColors =[];
const hoverColors =[];




creatBtn.addEventListener("click",grnerateColor)
creatBtn.addEventListener("mouseover", hoverColor)


function grnerateColor(){
let randomNumber = Math.floor(Math.random()*9999999).toString(16).padStart(6, "0")
let randomColor = `#${randomNumber}`
    
body.style.background = randomColor;
bgColors.push(randomColor);
navigator.clipboard.writeText(randomColor)


// let duplicateId = bgColors.reduce((duplicate,item) => duplicate === item ? `${duplicate} is duplicate` : "duplicate not found")
// console.log(duplicateId);

displayUpdate()

}

function displayUpdate(){
    
bgColors.map((item)=>{
    bgColorList.innerHTML = ""
    let listItem= document.createElement("li");
    listItem.innerText = item
    bgColorList.appendChild(listItem)
})
}

function hoverColor(){
    let randomNumber = Math.floor(Math.random()*9999999).toString(16).padStart(6, "0")
let randomColor = `#${randomNumber}`
main.style.background = randomColor;
hoverColors.push(randomColor);


    
}
