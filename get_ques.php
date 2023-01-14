<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);
$user='bishnu';
$host='localhost:3306';
$pass='Bishnupass';
$conn=mysqli_connect($host,$user,$pass,'cc11');
if(!$conn)
    die("Mysql connection couldn't be established.");
$query="Select * from quiz";
$data=array();
if($result=mysqli_query($conn,$query)){
    // echo mysqli_fetch_all($result);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
			// echo $row["ques"]." ".$row["op1"]."\n";
			//echo json_encode($row);
			// echo $row;
			$data+=array($row["ques_no"]=>$row);
		//	$data+=($row);
    }
		echo json_encode($data);
	}
}
?>
