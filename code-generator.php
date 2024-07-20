<?php

//---------Password Reset Token generator-------------------------------------------//
    $length = 30;
    $tk = substr(str_shuffle("QWERTYUIOPLKJHGFDSAZXCVBNM1234567890"),1,$length);
    
//------------Dummy Password Generator----------------------------------------------//
    $length = 10;
    $rc= substr(str_shuffle("QWERTYUIOPLKJHGFDSAZXCVBNM1234567890"),1,$length);


    //----------System Generated Numbers------------------------------------------//
    $length = 4;
    $alpha= substr(str_shuffle("QWERTYUIOPLKJHGFDSAZXCVBNM"),1,$length);
    $ln = 4;
    $beta = substr(str_shuffle("1234567890"),1,$length);

    $checksum= bin2hex(random_bytes('5'));
    $operation_id = bin2hex(random_bytes('4'));
    $cus_id = bin2hex(random_bytes('3'));
    $ref_code = bin2hex(random_bytes('6'));
    $prod_id  = bin2hex(random_bytes('5'));
    $order_id = bin2hex(random_bytes('5'));
    $client_id = bin2hex(random_bytes('5'));
    $return_id = bin2hex(random_bytes('3'));
    $prod_ext = "PR" . bin2hex(random_bytes('2'));
    $emp_ext = "EM" . bin2hex(random_bytes('1'));

    $length = 10;
    $supplier_id = substr(str_shuffle("Q1W2E3R4T5Y6U7I8O9PLKJHGFDSAZXCVBNM"),1,$length);

    $length = 4;
    $emp_id = "IEL" . "-" . substr(str_shuffle("1234567890"),1,$length);
    $warehouse_id = "IEL" . "-" . substr(str_shuffle("1234567890"),1,$length);
    
?>