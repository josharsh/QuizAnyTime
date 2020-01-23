
<html lang="en" class="gr__localhost" style="overflow: auto;"><!-- Mirrored from gohooey.com/demo/sidebar/bootstrapnavigation/hoedemo.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 25 Jun 2018 01:35:06 GMT --><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TECHNO-GEEK</title>
    <!-- Bootstrap -->
    <link href="css/font-awesome1.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
    <link href="http://fonts.googleapis.com/css?family=Lato:100italic,100,300italic,300,400italic,400,700italic,700,900italic,900" rel="stylesheet" type="text/css">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link href="css/hoe.css" rel="stylesheet">


</head>

<body hoe-navigation-type="vertical-compact" hoe-nav-placement="left" theme-layout="wide-layout" theme-bg="bg1" data-gr-c-s-loaded="true" style="user-select: auto;">
    <div id="hoeapp-wrapper" class="hoe-hide-lpanel" hoe-device-type="tablet">
        <header id="hoe-header" hoe-lpanel-effect="shrink" class="hoe-minimized-lpanel">
            <div class="hoe-left-header">

                <span class="hoe-sidebar-toggle"><a href="#"></a></span>
            </div>

            <div class="hoe-right-header" hoe-position-type="relative">
                <span class="hoe-sidebar-toggle"><a href="#">
                <img src="images/menu.gif" height="40" width="40"></a></span>


                <ul class="right-navbar">
					<li class="dropdown hoe-rheader-submenu hoe-header-profile">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

							<span style="color:white">
                <img class="img-circle " src="images/user.jpeg">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_SESSION['name']; ?>	</span></a>
						<ul class="dropdown-menu ">
							<li><a href="myprofile.php"><i class="fa fa-user"></i><b>My Profile<B></a></li>


							<li><a href="../logout.php">&nbsp;&nbsp;<i class="fa fa-power-off"></i>&nbsp;&nbsp;&nbsp;&nbsp;<b>Logout</b></a></li>
						</ul>
					</li>
					<li>
						<a href="../logout.php">
              <img src="images/logout.png" height="40" width="30" style="padding-top:10px">
            </a>
					</li>
				</ul>

            </div>
        </header>
        <div id="hoeapp-container" hoe-color-type="lpanel-bg2" hoe-lpanel-effect="shrink" class="hoe-minimized-lpanel">
            <aside id="hoe-left-panel" hoe-position-type="absolute">
                <div class="profile-box">
                    <div class="media">
                        <a class="pull-left" href="user-profile.html">
                            <img class="img-circle" src="images/user.jpeg">
                        </a>
                        <div class="media-body">
                            <h5 class="media-heading">Hey <?php echo $_SESSION['name'] ?></h5>
                            <small>USER-ID: <?php echo $_SESSION['user_id'] ?></small>
                        </div>
                    </div>
                </div>
                <ul class="nav panel-list">

                    <li class="active">
                        <a href="getstarted.php">
							<i class="fa fa-files-o"></i>
                            <span class="menu-text">Dashboard</span>
                            <span class="selected"></span>
                        </a>
                    </li>

                    <li class="hoe-has-menu">
                        <a href="contact.php">
                            <i class="fa fa-address-book-o"></i>
                            <span class="menu-text">Contact Us</span>
                            <span class="selected"></span>
                        </a>

                    </li>


                    <a href="javascript:void(0)">



                    </a><li class="hoe-has-menu"><a href="javascript:void(0)">
                            <i class="fa fa-sitemap"></i>
                            <span class="menu-text">Profile</span>
                            <span class="selected"></span>
                        </a>
                        <ul class="hoe-sub-menu" style="display: none;">
							<li>
                                <a href="myprofile.php">
									<span class="menu-text">My Profile</span>
									<span class="selected"></span>
                                </a>
                            </li>
							<li>
                                <a href="../logout.php">
									<span class="menu-text">Logout</span>
									<span class="selected"></span>
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </aside>
