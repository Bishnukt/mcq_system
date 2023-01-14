<?php
if(isset($_POST['ques']))
{
    $host='localhost:3306';
    $user='bishnu';
    $pass='Bishnupass';
    $conn=mysqli_connect($host,$user,$pass,'cc11');
    if(!$conn)
        die("Connection to Mysql failed.");
    $ques=$_POST['ques'];
    $op1=$_POST['ans1'];
    $op2=$_POST['ans2'];
    $op3=$_POST['ans3'];
    $op4=$_POST['ans4'];
    $ans=$_POST['ans'];
    $query="insert into quiz(ques,op1,op2,op3,op4,ans) values('{$ques}','{$op1}','{$op2}','{$op3}','{$op4}','{$ans}')";
    if(mysqli_query($conn,$query))
        echo "Inserted Successfully";
    else
        echo "Faced some problem while inserting";
}
else
echo("ques not found");

// if(isset($_GET[]))
// {

// }
?>

