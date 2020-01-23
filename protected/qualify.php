<?php
include '../config.php';
$que = mysqli_query($con,"SELECT email FROM updates ORDER BY score DESC LIMIT 10");  //TOP 10
$res=mysqli_fetch_array($que);
$qualifiers=array();


foreach ($res as $key => $value)
{
array_push($qualifiers,$value);    // ARRAY CONTAINING NAMES OF QUALIFIERS FOR LEVEL2
}

unset($qualifiers[0]);          //By default, array fetched has same value in 0th index as in first index

 ?>
