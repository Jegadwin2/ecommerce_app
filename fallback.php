<?php
    include('config/config.php');
    if (isset($_GET['delete'])) {
        $id = intval($_GET['delete']);
        $adn = "DELETE FROM  rpos_products  WHERE  prod_id = ?";
        $stmt = $mysqli->prepare($adn);
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $stmt->close();
        if ($stmt) {
            $success = "Deleted" && header("refresh:1; url=products.php");
        } else {
            $err = "Try Again Later";
        }
    }
?>
<div class="main-content">
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div class="container-fluid">
            <!-- Brand -->
            <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="dashboard.php"><?php echo $staff_utype; ?> Dashboard</a>
            <!-- Form -->
        
            <!-- User -->
            <ul class="navbar-nav align-items-center d-none d-md-flex"> 
                <li class="nav-item dropdown">
                    <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="media align-items-center">
                            <span class="avatar avatar-sm rounded-circle">
                                <img alt="Image placeholder" src="images/hello.jpg">
                            </span>
                            <div class="media-body ml-2 d-none d-lg-block">
                                <span class="mb-0 text-sm  font-weight-bold"><?php echo $Firstname; ?></span>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="change_profile.php" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>My profile</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="logout.php" class="dropdown-item">
                            <i class="ni ni-user-run"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    <div style="background-image: url(assets/img/theme/restro00.jpg); background-size: cover;" class="header  pb-8 pt-5 pt-md-8">
     <span class="mask bg-gradient-dark opacity-8"></span>
        <div class="container-fluid">
            <div class="header-body">

            </div>
        </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--8">
        <!-- Table -->
        <div class="row">
            <div class="col">
                <div class="card shadow">
                    <div class="card-header border-0">
                        <h1>IB LUXURY FALLBACK PAGE</h1>
                        <h3>It seems you can't find what you're looking for?</h3>
                        <a href="homepage.php?dashboard" class="btn btn-outline-success">
                            <i class="fas fa-home"></i>
                            <strong>Go to </strong><i>Homepage</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="py-5">
         <div class="container">
            <div class="row align-items-center justify-content-xl-between">
              <div class="col-xl-6">
                <div class="copyright text-center text-xl-left text-muted">
                &copy; 2020 - <?php echo date('Y'); ?> -IB LUXURY APARTMENTS AND SUITES
                </div>
              </div>
              <div class="col-xl-6">
                <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                  <li class="nav-item">
                    <a href="" class="nav-link" target="_blank">Restaurant POS</a>
                  </li>
                </ul>
              </div>
            </div>
         </div>
    </footer>
</div>

    
</div>

