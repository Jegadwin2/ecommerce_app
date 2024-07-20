<?php
session_start();
if (isset($_SESSION['user_id']) && isset($_SESSION['user_role']) && isset($_SESSION['Firstname'])){
    $user_id = $_SESSION['user_id'];
    $staff_utype = $_SESSION['user_role'];
    $Firstname = $_SESSION['Firstname'];
    $business_type = $_SESSION['business_type'];
    $Lastname = $_SESSION['Lastname'];
    $Email = $_SESSION['Email'];
    $Contact = $_SESSION['Contact'];
    $Address = $_SESSION['Address'];
    $hired_date = $_SESSION['hired_date'];
    $company_name = $_SESSION['company_name'];
    $currency = $_SESSION['currency'];
    $vat = $_SESSION['vat'];
}else{
    header('Location:login.php?empty');
};
$directoryURI = $_SERVER['REQUEST_URI'];
$path = parse_url($directoryURI,PHP_URL_QUERY);
$components = explode('&', $path);
$page = $components[0];
include('code-generator.php');
if(isset($_GET['pagetheme'])){
    $page_theme = 'dark-theme-variables';
} else {
    $page_theme = '';
};
if (isset($_GET['dashboard'])){
    include_once "dashboard.php";
}
elseif (isset($_GET['profile'])){
    include_once "profile.php";
}
elseif (isset($_GET['postransactions'])){
    include_once "postransaction.php";
}
elseif (isset($_GET['users'])){
    include_once "users.php";
}
elseif (isset($_GET['products'])){
    include_once "products.php";
}
elseif (isset($_GET['orders'])){
    include_once "orders.php";
}
elseif (isset($_GET['returns'])){
    include_once "returns.php";
}
elseif (isset($_GET['suppliers'])){
    include_once "suppliers.php";
}
elseif (isset($_GET['customers'])){
    include_once "customers.php";
}
elseif (isset($_GET['expenses'])){
    include_once "expenses.php";
}
elseif (isset($_GET['messages'])){
    include_once "messages.php";
}
elseif (isset($_GET['shops'])){
    include_once "shops.php";
}
elseif (isset($_GET['warehouse'])){
    include_once "warehouse.php";
}
elseif (isset($_GET['ecommerce'])){
    header ("Location: ecommerce.php");
}
elseif (isset($_GET['about_company'])){
    include_once "about_company.php";
}
elseif (isset($_GET['add_product'])){
    include_once "add_product.php";
}
elseif (isset($_GET['add_employee'])){
    include_once "add_employee.php";
}
elseif (isset($_GET['create_order'])){
    include_once "create_order.php";
}
elseif (isset($_GET['receipts'])){
    include_once "receipts.php";
}else{
    include_once "fallback.php";
};
// echo $user_id;