<?php
session_start();
include 'config.php';
$email=$_POST['username'];
$pass=$_POST['password'];
$CTM=time();
$ipadd=$_SERVER['REMOTE_ADDR'];
$que=mysqli_query($con,"SELECT * FROM signup WHERE email='".$email."' AND password='".$pass."'") or die("Could not execute authentication query");
$cou=mysqli_num_rows($que);
$value=mysqli_fetch_array($que);
$que2=mysqli_query($con,"SELECT * FROM users WHERE email='".$email."'") or die("Could not execute last login query");
$value2=mysqli_fetch_array($que2);
					$name=$value['name'];
					$user_id=$value['userid'];
					$email=$value['email'];
					$contact=$value['phone'];
					$college=$value['college'];
					$lastlogin=$value2['lastlogin'];
if($cou == 0)
{
	echo "<script>alert('Sorry. Wrong email-id or password. Please try again ');window.location ='index.php';</script>";
	}
else
{
	$_SESSION['name']=$name;
  $_SESSION['user_id']=$user_id;
  $_SESSION['email']=$email;
	$_SESSION['contact']=$contact;
	$_SESSION['college']=$college;
	$_SESSION['lastlogin']=$lastlogin;

	$login = mysqli_query($con,"UPDATE `users` SET `lastlogin`= CURRENT_TIMESTAMP() WHERE `email` = '".$email."'") or die("Cannot connect to database!");
	header("Location: dashboard.php");
	$qqq=mysqli_query($con,"Select userid from plus_login where userid='".$email."';");
	$countsessions=mysqli_num_rows($qqq);
	if($countsessions==0){
    $sessionquery="insert into plus_login(id,userid, ip,tm, status) values( '$user_id','$email','$ipadd',CURRENT_TIMESTAMP(),'ON')";
    $plus=mysqli_query($con,$sessionquery);}
	$lt="ON";
	$logout = mysqli_query($con,"UPDATE `plus_login` SET `status`= '".$lt."' WHERE `userid` = '".$email."'") or die("Cannot connect to database!");
}



?>
