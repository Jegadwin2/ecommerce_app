<?php
    session_start();
    include_once('config/config.php');
    if (isset($_POST['trylogin'])) {
        $Firstname = $_POST['Firstname'];
        $user_id = $_POST['user_id'];
        $user_role = $_POST['user_role'];
        $business_type = $_POST['business_type'];
        $Lastname = $_POST['Lastname'];
        $Gender = $_POST['Gender'];
        $Email = $_POST['Email'];
        $Contact = $_POST['Contact'];
        $Address = $_POST['Address'];
        $currency = $_POST['currency'];
        $vat = $_POST['vat'];
        $company_name = $_POST['com$company_name'];
        $hired_date = $_POST['hired_date'];
        if (!$user_id) {
            header('Location:login.php?empty');
        } else {          
            $_SESSION['Firstname'] = $Firstname;
            $_SESSION['user_id'] = $user_id;
            $_SESSION['user_role'] =$user_role;
            $_SESSION['business_type'] =$business_type;     
            $_SESSION['Lastname'] =$Lastname; 
            $_SESSION['company_name'] =$company_name;               
            $_SESSION['Email'] =$Email;        
            $_SESSION['Contact'] =$Contact;        
            $_SESSION['Address'] =$Address;
            $_SESSION['currency'] =$currency;   
            $_SESSION['vat'] =$vat;   
            $_SESSION['hired_date'] =$hired_date;
            $_SESSION['staff_id'] =$staff_id;
        };
    };
      

    if (isset($_GET['set_emp_img'])) {
        move_uploaded_file($_FILES["inpFile"]["tmp_name"], "assets/img/staff/" . basename($_FILES["inpFile"]["name"]));
    };

    if (isset($_GET['set_product_image'])) {
        move_uploaded_file($_FILES["prod_img"]["tmp_name"], "assets/img/products/" . basename($_FILES["prod_img"]["name"]));
    }
