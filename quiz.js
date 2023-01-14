window.onload=()=>{
	function* generator(obj)
	{
			for(const prop in obj){
				yield obj[prop];
			}
	}
	let val;
	let user_ans;
	const display=document.getElementById('display');
	const submit=document.getElementById('submit');
	const next=document.getElementById('next');
	let temp;
	document.getElementById('start').onclick=()=>{
		document.getElementById('start').setAttribute("hidden","");
		$.ajax({
			url:'get_ques.php',
			type:'GET',
		async: false,
			success: (response)=>{
				temp=JSON.parse(response);
			}
		})
		document.getElementById('start_but').remove();
				 data=generator(temp);
				console.log("temp="+typeof(temp));
				console.log(temp);
		change();
		submit.removeAttribute("hidden");
		submit.setAttribute("disabled","");
		display.removeAttribute("hidden");
	}
	
	const options=document.getElementsByClassName('form-check-input');
	const values=document.getElementsByClassName('form-check-label');
	
	submit.onclick=()=>{
		console.log("submit pressed");
		submit.setAttribute("hidden","");
		next.removeAttribute('hidden');
		if(val.ans===val[user_ans.value])
			document.getElementById('checker').innerHTML="Right Answer :D";
		else
			document.getElementById('checker').innerHTML="Wrong Answer :(";
	}
	
	next.onclick=()=>{
		change();
		console.log('next pressed');
		next.setAttribute("hidden","");
		user_ans.checked=false;
		submit.removeAttribute("hidden");
		submit.setAttribute("disabled","");
		document.getElementById('checker').innerHTML="";
	}
	console.log(options);
	options[0].onclick=()=>{
		console.log("Op1 clicked");
		user_ans=options[0];
		submit.removeAttribute("disabled");
	}
	options[1].onclick=()=>{
		console.log("Op2 clicked");
		user_ans=options[1];
		submit.removeAttribute("disabled");
	}
	options[2].onclick=()=>{
		console.log("op3 clicked");
		user_ans=options[2];
		submit.removeAttribute("disabled");
	}
	options[3].onclick=()=>{
		console.log("op4 clicked");
		user_ans=options[3];
		submit.removeAttribute("disabled");
	}

	function change(){
		val=data.next().value;
		if(val==undefined)
			alert("No more questions to answer");
		console.log(val);
		const no=val.ques_no,
			ques=val.ques,
			ans=val.ans,
			op1=val.op1,
			op2=val.op2,
			op3=val.op3,
			op4=val.op4;
		values[0].innerHTML=op1;
		values[1].innerHTML=op2;
		values[2].innerHTML=op3;
		values[3].innerHTML=op4;
		document.getElementById('ques').innerHTML=`${no}. ${ques}`;
	}
}
