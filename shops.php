<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" type="image/png" href="images/newlogo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Ecommerce App For Online and Offline Trade Services">
    <title>Ecommerce Management System </title>
    <!-- <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/icons/ibluxury_32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/icons/ibluxury_16x16.png"> -->
    <link rel="manifest" href="manifest.json"/>
    <link href="images/icon1922.png" rel="apple-touch-icon" />
    <link content="#aa7700" rel="apple-mobile-web-app-status-bar"> 
    <link rel="mask-icon" href="./assets/img/icons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-icons@1.13.12/iconfont/material-icons.min.css">
    <link rel="stylesheet" href="css/pages.css">
   
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/dataTables.bootstrap5min.css">
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.dataTAbles.net/1.13.5/js/dataTables.bootstrap.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#datatableid').DataTable();
        });
    </script> -->
    <script src="./ajax.js"></script>
</head>
<body>
    
    <div style="display:none" id="business_id"><?php echo $user_id; ?></div>
    <div style="display:none" id="pagetheme"><?php echo $page_theme; ?></div>
    <div style="display:none" id="business_type"><?php echo $business_type; ?></div>
    <div style="display:none" id="page"><?php echo $page; ?></div>

    <div class="container">
        <?php 
            if($business_type == "Trade"){
                include_once "partials/_asideone.php";
            } else {
                include_once "sidebars/pos_sidebar.php";
            };
        ?>        <main class="full-width">
            <?php include_once("partials/_top.php") ?>

            <div class="date">
                <input type="date">
            </div>

            <!-- Recent Orders -->
            <div class="recent-orders places">
                <h2>Shops</h2>
                <div class="container_table">
                    <table id="datatableid" class="shoptable">
                        <thead>
                            <tr>
                                <?php
                                    if (isset($_GET['error'])) {
                                        echo "<div class='alert alert-danger'>
                                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Shop Not Saved</b><p></p>
                                            </div>";
                                    }
                                    if (isset($_GET['success'])) {
                                        echo "<div class='alert alert-success'>
                                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Shop Successfully Added !</b><p></p>
                                            </div>";
                                    }
                                ?>                                
                                <div class="response"></div>
                                <hr></hr>
                            </tr>
                            <tr>
                                <th>#</th>
                                <th>Address</th>
                                <th>Product(s)</th>
                                <th>Category</th>
                                <th>Manager(s)</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        
                    </table>
                </div>
            
                <a href="#" id="add_shop">Add Shop</a>
            </div>
        </main>
    </div>

    <div id="mainContent" class="shop">
        <div id="box">
            <div class="boxes bx2" id="boxes">
                <h2 class="expense">Enter Shop Details</h2>
                <form action="" class="add_shop form" id="form">
                    <input class="first" type="text" disabled name="shp_code" id="shp_code" value="<?php echo $beta ?>">
                    <input class="first" type="text" name="address" id="address" placeholder="Enter Shop Address">
                    <select class="form-control" id="manager" name="manager" required>
                        <option selected disabled>Select Manager</option>
                        
                    </select>

                    <select class="form-control" id="prods_avail" name="prods_avail" required>
                        <option selected disabled>Select Product</option>
                        <option value="Acitve">Car</option>
                        <option value="Inactive">Aeroplane</option>
                    </select>

                    <!-- <fieldset id="choose_products">
                        <legend><b>Choose Products</b></legend>
                        <div id="radio-bustype">
                            <span>
                                <input type="checkbox" id="car" name="car" value="Car">
                                <label for="car">Car</label><br>
                            </span>
                            <span>
                                <input type="checkbox" id="aeroplane" name="aeroplane" value="Aeroplane">
                                <label for="aeroplane">Aeroplane</label><br>
                            </span>
                        </div>
                    </fieldset> -->
                    <!-- <span id="chkbox-prods">
                        <legend>Choose Products Available</legend>
                        <label for="products">Products</label>
                    </span> -->
                    <select class="form-control" id="category" name="category" required>
                        <option selected disabled>Select Category</option>
                    
                    </select>
                    <select class="form-control" id="status" name="status" required>
                        <option selected disabled>Select Status</option>
                        <option value="Acitve">Acitve</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <input class="dateshrink" type="datetime-local" name="date" id="date">
                    <input type="submit" class="first login" value="Submit">
                </form>            
            </div>
        </div>
    </div>

    <script src='js/unscript.js'></script>
    <?php include_once('partials/_footer.php');?>