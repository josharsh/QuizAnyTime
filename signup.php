<?php
include 'config.php';
	$u="";$p="";$e="";$b="";$y="";$c="";$m="";
$u=trim($_POST['name']);
$p=trim($_POST['pwd']);
$e=trim($_POST['email']);

$c=trim($_POST['college']);
$m=trim($_POST['phone']);

$f=false;
  $errMsg1=$errMsg2=$errMsg3=$errMsg4=$errMsg5=$errMsg6=$errMsg7=$errMsg8="";
if (!preg_match("/^[a-zA-Z ]*$/",$u))
{
	$errMsg1= "Only letters and white space allowed in name.";
    $f=	true;
}
if( strlen($p) < 6 )
	{$errMsg2= "Password must be atleast of 6 characters.";
	$f=true;
	}

// Password must be strong
//if(!preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{6,12}$/', $p))
	//{$errMsg2 = "Password must be at least 6 characters and must contain at least one lower case letter, one upper case letter and one digit";$f=true;}


//check for valid email


if (!filter_var($e, FILTER_VALIDATE_EMAIL))
 {$emailMsg = "Please enter correct email.";
 $f=true;
	}

//check if the number field is numeric
  if(is_numeric($m) == false)
  {$errMsg4=  " Please enter only numeric values as contact number.";
        $f=true;
	}


  if(strlen($m)<10)
  {$errMsg6=  "Contact Number should be of ten digits.";
        $f=true;
	}


if (!preg_match("/^[a-zA-Z ]*$/",$c))
{
	$errMsg8= "Only letters and white space allowed in college name.";
    $f=	true;
}
//Test if it is a shared client
if (!empty($_SERVER['HTTP_CLIENT_IP']))
{
  $ip=$_SERVER['HTTP_CLIENT_IP'];
//Is it a proxy address
}
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
{
  $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
}
else
{
  $ip=$_SERVER['REMOTE_ADDR'];
}
//The value of $ip at this point would look something like: "192.0.34.166"
$ip = ip2long($ip);
//The $ip would now look something like: 1073732954


if($f==true)
{
	echo "<script>alert('$errMsg1$errMsg2$errMsg3$errMsg4$errMsg5$errMsg6$errMsg7$errMsg8');window.location='form.php';</script>";
}
else{

	$q="insert into signup(name,password, email,college, phone,ip) values( '$u','$p','$e','$c','$m','$ip')";
	$m=mysqli_query($con,"INSERT INTO users (email) values ('$e')");
	$m=mysqli_query($con,"INSERT INTO updates (email) values ('$e')");
$res=mysqli_query($con,$q);
    if(!($res && $m))
		{
    echo mysqli_error($con)."Error";
		}
		else{
			echo "<script>alert('You are successfully registered. Please login to continue. ');window.location ='form.php';</script>";
		}

	}
?>
