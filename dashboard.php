<?php
session_start();
//to check if the user is loggedin
//to get the level from where user logged out





if (isset($_SESSION['email'])) {

  header('location:./protected/getstarted.php');

} else {
    header('location:.logout.php');
}
?>
