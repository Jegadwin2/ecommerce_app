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
    <link rel='stylesheet' href='css/styled.css'>   
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
    <div style="display:none" id="business_type"><?php echo $business_type; ?></div>
    <div style="display:none" id="pagetheme"><?php echo $page_theme; ?></div>
    <div style="display:none" id="page"><?php echo $page; ?></div>
    
    <div class="container">
        <?php 
            if($business_type == "Trade"){
                include_once "partials/_asideone.php";
            } else {
                include_once "sidebars/pos_sidebar.php";
            };
        ?>        <main>
            <h1>Dashboard</h1>

            <div class="date">
                <input type="date">
            </div>

            <!-- Profile info -->
            <div class="recent-orders">
                <h2>Profile Details</h2>
                <table class="table table-responsive table-bordered" id="profiletable">
                                            
                    <tbody>
                        <tr>
                            <td><b>First Name</b></td>
                            <td id="getFirstname" style="width:70%;"><?php echo $Firstname; ?></td>
                        </tr>
                        <tr>
                            <td><b>Last Name</b></td>
                            <td id="getLastname" style="width:70%;"><?php echo $Lastname; ?></td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td id="getEmail" style="width:70%;"><?php echo $Email; ?></td>
                        </tr>
                        <tr>
                            <td><b>Contact</b></td>
                            <td id="getContact" style="width:70%;"><?php echo $Contact; ?></td>
                        </tr>
                        <tr>
                            <td><b>Address</b></td>
                            <td id="getEmpAddress" style="width:70%;"><?php echo $Address; ?></td>
                        </tr>
                        <tr>
                            <td><b>Role</b></td>
                            <td id="getRole" style="width:70%;"><?php echo $staff_utype; ?></td>
                        </tr>
                        <tr>
                            <td><b>Hired Date</b></td>
                            <td id="getHiredDate" style="width:70%;"><?php echo $hired_date; ?></td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Edit Profile</a>

            </div>

        </main>
    </div>
    <script src='js/script.js'></script>
    <?php include_once('partials/_footer.php'); ?>