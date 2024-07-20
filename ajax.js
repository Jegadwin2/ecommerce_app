
function fetch_total() {
    var prices = document.querySelectorAll('#prod_price');
    var first_total =  0;
    var qtys = document.querySelectorAll('#prod_qty');
    var total = document.getElementById('total');
    var discount = document.querySelectorAll('#discount');
    var totDisc = document.querySelectorAll('#totDisc');
    var total_discount =  0;
    for (let i = 0; i < prices.length || i < qtys.length || i < discount.length; i++){
        var mytotal = prices[i].value * qtys[i].value - discount[i].value;
        first_total += mytotal;
        total_discount += discount[i].value;
        total.value = first_total;
        totDisc.value = total_discount;
    }
}

function fetch_total_price() {
    var price = document.getElementById('price').innerHTML;
    var from_date = new Date(document.getElementById('check_in_date').value);       
    var to_date = new Date(document.getElementById('check_out_date').value);                 
    const day_diff = Math.abs(to_date - from_date);
    const days = Math.ceil(day_diff/(1000 * 60 * 60 * 24));
    document.getElementById('staying_day').innerHTML = days;            
    document.getElementById('total_price').innerHTML= (price*days);
}


function validId(val) {
    console.log(val);
    console.log(typeof val);
    let password = document.getElementById('password');
    if(password != null) {
        password.setAttribute('data-minlength','8');
        password.setAttribute('data-error',"Enter 8 Character Valid Password");
    }

    if (val == '1'){
        document.getElementById('id_card_no').setAttribute('type','number');
        document.getElementById('id_card_no').setAttribute('data-minlength','12');
        document.getElementById('id_card_no').setAttribute('placeholder',"647510001480");
        document.getElementById('id_card_no').setAttribute('data-error',"Enter 12 Digit Valid National Identity Card No");
    }else if(val == '2'){
        document.getElementById('id_card_no').setAttribute('type','text');
        document.getElementById('id_card_no').setAttribute('data-minlength','11');
        document.getElementById('id_card_no').setAttribute('placeholder',"COA/2635100");
        document.getElementById('id_card_no').setAttribute('data-error',"Enter 11 Character(include '/') Valid Voter ID Card No");
    }else if(val == '3'){
        document.getElementById('id_card_no').setAttribute('type','text');
        document.getElementById('id_card_no').setAttribute('data-minlength','10');
        document.getElementById('id_card_no').setAttribute('placeholder',"RKCS17878A");
        document.getElementById('id_card_no').setAttribute('data-error',"Enter 10 Character Valid Pan Card No");
    }else if(val == '4'){
        document.getElementById('id_card_no').setAttribute('type','text');
        document.getElementById('id_card_no').setAttribute('data-minlength','16');
        document.getElementById('id_card_no').setAttribute('placeholder',"RJ29 20210040869");
        document.getElementById('id_card_no').setAttribute('data-error',"Enter 16 Character(include space) Valid Licence Number");
    }
}

function fetchCustomer(val) {
    var room_details = val;
    const roomdd = room_details.split(",");
    const room_id = roomdd[0];
    const room_no = roomdd[1];
    $('#cusRoom').val(room_no);
    $('#cusRoomId').val(room_id);   
}

$(document).on('click', '#editEmp', function (e) {
    e.preventDefault();

    var emp_details = $(this).data('id');
    const empdd = emp_details.split(",");

    $('#staff_type').val(empdd[4]);
    $('#edit_first_name').val(empdd[1]);
    $('#edit_last_name').val(empdd[2]);
    $('#id_card_id').val(empdd[6]);
    $('#edit_contact_no').val(empdd[8]);
    $('#edit_address').val(empdd[9]);
    $('#edit_email').val(empdd[10]);
    $('#edit_salary').val(empdd[14]);
    $('#edit_username').val(empdd[11]);
    $('#edit_gender').val(empdd[3]);
    $('#id_card_no').val(empdd[7]);
    $('#edit_emp_id').val(empdd[0]);
    $('#edit_emp_codeno').val(empdd[13]);

})

$(document).on('click', '#change_shift', function (e) {
    var emp_id = $(this).data('id');
    console.log(emp_id);
    $('#getEmpId').val(emp_id);

});

