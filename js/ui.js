var staffTable = document.getElementById('userstable');
var prodTable = document.querySelector('tbody.products');
var ordersTable = document.querySelector('.orderstable');
var suppliersTable = document.querySelector('.supplierstable');
var returnsTable = document.querySelector('#returnstable');
var expTable = document.querySelector('tbody.expensestable');
var shopTable = document.querySelector('table.shoptable');
var warehouseTable = document.querySelector('tbody.warehousetable');
var allMsgAdmin = document.querySelector('table.messagesadmin');
var createorder = document.querySelector(".listorders");
var custTable = document.querySelector('tbody.custtable');
var orderTable = document.querySelector('#make_order')
console.log('here is sweet ui');

// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);
// $("#products_count").html(count);

const setSession = (data, id) => {
    console.log('Im in uijs now!');
    var Firstname = data.Firstname;
    var Lastname = data.Lastname;
    var Email = data.email;
    var Contact = data.contact_no;
    var Address = data.address;
    var user_id = data.business_id;
    var business_type = data.business_type;
    var staff_id = id;
    var userRole = data.staff_type;
    var hired_date = data.from_date;
    console.log(userRole + "I've gotten all data");

    const sendAjax = () => {
        console.log('Sending to Ajax now');
        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: {
                Firstname: Firstname,
                Lastname: Lastname,
                Email: Email,
                Contact: Contact,
                Address: Address,
                hired_date: hired_date,
                business_id: user_id,
                business_type: business_type,
                user_id: user_id,
                staff_id: staff_id,
                user_role: userRole,
                trylogin: ''
            },
            success: function (response) {     
                console.log("Here I'm back! in uijs!");
                window.location = ("homepage.php?dashboard");               
            }
        });
    };

    sendAjax();

};

const setAdminSession = (data, id) => {
    console.log('Im in uijs now!');
    var Firstname = data.firstName;
    var business_type = data.business_type;
    var user_id = id;
    var hired_date = data.date_created;
    var Lastname = data.lastName;
    var Email = data.email;
    var Contact = data.phone;
    var currency = data.currency;
    var vat = data.vat;
    var Contact = data.phone;
    var Address = data.address;
    var company_name = data.company_name;
    var userRole = "Admin";
    console.log(Firstname);
    console.log(userRole + " " + "I've gotten all data");
    console.log("UserId:" + " " + user_id);

    const sendAjax = () => {
        console.log('Sending to Ajax now');
        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: {
                Firstname: Firstname,
                user_id: user_id,
                user_role: userRole,
                business_type: business_type,
                Lastname: Lastname,
                Email: Email,
                Contact: Contact,
                Address: Address,
                company_name: company_name,
                currency: currency,
                vat: vat,
                hired_date: hired_date,
                trylogin: ''
            },
            success: function (response) {     
                console.log("Here I'm back! in uijs!");
                window.location = ("homepage.php?dashboard");                
            }
        });
    };

    sendAjax();

};

const renderStaffType = (data) => {
    const html = `
        <option value="${data.staff_type_id}">${data.staff_type}</option>;
    `;

    if(staff_type != null) {
        staff_type.innerHTML += html;
    };
    
};

const renderShops = (data, id, count) => {
    console.log('found shop render!!!');
    const html = `
        <tbody>
            <tr>    
                <td>${id}</td>
                <td>${data.address}</td>
                <td>${data.products}</td>
                <td>${data.category}</td>
                <td>${data.manager}</td>
                <td>${data.status}</td>
                <td>${data.date}</td>
                <td>
                    <a href="homepage.php?update_shop&update=${id}">
                        <button class="btn btn-sm btn-primary">
                            <span class="material-icons-sharp">edit</span>
                        </button>
                    </a>
                    <a href="#">
                        <button class="btn btn-sm btn-danger" data-id="${id}">
                            <span class="material-icons-sharp">delete</span>
                        </button>
                    </a>
                </td>
            </tr>
        </tbody>
    `;

    if(shopTable != null) {
        console.log('shop table here');
        shopTable.innerHTML += html;
    }
}

const renderWarehouses = (data, id, count) => {
    const html = `
        <tr>    
            <td>${id}</td>
            <td>${data.address}</td>
            <td>${data.products}</td>
            <td>${data.category}</td>
            <td>${data.suppliers}</td>
            <td>${data.status}</td>
            <td>${data.date}</td>
            <td>
                <a href="homepage.php?update_warehouse&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
                <a href="#">
                    <button class="btn btn-sm btn-danger" data-id="${id}">
                        <span class="material-icons-sharp">delete</span>
                    </button>
                </a>
            </td>
        </tr>
    `;

    if(warehouseTable != null) {
        warehouseTable.innerHTML += html;
    }
    // if(document.querySelector('select#warehouse') != null){
    //     document.querySelector('select#warehouse') += `<option value="${data.warehouse_id}">${data.address}</option>`;
    // }
}

const renderExpenses = (data, id, count) => {
    console.log('found expense ui');
    const html = `
        <tr>    
            <td>${data.expense_code}</td>
            <td>${data.expense}</td>
            <td>${data.exp_desc}</td>
            <td>${data.exp_vetter}</td>
            <td>${data.exp_date}</td>
            <td>
                <a href="homepage.php?update_product&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                        <!-- <i class="fas fa-edit"></i> -->
                    </button>
                </a>
                <a href="#">
                    <button class="btn btn-sm btn-danger" data-id="${id}">
                        <span class="material-icons-sharp">delete</span>
                        <i class="fas fa-trash"></i>
                    </button>
                </a>
            </td>
        </tr>               
    `;

    if(expTable != null) {
        console.log('expense table present');
        expTable.innerHTML += html;
    } else {
        console.log('expense table absent');
    }
}

const renderOrders = (data, id, count) => {
    const html = `
        <tbody>
            <tr>    
                <td>${data.prod_name}</td>
                <td>${data.customer}</td>
                <td>${data.prod_qty}</td>
                <td>${data.total}</td>
                <td>${data.balance}</td>
                <td>${data.payment_status}</td>
                <td>${data.payment_type}</td>
                <td>${data.created_at}</td>
                <td>${data.status}</td>
                <td>
                    <a href="homepage.php?update_order&update=${id}">
                        <button class="btn btn-sm btn-primary">
                            <span class="material-icons-sharp">edit</span>
                        </button>
                    </a>
                    <a>
                        <button class="btn btn-sm btn-danger" data-id="${id}">
                            <span class="material-icons-sharp">delete</span>
                        </button>
                    </a>
                </td>
            </tr>
        </tbody>
    `;
    if(ordersTable != null) {
        ordersTable.innerHTML += html;
    }
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu != null) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
    
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
}

const renderEcomm = (data, id, count) => {
    var containerShop = document.querySelector('#shop.shop .ecomm');
    const prodImage = `
        <img src='assets/img/products/${data.prod_img}' height='60' width='60' class='img-thumbnail'>
    `;

    const ecommHtml = `
        <div class="box">
            ${data.prod_img !== null ? prodImage
            : "<img src='assets/img/products/default.jpg' height='60' width='60' class='img-thumbnail'>"}
            <h4>${data.prod_name}</h4>
            <h5>${data.prod_price}</h5>
            <div class="cart">
                <a href="#"><i class="bx bx-cart"></i></a>
            </div>
        </div>
    `;
    if(containerShop != null) {
        containerShop.innerHTML += ecommHtml;
    }
    
}

const renderProductsCommerce = (data, id, count) => {
    console.log('in ui products');
    const prodImage = `
        <img src='assets/img/products/${data.prod_img}' height='60' width='60' class='img-thumbnail'>
    `;
    const productsHtml = `
        <tr>
            <td>${id}</td>
            <td>${data.prod_name}</td>
            <td>
                ${data.prod_img !== null ? prodImage
                : "<img src='assets/img/products/default.jpg' height='60' width='60' class='img-thumbnail'>"}
            </td>
            <td> ${data.category}</td>
            <td>₦ ${data.prod_price}</td>
            <td> ${data.warehouse}</td>
            <td> ${data.supplier}</td>
            <td> ${data.quantity_at_hand}</td>
            <td> ${data.availaibility != "Yes" ? "Active" : "Inactive"}</td>
            <td>
                <a href="homepage.php?update_product&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
                <button class="btn btn-sm btn-danger" data-id="${id}">
                    <span class="material-icons-sharp">delete</span>
                </button>          
            </td>
        </tr>
    `;

    if(prodTable !== null) {
        console.log('prod table present now!');
        prodTable.innerHTML += productsHtml;
    }
    // if(document.querySelector(".form #products") != null){
    //     console.log('product form is here');
    //     document.querySelector(".form #products").innerHTML +=  `<option value="${data.prod_name}">${data.prod_name}</option>`;  
    // };
    if(document.querySelector("#chkbox-prods") != null){
        document.querySelector('#chkbox-prods').innerHTML += `<input type="checkbox" name="product" id="products" value="${data.prod_name}">`;
    }
    $("#products_count").html(count);
}

const renderProducts = (data, id, count, product_image) => {
    console.log('in ui products');

    const renderStockMsg = `
        <a href='homepage.php?update_product&update=${id}'>
            <button class='btn btn-sm btn-primary'>
                <span class='material-icons-sharp'>edit</span>
            </button>
        </a>
        <a>
            <button class='btn btn-sm btn-danger' data-id='${id}'>
                <span class='material-icons-sharp'>delete</span>
            </button>
        </a>
        <a>
            <button style='width:15px; height:15px; border-radius:10px; background-color:red'></button>
        </a>
    `;

    const renderNoStockMsg = `
        <a href='homepage.php?update_product&update=${id}'>
            <button class='btn btn-sm btn-primary'>
                <span class='material-icons-sharp'>edit</span>
            </button>
        </a>
        <a>
            <button class='btn btn-sm btn-danger' data-id='${id}'>
                <span class='material-icons-sharp'>delete</span>
            </button>
        </a>
    `;

    const prodImage = `
        <img src='${product_image}' height='40' width='40' class='img-thumbnail'>
    `;
    const productsHtml = `
        <tr>
            <td>${id}</td>
            <td>${data.prod_name}</td>
            <td>
                ${data.prod_img !== null ? prodImage
                : "<img src='assets/img/products/default.png' height='40' width='30' class='img-thumbnail'>"}
            </td>
            <td> ${data.category}</td>
            <td>₦ ${data.prod_price}</td>
            <td> ${data.warehouse}</td>
            <td> ${data.supplier}</td>
            <td> ${data.quantity_at_hand}</td>
            <td> ${data.availaibility != "Yes" ? "Active" : "Inactive"}</td>
            <td> 
                ${data.quantity_at_hand <= 3 ? renderStockMsg : renderNoStockMsg}                             
            </td>
        </tr>
    `;

    if(prodTable !== null) {
        console.log('prod table present now!');
        prodTable.innerHTML += productsHtml;
    }
    // if(document.querySelector(".form #products") != null){
    //     console.log('product form is here');
    //     document.querySelector(".form #products").innerHTML +=  `<option value="${data.prod_name}">${data.prod_name}</option>`;  
    // };
    if(document.querySelector("#chkbox-prods") != null){
        document.querySelector('#chkbox-prods').innerHTML += `<input type="checkbox" name="product" id="products" value="${data.prod_name}">`;
    }
    var selectProd = ``;
    $("#products_count").html(count);
}

const addToForm = (form) => {
    createorder.innerHTML += form;
}

const renderOrderTable = (data, id, product_image) => {
    const prodImage = `
        <img src='${product_image}' height='40' width='40' class='img-thumbnail'>
    `;
    const html = `
        <tr>
            <td>
                ${data.prod_img !== null ? prodImage
                : "<img src='assets/img/products/default.jpg' height='40' width='40' class='img-thumbnail'>"}
            </td>
            <td>${data.prod_name}</td>
            <td>₦ ${data.prod_price}</td>
            <td>
                <input id='check' name="check" type='checkbox' value=${id}>
            </td>
            <td>
                <a href="homepage.php?update_product&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
            </td>
        </tr>
    `;
    if(orderTable != null) {
        console.log('adding products to order table meow');
        orderTable.innerHTML += html;
    };

}

const renderOrderTableNA = (data, id, product_image) => {
    const prodImage = `
        <img src='${product_image}' height='40' width='40' class='img-thumbnail'>
    `;
    const html =  `
        <tr>
            <td>
                ${data.prod_img !== null ? prodImage
                : "<img src='assets/img/products/default.jpg' height='40' width='40' class='img-thumbnail'>"}
            </td>
            <td>${data.prod_name}</td>
            <td>₦ ${data.prod_price}</td>
            <td>
                <span>Not Available</span>
            </td>
            <td>
                <a href="homepage.php?update_product&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
            </td>
        </tr>             
    `;
    if(orderTable != null) {
        console.log('adding products to order table meow meow');
        orderTable.innerHTML += html;
    };
}

const renderCategory = (data, id, count) => {
    const html = `
        <option value="${data.category}">${data.category}</option>
    `;
    if(document.querySelector("select#category") != null) {
        document.querySelector("select#category") += html;
    }
}

const renderReturns = (data, id, count) => {
    const html = `
        <tr>    
            <td>${data.return_id}</td>
            <td>${data.customer}</td>
            <td>${data.contact}</td>
            <td>${data.product}</td>
            <td>${data.description}</td>
            <td>${data.date_of_purchase}</td>
            <td>${data.date_of_return}</td>
            <td>${data.status}</td>
            <td>
                <a href="homepage.php?update_product&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
                <a href="">
                    <button class="btn btn-sm btn-danger" data-id="${id}">
                        <span class="material-icons-sharp">delete</span>
                    </button>
                </a>
            </td>
        </tr>
    `;
    
    if(returnsTable != null) {
        console.log('return table here');
        returnsTable.innerHTML += html;
    } else {
        console.log('return table not here');
    }
}

const renderCustomers = (data, id, count) => {
    const html = `
        <tr>    
            <td>${id}</td>
            <td>${data.cust_name}</td>
            <td>${data.contact_no}</td>
            <td>${data.gender}</td>
            <td>${data.date}</td>
            <td>
                <a href="homepage.php?update_customer&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                    </button>
                </a>
                <a href="">
                    <button class="btn btn-sm btn-danger" data-id="${id}">
                        <span class="material-icons-sharp">delete</span>
                    </button>
                </a>
            </td>
        </tr>
    `;
    if(custTable != null) {
        custTable.innerHTML += html;
    }
}

const renderMsgAdmin = (data, id, count) =>  {
    console.log('rendering messages');
    var html;
    if (allMsgAdmin != null) {
        if (count > 0) {

            html = `
                <tbody>
                    <tr>
                        <td>MSG</td>
                        <td>${data.message_title}</td>
                        <td>${data.message}</td>
                        <td>${data.date}</td>
                        <td>
                            <button id="delete_msg" data-id="${id}" class="btn btn-danger btn-sm" style="border-radius:60px;">
                                <i class="fa fa-trash" alt="delete" data-id="${id}"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
    
            `;
        } else {
            html = `
                <p style='margin-left: 30px'>No Messages</p>;
            `;
        };

        allMsgAdmin.innerHTML += html;
    
    };

}

const renderSuppliers = (data, id, count) => {
    console.log('found suppliers');
    const html = `
        <tbody>
            <tr>    
                <td>${id}</td>
                <td>${data.supplier_name}</td>
                <td>${data.products}</td>
                <td>${data.nationality}</td>
                <td>${data.state}</td>
                <td>${data.contact}</td>
                <td>${data.date}</td>
                <td>
                    <a href="homepage.php?edit_supplier&update=${id}">
                        <button class="btn btn-sm btn-primary">
                            <span class="material-icons-sharp">edit</span>
                        </button>
                    </a>
                    <a href="#">
                        <button class="btn btn-sm btn-danger" data-id="${id}">
                            <span class="material-icons-sharp">delete</span>
                        </button>
                    </a>
                </td>
            </tr>
        </tbody>
    `;

    if(suppliersTable != null) {
        suppliersTable.innerHTML += html;
    };

    if(document.querySelector('#supplier_chkbox') != null) {
        document.querySelector('#supplier_chkbox').innerHTML += `<input type="checkbox" name="supplier" id="suppliers" value="${data.supplier_name}"`;
    };
}

const renderUsers = (data, id, count, staff_image) => {
    var staffImage = `
        <img src='${staff_image}' height='60' width='60' class='img-thumbnail'>
    `;
    var staffdet = [id, data.Firstname,data.Lastname, data.gender, data.staff_type_id, data.id_card_type, data.id_card_no, data.contact_no, data.address, data.email, data.username, data.emp_img, data.empCodeNo, data.salary, data.staff_type_id, data.from_date, data.to_date];

    const html = `
        <tr>
            <td>${data.empCodeNo}</td>
            <td>${data.Firstname} ${data.Lastname}</td>
            <td>
                ${data.emp_img != null ? staffImage
                : "<img src='assets/img/staff/frontend.png' height='40' width='40' class='img-thumbnail'>"}
            </td>
            <td>${data.email}</td>
            <td>${data.gender}</td>
            <td>${data.staff_type}</td>
            <td>${data.contact_no}</td>
            <td>${data.salary}</td>
            <td>${data.from_date}</td>
            <td>${data.last_login}</td>
            <td>${data.deleteStatus == 0 ? "active" : "inactive"}
            <td>
                <a href="homepage.php?update_employee&update=${id}">
                    <button class="btn btn-sm btn-primary">
                        <span class="material-icons-sharp">edit</span>
                        <!-- <i class="fas fa-edit"></i> -->
                    </button>
                </a>
                <a href="#">
                    <button class="btn btn-sm btn-danger" data-id="${id}">
                        <span class="material-icons-sharp">delete</span>
                        <!-- <i class="fas fa-trash"></i> -->
                    </button>
                </a>
                <a href="#">
                    <button data-toggle="modal" data-target="#empDetail" data-id="${staffdet}" id="editEmp" class="btn btn-sm btn-danger">
                        <span class="material-icons-sharp">delete</span>
                        <!-- <i class="fas fa-info"></i> -->
                    </button>
                </a>
            </td>
        </tr>
    `;
    if(staffTable != null) {
        console.log('staff table is present');
        staffTable.innerHTML += html;
    };

    if(document.querySelector("#chkbox-users") != null){
        document.querySelector('#chkbox-users') += `<option value="${data.Firstname} ${data.Lastname}">${data.Firstname} ${data.Lastname}</option>`;
    }

    $("#no_of_staff").html(count);
}