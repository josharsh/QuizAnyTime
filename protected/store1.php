<?php
session_start();
include '../config.php';
$level=$_SESSION['level'];
$update=$level+1;
$ans="";
$ans=trim($_POST['answer']);
$ans=strtoupper($ans);

$email=$_SESSION['email'];

echo $level;
echo $ans;
echo $email;

//answer update
$q = mysqli_query($con,"UPDATE `updates` SET `".$level."`= '".$ans."'
WHERE `email` = '".$email."'") or die("Cannot connect to database!");

//user level update
$p=mysqli_query($con,"UPDATE `users` SET `current_level`='".$update."'
WHERE `email` = '".$email."'") or die("Cannot connect to database!");

$newlevel=$level+1;
header("Location: level$newlevel.php");
?>
