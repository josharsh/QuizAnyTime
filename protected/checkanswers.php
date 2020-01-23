<?php
session_start();
include '../config.php';

$email=$_SESSION['email'];
$level=$_SESSION['level'];
$count=0;
$score=0;

$answerArray=mysqli_query($con,"SELECT `1`, `2`, `3`, `4`, `5` FROM `updates`
             WHERE `email` = '".$email."' ") or die("Could not execute query");
$userAns=mysqli_fetch_array($answerArray);



$que=mysqli_query($con,"SELECT `1`, `2`, `3`, `4`, `5` FROM `answers` ") or die("Could not execute query");
$correctAns=mysqli_fetch_array($que);

$cor=array();
$user=array();

foreach ($correctAns as $key => $value) {

  array_push($cor,$value);
  }
  // code...
  foreach ($userAns as $key => $value) {

  array_push($user,$value);

    }


for ($i=1; $i< 6 ; $i++)
{
 // code..
if($cor[$i]==$user[$i])
{
  $count+=1;
  $score+=30;
}
}


    $_SESSION['score']=$score;
    $_SESSION['count']=$count;


$res=mysqli_query($con,"UPDATE `updates` SET `score`= ".$score." WHERE `email` = '".$email."'") or die("could not update score");
$res=mysqli_query($con,"UPDATE `updates` SET `count`= ".$count." WHERE `email` = '".$email."'") or die("could not update count");
	header("Location: results.php");


?>
