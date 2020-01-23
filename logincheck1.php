<?php
session_start();
include 'config.php';
$email=$_POST['username'];
$pass=$_POST['password'];
$que=mysqli_query($con,"SELECT * FROM signup WHERE email='".$email."' AND password='".$pass."'") or die("Could not execute query");
$cou=mysqli_num_rows($que);
$value=mysqli_fetch_array($que);


					$name=$value['name'];
					$user_id=$value['userid'];
					$email=$value['email'];
					$contact=$value['phone'];
					$college=$value['college'];

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

	$login = mysqli_query($con,"UPDATE `users` SET `lastlogin`= CURRENT_TIMESTAMP() WHERE `email` = '".$email."'") or die("Cannot connect to database!");
	header("Location: dashboard.php");


}



?>
