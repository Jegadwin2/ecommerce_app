
<html>
    <head>
        <link rel="icon" type="image/png" href="images/newlogo.png">
        <link rel="manifest" href="manifest.json"/>
        <link rel="stylesheet" href="css/login.css"/>
        <title>Ecommerce App Login</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>
    
    
    <div class="container">
        <div class="result">
            <?php
            if (isset($_GET['empty'])){
                echo '<div class="alert alert-danger">No username or userId!</div>';
            } elseif(isset($_GET['emptyId'])) {
                echo '<div class="alert alert-danger">No Id!</div>';
            }
            ?>
        </div>
        <div class="wrapper">
            <div class="btn-area">
                <label for="chkBox">Login</label>
            </div>
        </div>

        <input type="checkbox" name="" id="chkBox">
        <div class="main_content">
            <div class="box">
                <div class="boxes bx1"></div>
                <div class="boxes bx2">
                    <h3>Inventory Management System Login</h3>
                    <div action="" class="form-signin">
                        <form class="login-form" id="email-login">
                            <input class="first" type="email" name="email" id="email" placeholder="Enter Your Email">
                            <input class="first" type="password" name="" id="password" placeholder="Enter Your Password">
                            <div class="remember_me">
                                <div id="check">
                                    <input type="checkbox" name=""/>
                                </div>
                                <div id="rem">Remember me</div>
                            </div>
                            <input type="submit" class="first login" value="Login">
                            <div id="login_phone_number_ques">Login With Phone Number</div>
                            <div>Not a user yet? <a href="register.php">Register</a></div>
                        </form>
                        <form class="login-form" id="phone-login">
                            <input type="text" class="first" name="phoneNumber" id="phoneNumber" placeholder="Input Your phone number">
                            <input type="submit" class="first login" value="Login">
                            <div id="login_email_ques">Login With Email</div>
                            <div>Not a user yet? <a href="register.php">Register</a></div>
                        </form>
                    </div>
                    <div class="close-box">
                        <label for="chkBox" class="box-close"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php require_once("partials/_loginscript.php");?>
    <script src="./js/app.js"></script>
    <script src="./js/ui.js"></script>
</body> 
  
</html>