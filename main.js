let first=document.getElementById("input1");
let second=document.getElementById("input2");

first.addEventListener ("change",()=>{
    document.getElementById("result").setAttribute("placeholder",first.value)
    
})

let resultInput=document.getElementById("result");
resultInput.addEventListener ("change",()=>{
    
    if (document.getElementById("result").value!=null) {
        document.getElementById("check").disabled=false
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a=getRandomInt(1,3);
let b=getRandomInt(1,3);
    
    first.value=a;
    second.value=b;
    
function check (){

    let action=document.getElementById("action").value;
    let a=first.value;
    let b=second.value;

    let rightAnswer=undefined;
    
    switch (action) {
        case "add":rightAnswer=Number (a)+Number (b); break;
        case "subtract":rightAnswer=Number (a)-Number (b); break;
        case "multiply":rightAnswer=Number (a)*Number (b); break;
        case "divide":rightAnswer=Number (a)/Number (b); break;
        default: rightAnswer="CHOOSE ACTION";
    }    
    let userAnswer=document.getElementById("result").value;
    
    if (Math.abs(userAnswer-rightAnswer)< 0.01) {
        alert("YOU ARE RIGHT")
    }
    else {
        alert("YOU'RE WRONG");
        document.getElementById("nok").style.display=none;
    }
} 
