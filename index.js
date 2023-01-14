window.onload=()=>{
    document.getElementById("submit").onclick=()=>{
    const ques=document.getElementById("ques");
    console.log(ques);
    const ans1=document.getElementById("ans1");
    console.log(ans1);
    const ans2=document.getElementById("ans2");
    console.log(ans2);
    const ans3=document.getElementById("ans3");
    console.log(ans3);
    const ans4=document.getElementById("ans4");
    console.log(ans4);
    // const ans=document.getElementsByName('ans').checked;
    let ans=null;
    const ans_list=document.getElementsByName("ans");
    // console.log(ans_list);
    for(let i=0;i<ans_list.length;i++){

        if(ans_list[i].checked==true)
        {
            // console.log(ans_list[i].value)
            let temp=ans_list[i].value;
            // console.log(temp);
            if(temp==="op1")
                ans=ans1;
            else if(temp==="op2")
                ans=ans2;
            else if(temp==="op3")
                ans=ans3;
            else
                ans=ans4;
        }
    }
    console.log(ans);
    $.ajax({
        url:'server.php',
        type:'post',
        data:{
            'ques':ques.value,
            'ans1':ans1.value,
            'ans2':ans2.value,
            'ans3':ans3.value,
            'ans4':ans4.value,
            'ans':ans.value,
        },
        success: (response)=>{
            ques.value="";
            ans1.value="";
            ans2.value="";
            ans3.value="";
            ans4.value="";
            ans.value="";
            // ans_list.forEach((element)=>{element.checked=false;})
            ans.checked=false;
            alert(response);
        }
    });
    }
}
