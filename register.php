<?php include_once("code-generator.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/register.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>

    <div class="wrapper">
        <div class="btn-area">
            <label for="chkBox">Register</label>
        </div>
    </div>

    <input type="checkbox" name="" id="chkBox">
    <div class="main_content">
        <form id="registration" role="form">
            <div class="box">
                <div class="boxes bx2">
                    <h3>Inventory Management System Registration</h3>
                    <div class="login-form">
                        <input class="first" type="text" name="firstname" id="firstname" placeholder="Firstname">
                        <input class="first" type="text" name="lastname" id="lastname" placeholder="Lastname">
                        <input class="first" type="text" name="email" id="email" placeholder="Enter Your Email">
                        <input class="first" type="password" name="" id="password" placeholder="Enter Your Password">
                        <fieldset id="choose_bus_type" name="choose_bus_type">
                            <legend><b>Choose Business Type</b></legend>
                            <div id="radio-bustype">
                                <input type="radio" id="trade" name="business_type" value="Trade">
                                <label for="trade">Trade</label><br>
                                <input type="radio" id="pos" name="business_type" value="POS">
                                <label for="pos">POS(Point of Sale)</label><br>
                            </div>
                        </fieldset>
                        <div id="alduser">Already a user? <a href="login.php">Login</a></div>
                    </div>
                </div>
                <div class="boxes bx1">
                    <h3>Enter Company(Business) Details</h3>
                    <div class="login-form">
                        <input class="first" type="text" name="company_name" id="company_name" placeholder="Enter Company Name">
                        <input class="first" type="text" name="phone" id="phone" placeholder="Enter Phone Number">
                        <input class="first" type="text" name="address" id="address" placeholder="Enter Company Address">
                        <select class="form-control" id="currency" name="currency" required>
                            <option selected disabled>Select Currency</option>
                            <option value="Dollar">Dollar</option>
                            <option value="Naira">Naira</option>
                        </select>
                        <textarea rows="3" id="company_desc" class="second form-control" placeholder="Company Desc(About Business/Company)"></textarea>
                        <input class="second" type="text" name="vat" id="vat" placeholder="VAT?">
                        <input type="submit" class="second register_details" value="Register Details" id="register_company_details">
                        <div style="font-size: 12px; margin-top: 15px;">Fill all personal and company details to <span style="color: skyblue;">register*</span></div>
                        <div id="client_id"><?php echo $client_id; ?></div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <script defer src="./js/app.js"></script>
    <script defer src="./js/ui.js"></script>
    <script type="module" src="./js/login.js"></script>
</body>
</html>