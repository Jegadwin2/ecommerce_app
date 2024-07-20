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
        ?>
        <main class="full-width">
            <?php include_once("partials/_top.php") ?>

            <div class="date">
                <input type="date">
            </div>

            <!-- Recent Orders -->
            <div class="recent-orders">
                <h2>All Expenses</h2>
                <span id="top-buttons">
                    <button>copy</button>
                    <button>csv</button>
                    <button>excel</button>
                    <button>print</button>
                </span>
                <div class="tableoverflow">
                    <table id="datatableid" class="expensestable" id="expensestable">
                        <thead>
                            <tr>
                                <?php
                                    if (isset($_GET['error'])) {
                                        echo "<div class='alert alert-danger'>
                                                <span class='glyphicon glyphicon-info-sign'></span>  &nbsp; <p></p><b>Expense Not Saved</b><p></p>
                                            </div>";
                                    }
                                    if (isset($_GET['success'])) {
                                        echo "<div class='alert alert-success'>
                                                <span class='glyphicon glyphicon-info-sign'><p></p></span> &nbsp; <p></p><b>Expense Successfully Added !</b><p></p>
                                            </div>";
                                    }
                                ?>                                
                                <div class="response"></div>
                                <hr></hr>
                            </tr>
                            <tr>
                                <th>S/N</th>
                                <th>Expense</th>
                                <th>Description</th> <!-- salary,purchase, others? - say-->
                                <th>Vetted By</th>
                                <th>Date</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody class="expensestable">

                        </tbody>
                        
                    </table>
                </div>
            
                <a href="#" id="add_expense">Add Expense</a>

            </div>

        </main>
    </div>
    <div id="mainContent">
        <div id="box">
            <div class="boxes bx2" id="boxes">
                <h2 class="expense">Enter An Expense</h2>
                <form action="" id="expenseform" class="form">
                    <input class="first" type="text" disabled name="exp_code" id="exp_code" value="<?php echo $checksum ?>">
                    <input class="first" type="text" name="expense" id="expense" placeholder="Enter Amount">
                    <input class="first" type="text" name="description" id="description" placeholder="Description">
                    <select class="form-control" id="expense_note" name="expense_note" required>
                        <option selected disabled>Select Vetter</option>
                    
                    </select>
                    <input type="datetime-local" class="first" name="date" id="date">
                    <input type="submit" class="first login" value="Submit">
                </form>
            </div>
        </div>
    </div>
    <script src='js/unscript.js'></script>
    <?php include_once('partials/_footer.php'); ?>
