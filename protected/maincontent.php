<?php
include '../config.php';
$level=1;
$email=$_SESSION['email'];
//TO FETCH THE CURRENT LEVEL, IN CASE THE USER LOGS OUT IN BETWEEN
$que=mysqli_query($con,"SELECT `current_level` FROM `users` WHERE `email`='".$email."'");
$value=mysqli_fetch_array($que);
$module=$value['current_level'];
$clevel="level".$module.".php";

 ?>


<section id="main-content" style="min-height: 584px;">
            <div class="content-title">
                  <b><h1 style="font-family: Palatino Linotype;color:gray;font-size:30px;" class="main-title"> Level <?php echo $level ?></h1></b>
                  <hr>

                  <hr>
                  <h2 style="font-family: Palatino Linotype;color:gray;font-size:30px;" class="main-title"> Find the relation
                  between the pictures and guess the answer ! </h2>
                  <br>
                  <div class="rules" style="font-family: Palatino Linotype;color:gray;font-size:20px;">
                    <ul>
                      <li>Level 1 will have 50 sublevels.</li>
                      <li>This is a time-bound level. You have a fixed duration of time to complete this level.</li>
                      <li>You are given 4 pictures and You need to make only one answer from them</li>
					  <li>In case you logout in between, you can resume from where you left.</li>
					  <li></li>
                    </ul>

                  </div>

                  <br><br><br>







                  <a href=<?php echo $clevel ?>>
                    <button class="button button1"> Get Started </button>
                  </a>







                </div>

            </section>
