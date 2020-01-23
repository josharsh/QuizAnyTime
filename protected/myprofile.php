
<?php
session_start();
include("home.php");?>
<link href="css/b2.min.css" rel="stylesheet" media="screen">
<link href="css/font-awesome.min.css" rel="stylesheet" media="screen">
           


<style>.user-row {
    margin-bottom: 14px;
}

.user-row:last-child {
    margin-bottom: 0;
}
.container{
	height:100%;
	width:100%;
	background-image:url(images/bg3.png);


	
}
.dropdown-user {
    margin: 13px 0;
    padding: 5px;
   
	
}

.dropdown-user:hover {
    cursor: pointer;
}

.table-user-information > tbody > tr {
    border-top: 1px solid rgb(221, 221, 221);
}

.table-user-information > tbody > tr:first-child {
    border-top: 0;
}


.table-user-information > tbody > tr > td {
    border-top: 0;
.panel-info>.panel-heading {
    color: #fdfdfd;
    background-color: #e46464;
    border-color: #e53636;
}

.panel-info>.panel-heading {
    color: #d41616;
    background-color: #ef3737;
    border-color: #ef3d3d;
}	
}
.toppad
{margin-top:20px;
}
.backimage{background-image: url(images/bg3.png;)}
</style><div class="backimage"><section id="main-content"  style="min-height: 584px;">
            <!--<div class="content-title"><p align="right" class=" text-info"><?php echo date("d/m/Y");?></p></div>-->
<div class="container">
      <div class="row">
      <div class="col-md-5  toppad  pull-right col-md-offset-3 ">
<br>

      </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
   
   
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title"><?php echo $_SESSION['name']; ?></h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-3 col-lg-3 " align="center">  </div>
                
                <!--<div class="col-xs-10 col-sm-10 hidden-md hidden-lg"> <br>
                  <dl>
                    <dt>DEPARTMENT:</dt>
                    <dd>Administrator</dd>
                    <dt>HIRE DATE</dt>
                    <dd>11/12/2013</dd>
                    <dt>DATE OF BIRTH</dt>
                       <dd>11/12/2013</dd>
                    <dt>GENDER</dt>
                    <dd>Male</dd>
                  </dl>
                </div>-->
                <div class=" col-md-9 col-lg-9 "> 
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Email:</td>
                        <td><?php echo $_SESSION['email']; ?></td>
                      </tr>
                      <tr>
                        <td>User-id:</td>
                        <td><?php echo $_SESSION['user_id']; ?></td>
                      </tr>
                      <tr>
                        <td>Contact</td>
                        <td><?php echo $_SESSION['contact']; ?></td>
                      </tr>
                   
                         <tr>
                             
                        
                     
                        <td>College</td>
                        <td><?php echo $_SESSION['college']; ?>
                        </td></tr><tr>
						<td>Current Level:</td>
                        <td><?php echo $_SESSION['college']; ?>
                        </td></tr>
						<tr><td>Last Login:</td>
                        <td><?php echo $_SESSION['lastlogin'];?>
                        </td>
                           
                      </tr>
                     
                    </tbody>
                  </table>
                  
                  <a href="javascript:history.go(-1)" class="btn btn-primary" style="background-color:red;"
				  >Go Back</a> 
                  <!--<a href="#" class="btn btn-primary">Team Sales Performance</a>-->
                </div>
              </div>
            </div>
                <!-- <div class="panel-footer">
                        
                        <span class="pull-right">
                            
                        </span>
                    </div>-->
            
          </div>
        </div>
      </div>
    </div>
</section>
</div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/1.11.2.jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap1.min.js"></script>
    <script src="js/hoe.js"></script>



