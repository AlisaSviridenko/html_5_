function check {
	let action=document.getElementById("action").value;
	let a=document.getElementById("number1").value;
	let b=document.getElementById("number2").value;
	let result=undefined;
	switch (action){
	case "add" result=Number (1)+Number (2); break
	case "substrate" result=Number (1)-Number (2); break
	case "multiple" result=Number (1)*Number (2); break
	case "divide" result=Number (1)/Number (2); break
	default: result= Choose action";
	}
	let userAnswer=document.getElementById("result").value;
if(userAnsver==rightAnsver){
	alert ("OK")
}
else {
	alert ("YOU ARE WRONG")
}
}
