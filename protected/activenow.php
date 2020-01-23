
<?php
session_start();
include("../config.php");
include("home.php");
$connection="ON";
$que222=mysqli_query($con,"SELECT * FROM plus_login where status='".$connection."';");
$value222=mysqli_fetch_array($que222);
$email=$value222['userid'];
					$user_id=$value222['id'];
					$ip=$value222['ip'];
					$tm=$value222['tm'];
					$status=$value222['status'];
				    

?><section id="main-content"  style="min-height: 584px;">
<div class="main-box clearfix">
									<div class="table-responsive">
										<table class="table user-list">
											<thead>
												<tr>
													<th><span>Login-From</span></th>
													<th><span>User-ID</span></th>
													<th class="text-center"><span>Status</span></th>
													<th><span>Email</span></th>
													<th>&nbsp;</th>
												</tr>
											</thead>
											<tbody>
											
											 <?php
           $i = 0;
           while ($row=mysqli_fetch_array($que222)) {
               $class = ($i == 0) ? "" : "alt";
               echo "<tr class=\"".$class."\">";
               echo "<td >"; echo $row['tm'];echo "</td>";
               echo "<td >"; echo $row['id'];echo "</td>";
			   echo "<td class='text-center'><span class='label label-success'>"; echo $row['status'];echo "</span></td>";
			   echo "<td>"; echo $row['userid'];echo "</td>";
               echo "</tr>";
               $i = ($i==0) ? 1:0;
           }

        ?>
											</tbody>
										</table>
									</div>
									
								</div>
           </section>



    <script src="js/1.11.2.jquery.min.js"></script>
    <script src="js/bootstrap1.min.js"></script>
    <script src="js/hoe.js"></script>



