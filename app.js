
let input=document.getElementById("ip")
let backG=document.querySelectorAll('btn')
let backDiv=document.getElementById("firstdiv")
let text=document.getElementById("text")
let btns=document.getElementById("btns")
let white=document.getElementById("white")
function getData(x){
        input.value+=x
}

function allClear(){
    input.value=""
}
function clearOne(){
    input.value=input.value.slice(0,-1)
}
function calculate(){
    try{
        let value=input.value
         input.value=eval(value)
    }
    catch(error){
        input.value="Error!!!"
    }
}
const changeBg=()=>{
        btns.style.backgroundColor="#1e1b4b"
        btns.style.color="white"
        backDiv.style.backgroundColor="#1e1b4b"
        backDiv.style.color="white"
        input.style.backgroundColor="#1e1b4b"
        input.style.color="white"
        btns.style.borderTop="1px solid #38bdf8"
        text.style.color="white"
        white.style.fill="black"
}

let calc=document.getElementById('calc')
    const changeBackGround=()=>{
        input.style.background="linear-gradient(to right,#67e8f9,#22d3ee,#38bdf8,#0ea5e9)"
        input.style.color="white"
        backDiv.style.background="linear-gradient(to right,#67e8f9,#22d3ee,#38bdf8,#0ea5e9)"
         backDiv.style.color="white"
         calc.style.background="linear-gradient(to right,#38bdf8,#2563eb)"
         calc.style.color="white"
        white.style.fill="black"
    }
const changeWhite=()=>{
    btns.style.backgroundColor="white"
        btns.style.color="black"
        backDiv.style.backgroundColor="white"
        backDiv.style.color="black"
        input.style.backgroundColor="white"
        input.style.color="black"
}

