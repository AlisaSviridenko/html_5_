let abc=document.getElementById("input1");
abc.addEventListener ("change",()=>{
    document.getElementById("result").setAttribute("placeholder",document.getElementById("input1").value)
    
})

let resultInput=document.getElementById("result");
resultInput.addEventListener ("change",()=>{
    
    if (document.getElementById("result").value!=null) {
        document.getElementById("check").disabled=false
    }
})

function check (){

    let action=document.getElementById("action").value;
    let a=document.getElementById("input1").value;
    let b=document.getElementById("input2").value;

    document.getElementById("result").setAttribute("placeholder",a)
    
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
let randomInt = document.getElementById("input1").value.getRandomInt(10, 20);
let randomInt = document.getElementById("input2").value.getRandomInt(10, 20);
    
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


    // document.getElementById("result").value
}
// function checkParams() {
//             var number1 = $('#input1').val();
//             var number2 = $('#input2').val();
//             var result = $('#result').val();
//             if(number1 .length != 0 && number2 .length != 0 && result.length != 0 && $('#input1').prop("checked") && ($('#input2').prop("checked") || $('#result').prop("checked")))
//                 $('#check').removeAttr('disabled');
//              else 
//                 $('#check').attr('disabled', 'disabled');
//         }
