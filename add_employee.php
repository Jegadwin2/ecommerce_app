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
    <link rel='stylesheet' href='css/add_employee.css'>   
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
    <div style="display:none" id="emp_ext"><?php echo $emp_ext; ?></div>
    <div style="display:none" id="pagetheme"><?php echo $page_theme; ?></div>
    <div style="display:none" id="page"><?php echo $page; ?></div>
    
    <div class="container">
        <?php 
            if($business_type == "Trade"){
                include_once "partials/_asideone.php";
            } else {
                include_once "sidebars/pos_sidebar.php";
            };
        ?>
        <main class="full-width">
            <?php include_once ("partials/_top.php"); ?>

            <div class="date">
                <input type="date">
            </div>

            <!-- Recent Orders -->
            <div class="recent-orders">
                <form id="add_employee" role="form" enctype="multipart/form-data">
                    <h2>Add Employee</h2>
                    <table id="datatableid form">
                        <tbody>
                            <tr>
                                <?php
                                    if (isset($_GET['error'])) {
                                        echo "<div class='alert alert-danger'>
                                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b> Staff Not Saved </b> <p></p>
                                            </div>";
                                    }
                                    if (isset($_GET['success'])) {
                                        echo "<div class='alert alert-success'>
                                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b> Staff Successfully Added ! </b> <p></p>
                                            </div>";
                                    }
                                ?>                                
                                <div class="response"></div>
                                <hr></hr>
                            </tr>

                            <tr>
                                <td>
                                    <label>Role</label>
                                    <select class="form-control" id="staff_type" name="staff_type" required data-error="Select Staff Type">
                                        <option selected disabled>Select Role</option>
                                        <option value="Staff">Staff</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    <label>Hired_Date</label>
                                    <input type="date" class="form-control" placeholder="0000-00-00" name="hired_date" id="hired_date" required data-error="Enter Hired_Date">
                                </td>
                                <td>
                                    <label>First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name" name="first_name" id="first_name" required data-error="Enter First Name">
                                </td>
                                <td>
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name" id="last_name" name="last_name">
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>
                                    <label>Username</label>
                                    <input type="text" class="form-control" placeholder="UserName" id="username" name="username">
                                </td>
                                <td>
                                    <label>Email</label>
                                    <input type="text" class="form-control" placeholder="email" id="email" name="email">
                                </td>
                                <td>
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password" id="password" name="password">
                                </td>
                                <td>
                                    <label>Gender</label>
                                    <select class="form-control" id="gender" name="gender" required data-error="Select Gender">
                                        <option selected disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>                                                    
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>
                                    <label>CodeNumber</label>
                                    <input type="text" id="emp_codeno" name="emp_codeno" readonly value="<?php echo $emp_id; ?>" class="form-control"> <!--  value = echo $empCode; -->
                                </td>
                                <td>
                                    <label>ID Card Type</label>
                                    <select class="form-control" id="id_card_id" name="id_card_type" required onchange="validId(this.value);">
                                        <option selected disabled>Select ID Card Type</option>
                                        <option value="National Identity Card">National ID Card</option>
                                        <option value="Driver's Licence">Driver's Licence</option>
                                        <option value="Voter ID Card">Voter ID Card</option>                                     
                                    </select>
                                </td> 
                                <td>
                                    <label>ID Card Number</label>
                                    <input type="text" class="form-control" placeholder="ID Card No" name="id_card_no" id="id_card_no" required>
                                </td>
                                <td>
                                    <label>Salary</label>
                                    <input type="number" class="form-control" placeholder="Salary" name="salary" id="salary" data-error="Enter Salary" required>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td colspan="2" class="resident">
                                    <label>Residential Address</label>
                                    <input type="text" class="form-control" placeholder="Residential Address" name="address" id="address" required>
                                </td>
                                <td>
                                    <label>Contact Number</label>
                                    <input type="text" class="form-control" id="contact" placeholder="Contact No" name="contact" required>
                                </td>
                                <td>
                                    <label>Employee Image</label>
                                    <input type="file" class="form-control file-upload-input" id="emp_img" accept="Image/*" required>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div class="two-btns">
                        <button type="reset" class="btn btn-lg btn-danger">Reset</button>
                        <button type="submit" class="btn btn-lg btn-success submit">Submit</button>
                    </div>
                </form> 
            </div>

        </main>
    </div>
    <script src='js/script.js'></script>
    <?php include_once("partials/_footer.php") ?>
                