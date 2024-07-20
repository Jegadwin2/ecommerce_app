<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
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
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel='stylesheet' href='css/order.css'>

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
    <div style="display:none" id="prod_ext"><?php echo $prod_ext; ?></div>
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
                <?php
                    if (isset($_GET['error'])) {
                        echo "<div class='alert-danger'>
                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Order Not Saved</b><p></p>
                            </div>";
                    }
                    if (isset($_GET['success'])) {
                        echo "<div class='alert-success'>
                                <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Order Successfully Added !</b><p></p>
                            </div>";
                    }
                ?>                                
                <div class="response"></div>
                <hr></hr>
                              
                <form id="create_order" role="form" class="form"  enctype="multipart/form-data">

                    <div class="form_divs">
                        <div class="first_form">
                            <h2>Create order</h2>
                            <table id="datatableid" class="create_order">
                                <tr>
                                    <td>
                                        <label for="customer">Cust.</label>
                                        <select class="form-control" id="customer" name="customer" required data-error="Select Staff Type">
                                            <option selected disabled>Select Customer</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Walk-in Customer">Walk-in Customer</option>                                                      
                                        </select>
                                    </td>
                            
                                    <td>
                                        <label for="order_code">Order No</label>
                                        <input type="text" class="form-control" disabled name="order_code" id="order_code" required data-error="Enter Order Code" value="<?php echo $order_id ?>">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>                

                                <tr>
                                    <td>
                                        <label for="payment_type">PayType</label>
                                        <select class="form-control" id="payment_type" name="payment_type" required>
                                            <option selected disabled>Select Payment Type</option>
                                            <option value="Cash">Cash</option>
                                            <option value="Cheque">Cheque</option>
                                            <option value="Transfer">Transfer</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label>PayStatus</label>
                                            <select class="form-control" id="payment_status" name="payment_status" required>
                                            <option selected disabled>Select Payment Status</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Due">Due</option>
                                            <option value="Refunded">Refunded</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                                    
                                <tr>
                                    <td>
                                        <label>Order Date</label>
                                        <input type="date" class="form-control" id="issued_date" name="issued_date" required>
                                    </td>
                                    <td>
                                        <label>Status</label>
                                        <select class="form-control" id="status" required data-error="Select Status">
                                            <option selected disabled>Select Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Recalled">Recalled</option>
                                            <option value="In_Progress">In_Progress</option>
                                            <option value="Delivered">Delivered</option>              
                                        </select>
                                    </td>
                                </tr>

                            </table>
                        </div>

                        <div class="second_form">
                            <h2>Select Product</h2>
                            <div class="tableoverflow">
                                <table id="datatableid" class="make_order">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Check</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="make_order">

                                    </tbody>                    
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="two-btns">
                        <button type="reset" class="btn btn-lg btn-danger">Reset</button>
                        <button type="submit" name="create_order" class="btn btn-lg btn-success submit">Submit</button>
                    </div>
                    
                </form>                
                
            </div>
                
        </main>
    </div>

    <div id="mainContent" role='dialog'>
        <div id="box">
            <div class="boxes bx2" id="boxes">
                <h2 class='enter_cust'>Enter Order Details</h2>
                <form class="form" id="confirmOrderForm">
                    <div class="listorders">

                    </div>
                    <div style="display: flex;">
                        <div class="" style="display: flex; margin-top: 20px; margin-bottom: 20px;">
                            <Label for="total"><h3>Total : <h3></Label>      
                            <input type="number" class="first" id="total" style="font-weight: bold;"></input>
                        </div>
                        
                        <div class="col-md-6" style="display: flex; margin-top: 30px;  margin-left: 60px; margin-bottom: 20px;">
                            <label>Balance (₦)</label>
                            <input type="number"  id="balance" value=0 class="first" >
                        </div>
                        <input type="hidden" id="totDisc" name="totDisc" class="first">
                    </div>
                    
                    <input type="submit" class="first login" value="Submit">
                </form>
            </div>
        </div>
    </div>

    <script src='js/script.js'></script>
    <?php include_once("partials/_footer.php") ?>
