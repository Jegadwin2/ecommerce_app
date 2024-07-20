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
    <link rel="stylesheet" href="css/add_product.css">
   
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
        <main>
            <?php include_once ("partials/_top.php"); ?>

            <div class="date">
                <input type="date">
            </div>

            <!-- Recent Orders -->
            <div class="recent-orders">
                
                <form id="add_product" class="add_product" role="form" enctype="multipart/form-data">
                    <h2>Add Product</h2>
                    <table id="datatableid">
                        <tr>
                            <?php
                                if (isset($_GET['error'])) {
                                    echo "<div class='alert alert-danger'>
                                            <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Product Not Saved </b><p></p>
                                        </div>";
                                }
                                if (isset($_GET['success'])) {
                                    echo "<div class='alert alert-success'>
                                            <span class='glyphicon glyphicon-info-sign'></span> &nbsp; <p></p><b>Product Successfully Added ! </b><p></p>
                                        </div>";
                                }
                            ?>                                
                            <div class="response"></div>
                            <hr></hr>
                        </tr>

                        <tr>
                            <td>
                                <label>Product Code</label>
                                <input type="text" disabled id="prod_code" value="<?php echo $alpha; ?>-<?php echo $beta; ?>" class="form-control" value="">
                            </td>
                            <td>
                                <label>Product Name</label>
                                <input type="text" id="prod_name" class="form-control">
                                <input type="hidden" id="prod_id" value="<?php echo $prod_id; ?>" class="form-control">
                            </td>
                            <td>
                                <label>Product Image</label>
                                <input type="file" id="prod_img" class="btn btn-outline-success form-control" value="">
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>
                                <label>Category</label>
                                <select class="form-control" id="category" name="category" required>
                                    <option selected disabled>Select Category</option>
                                    
                                </select>
                            </td>
                            <td>
                                <label>Product Price</label>
                                <input type="number" id="prod_price" class="form-control" value="">
                            </td>
                            <td>
                                <label>Quantity At Hand</label>
                                <input type="number" class="form-control" placeholder="QtyAtHand" id="qtyathand" name="qtyathand">
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>                                  
                            <td>
                                <label>Warehouse</label>
                                <select class="form-control" id="warehouse" name="warehouse" required>
                                    <option selected disabled>Select Warehouse</option>
                                    
                                </select>

                            </td>
                            <td id="supplier_chkbox">
                                <label>Supplier(s)</label>
                                <select class="form-control" id="supplier" name="supplier" required>
                                    <option selected disabled>Select Supplier</option>
                                    
                                </select>
                                
                            </td> 
                            <td>
                                <label>Date Stock In</label>
                                <input type="date" id="date_of_stock" class="form-control" value="">
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>
                                <label>Availability</label>
                                <select class="form-control" id="availability" name="availability" required>
                                    <option selected disabled>Available?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </td>
                            <td >
                                <label>Product Package</label>
                                <select class="form-control" id="prod_package" name="prod_package" required>
                                    <option selected value="Wholesale">Wholesale(Carton/Set)</option>
                                    <option value="Retail">Retail</option>                                    
                                </select> 
                            </td>
                            <td>
                                <input type="submit" value="Add Product" class="btn btn-success" id="submitprod">
                            </td>
                        </tr>

                    </table>
                </form> 
                <!-- <div class="two-btns">
                    <button type="reset" class="btn btn-lg btn-danger">Reset</button>
                    <button type="submit" name = "add_employee" class="btn btn-lg btn-success submit">Submit</button>
                </div> -->
            </div>
        </main>
    </div>
    <script src='js/script.js'></script>
    <?php include_once('partials/_footer.php'); ?>
