<!DOCTYPE html>
<html lang="en" >

<head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <meta charset="UTF-8">
  <title>Login/Signup</title>
  <i class="fa fa-close"></i>
<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="css/styleform.css">


</head>

<body >

  <p class="tip" ></p>
  <br><br><br>
<div class="cont"> <a href="index.php"><i style="font-size:24px" class="fa">&#xf00d;</i></a> ​


  <div class="form sign-in" style="padding: 50px 30px 0;">
    <form  action="logincheck.php" method="post" autocomplete="on">
    <h2>SIGN-IN</h2><br>
    <label>
      <span>Email</span>
      <input type="email" name="username" required="required"  />
    </label>
    <label>
      <span>Password</span>
      <input name="password" required="required" type="password" />
    </label>

    <br>
    <input type="submit" name="submit" value="Sign-In" class="submit">
    <!--<button type="button" class="submit">Sign In</button>-->
</form>
  </div>
  <div class="sub-cont"> <p align="right"><a href="index.php"><i style="font-size:24px" class="fa">&#xf00d;</i></a></p>
    <div class="img">
      <div class="img__text m--up">
        <h2>GET STARTED !</h2>
        <p>Register here!</p>
      </div>
      <div class="img__text m--in">
        <h2>Already registered?</h2>
        <p>Click here to login!</p>
      </div>
      <div class="img__btn">
        <span class="m--up">Sign Up</span>
        <span class="m--in">Sign In</span>
      </div>
    </div>
    <div class="form sign-up" style="padding: 0px 0px 0;">
      <form action="signup.php" method="post" name="form" onsubmit="return validateform()"><br>
      <h2>SIGN-UP</h2>
      <label>
        <span>Name</span>
        <input type="text" name="name" id="name" required=" " />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" required=" " />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="pwd" required=" " />
      </label>
      <label>
        <span>Contact No.</span>
        <input type="text" name="phone" required=" " />
      </label>


      <label>
        <span>College</span>
        <input type="text" name ="college" required=" " />
      </label>
      <br>
        <input type="submit" name="submit" value="Sign-Up" class="submit" >
    <!--  <button type="button" class="submit" >Sign Up</button>-->
</form>
  </div>
</div>





    <script  src="js/indexform.js"></script>
<script src="js/validate.js"></script>




</div>
</body>

</html>
