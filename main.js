function check (){
	let action=document.getElementById("action").value;
	let a=document.getElementById("number1").value;
	let b=document.getElementById("number2").value;
	let result=undefined;
	switch (action){
	case "add": result=Number (a)+Number (b); break
	case "substrate": result=Number (a)-Number (b); break
	case "multiple": result=Number (a)*Number (b); break
	case "divide": result=Number (a)/Number (b); break
	default: result= Choose action";
	}
	let userAnswer=document.getElementById("result").value;
if(userAnsver==rightAnsver){
	alert ("OK")
}
else {
	alert ("YOU ARE WRONG")
}

