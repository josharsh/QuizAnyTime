<?php
session_start();
include("config.php");
$st="OFF";
$email=$_SESSION['email'];
$logout = mysqli_query($con,"UPDATE `plus_login` SET `status`= '".$st."' WHERE `userid` = '".$email."'") or die("Cannot connect to database!");
unset($_SESSION['email']);
if (isset($_SESSION['name'])) {
    unset($_SESSION['name']);
}
session_destroy();
header('location:./');
?>
