<?php

function imagegen()
{
  $level= $_SESSION['level'];
$images=array();
$img1="../images/levels/$level/1.jpg";
$img2="../images/levels/$level/2.jpg";
$img3="../images/levels/$level/3.jpg";
$img4="../images/levels/$level/4.jpg";
$images=array($img1,$img2,$img3,$img4);
return $images;
}
?>
