const add_prod = document.querySelector('form.add_product');
const create_order = document.getElementById('create_product');
const add_cust = document.querySelector('form.add_customer');
const add_expense = document.querySelector('form#expenseform');
const add_shop = document.querySelector('form.add_shop');
const add_warehouse = document.querySelector('form.warehouse');
const add_return = document.querySelector('form#return');
const add_supplier = document.querySelector('form.suppliers');
const add_emp = document.getElementById('add_employee');
const header = document.querySelector('head');
var client_id = document.getElementById('business_id').innerHTML;
var business_type = document.getElementById('business_type').innerHTML;
// const prod_img_storage = storage.ref('product_img');
// const staff_img_storage = storage.ref('staff_img');
const clientRef = db.collection('clients');
const customerRef = db.collection('customer');
// const customerRef = db.collection('customers');
const expenseRef = db.collection('expenses');
const shopRef = db.collection('shops');
const warehouseRef = db.collection('warehouse');
const supplierRef = db.collection('suppliers');
const returnRef = db.collection('returns');
const orderRef = db.collection('orders');
const staffRef = db.collection('returns');
const prodRef = db.collection('products');
const categoryRef = db.collection('categories');
const messageRef = db.collection('messages');
const staffQryRef  = staffRef.where('client_id', '==', client_id);
const messageQryRef  = messageRef.where('client_id', '==', client_id);
const prodQryRef  = prodRef.where('client_id', '==', client_id);
const orderQryRef  = orderRef.where('client_id', '==', client_id);
const warehouseQryRef  = warehouseRef.where('client_id', '==', client_id);
const supplierQryRef  = supplierRef.where('client_id', '==', client_id);
const returnQryRef  = returnRef.where('client_id', '==', client_id);
const shopQryRef  = shopRef.where('client_id', '==', client_id);
const customerQryRef  = customerRef.where('client_id', '==', client_id);
const categoryQryRef  = categoryRef.where('client_id', '==', client_id);
const expenseQryRef  = expenseRef.where('client_id', '==', client_id);
console.log('script is working still');
console.log(client_id);
console.log(document.querySelector('#page').innerHTML);
console.log(window.location.href);

// staffRef.doc(document.getElementById('user_id').innerHTML).get()
// .then((products) => {
//     var count = products.docChanges().length;
   
// })

// orderBarQry.get()
// .then((ords) => {
//     var count = ords.docChanges().length;
//     $("#order_count").html(count);
// })

// const clientQryRef = db.collection('client', userId);

// window.onload = () => {
//     if(window.location.href == "profile.php" || window.location.href == "dashboard.php"){
//         console.log('this is the dashboard');
//         var header = document.querySelector('head');
//         var html = `<link rel='stylesheet' href='css/styled.css'>`;
//         header.appendChild(html);
//     }
// }

var adate = new Date();
var dt = adate.getDate();
var mn = adate.getMonth() + 1;
if(mn<=9) {
    mn = '0' + mn;
};
if(dt<=9) {
    dt = '0' + dt;
};
var yr = adate.getFullYear();
var hr = adate.getHours();
var min = adate.getMinutes();
var sec = adate.getSeconds();
var mondt = yr + '-' + mn;

var currentDateTime = yr + '-' + mn + '-' + dt + 'T' + hr + ':' + min;

console.log(adate);

console.log('currentDate=' + currentDateTime);

console.log('today is great');

// function addCss() {
//     if(window.location == "homepage.php?dashboard"){
//         console.log('this is the dashboard');
//         var header = document.querySelector('head');
//         var html = `<link rel='stylesheet' href='css/styled.css'>`;
//         header.innerHTML += html;
//     };
// }

// window.onload = addCss;

if(add_prod != null) {
    console.log('add_prod is here');
    add_prod.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('form submitted');
        var prod_name = $("#prod_name").val();
        var prod_id = $("#prod_code").val();
        var category = $("#category :selected").val();
        var warehouse = $("#warehouse :selected").val();
        var supplier = $("#supplier :selected").val();
        var availability = $("#availability :selected").val();
        var qty = Number($("#qtyathand").val());
        var prod_price = Number($("#prod_price").val());
        var date_of_stock = $("#date_of_stock").val();
        var prod_ext = $("#prod_ext").html();
        var prod_package = $("#prod_package").val();
        var inpFile = document.getElementById('prod_img');
    
        let img = inpFile.files[0];
        var image = prod_ext + img.name;    

        img = new File([img], image, {type:img.type});
        
        // Upload the file and metadata
        storageRef.child('products/' + client_id + '/' + image).put(img)
        .then(()=> {
            const productDetails = {
                prod_name : prod_name,
                category: category,
                warehouse: warehouse,
                supplier: supplier,
                quantity_at_hand: qty,
                prod_package: prod_package,
                prod_price: prod_price,
                date_of_stock: date_of_stock,
                availability: availability,
                prod_img: image,
                client_id: client_id
            }
            prodRef.doc(prod_id).set(productDetails)
            .then(() => {
                console.log('done with adding file data');
                window.location = 'homepage.php?add_product&success';
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                .then(() => {
                    window.location = 'homepage.php?add_product&error';
                })
            });
        })
        .catch(error => {
            console.log('File upload error:' + error.message);
        })       
    })
}

if(add_cust != null) {
    add_cust.addEventListener('submit', (evt) => {
        evt.preventDefault();

        var cust_name = $('#cust_name').val();
        var gender = $('#gender :selected').val();
        var cust_id = $('#cust_code').val();
        var contact_no = $('#contact_no').val();
        var date = $('#date').val();
        var cust_name = $('#cust_name').val();
    
        const customerDetails = {
            cust_name : cust_name,
            gender : gender,
            contact_no : contact_no,
            date : date,
            client_id: client_id
        }
    
        customerRef.doc(cust_id).set(customerDetails)
        .then(() => {
            window.location = 'homepage.php?customers&success';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    })
}

if(add_expense != null) {
    add_expense.addEventListener('submit', evt => {
        evt.preventDefault();
        console.log('form submitted');
        var expense_code = document.getElementById('exp_code').value;
        var expense = document.getElementById('expense').value;
        var exp_desc = document.getElementById('description').value;
        var exp_note = document.getElementById('expense_note').value;
        var exp_date = document.getElementById('date').value;

        const expense_details = {
            expense_code: expense_code,
            expense: expense,
            exp_desc: exp_desc,
            exp_vetter: exp_note,
            exp_date: exp_date,
            client_id: client_id
        }

        expenseRef.doc(expense_code).set(expense_details)
        .then(() => {
            window.location = 'homepage.php?expenses&success';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    })
}

if(add_shop != null) {
    add_shop.addEventListener('submit', evt => {
        evt.preventDefault();
        console.log('form submitted');

        var shop_code =  $('#shp_code').val();
        var address =  $('#address').val();
        var manager =  $('#manager :selected').val();
        var prods_avail =  $('#prods_avail :selected').val();
        var category =  $('#category :selected').val();
        var status =  $('#status :selected').val();
        var date =  $('#date').val();

        const shop_details = {
            address: address,
            manager: manager,
            products: prods_avail,
            category: category,
            status: status,
            client_id: client_id,
            date: date
        }

        shopRef.doc(shop_code).set(shop_details)
        .then(() => {
            window.location = 'homepage.php?shops&sucess';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    })
}

if(add_supplier != null) {
    add_supplier.addEventListener('submit', evt => {
        evt.preventDefault();
        console.log('form submitted');

        var supplier_code = $('#supplier_code').val();
        var supplier_name = $('#supplier_name').val();
        var products = $('#products :selected').val();
        var contact = $('#contact').val();
        var nationality = $('#nationality').val();
        var state = $('#state').val();
        var date = $('#date').val();

        const supplier_details = {
            supplier_name: supplier_name,
            products: products,
            contact: contact,
            nationality: nationality,
            state: state,
            client_id: client_id,
            date: date
        }

        supplierRef.doc(supplier_code).set(supplier_details)
        .then(() => {
            window.location = 'homepage.php?suppliers&success';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            .then(()=> {
                window.location = 'homepage.php?suppliers&error';
            })
        });
    })
}

if(add_return != null) {
    add_return.addEventListener('submit', evt => {
        evt.preventDefault();
        console.log('form submitted');
        var return_id = $("#return_id").val();
        var product = $("#products :selected").val();
        var customer = $("#customer").val();
        var contact = $("#contact").val();
        var description = $("#description").val();
        var status = $("#status_second :selected").val();
        var date_of_purchase = $("#date_of_purchase").val();
        var date_of_return = $("#date_of_return").val();

        const return_details = {
            return_id: return_id,
            product: product,
            customer: customer,
            contact: contact,
            description: description,
            date_of_purchase: date_of_purchase,
            date_of_return: date_of_return,
            status: status,
            client_id: client_id
        }

        returnRef.doc(return_id).set(return_details);
        messageRef.doc().set({
            message_title: 'return notice',
            message: 'A product was returned for fault: ' + description + '.' + ' Status: ' + status,
            created_date: adate
        })
        .then(() => {
            console.log('done!');
            window.location = 'homepage.php?returns&success';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            .then(() => {
                window.location = 'homepage.php?returns&error';
            })
        });
    })
}

if(add_warehouse != null) {
    add_warehouse.addEventListener('submit', evt => {
        evt.preventDefault();
        console.log('form submitted');

        var warehouse_id = $('#warehouse_id').val();
        var address = $('#warehouse_address').val();
        var prods_avail = $('#prods_avail_warehouse :selected').val();
        var manager = $('#manager_warehouse :selected').val();
        var category = $('#category_warehouse :selected').val();
        var suppliers = $('#suppliers_warehouse :selected').val();
        var status = $('#status_warehouse :selected').val();
        var date = $('#date_warehouse').val();

        const warehouse_details = {
            address: address,
            suppliers: suppliers,
            status: status,
            products: prods_avail,
            manager: manager,
            category: category,
            client_id: client_id,
            date: date
        }

        warehouseRef.doc(warehouse_id).set(warehouse_details)
        .then(() => {
            window.location = 'homepage.php?warehouse&success';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    })
}

$(document).on('submit', '#create_order', evt => {
    evt.preventDefault();
    var ordProd = document.querySelectorAll('#check');
    var N = ordProd.length;
    if (N > 0) {
        for(let i = 0; i < N; i++){ 
            if(ordProd[i].checked) //the checked checkboxes
            {
                prodRef.doc(ordProd[i].value).get()
                .then((prodDoc) => {
                    buyProd(prodDoc.data(), prodDoc.id);
                });  
            };             

            const buyProd = (data, id) => {
                console.log(data.prod_price);
                const orderForm = `
                    <div class="form-row mt-3" id="confirm_order">
                        <div class="col-md-6">
                            <label>Product Name</label>
                            <input type="text" readonly id="prod_name" value="${data.prod_name}" class="first">
                        </div>
                        <div class="col-md-6">
                            <label>Discount</label>
                            <input type="number" id="discount" value=0 class="first">
                        </div>
                        <div class="col-md-6">
                            <label>Product Price (₦)</label>
                            <input type="number" readonly id="prod_price" value="${data.prod_price}" class="first" >
                        </div>
                        <input type="hidden" id="prod_number" name="productNo" value="${id}" class="first">
                        <div class="col-md-6">
                            <label>Product Quantity</label>
                            <input type="number" id="prod_qty" class="first" onInput ="fetch_total()">
                        </div>
                        
                    </div> 
                    <hr>

                `;
                document.getElementById('mainContent').style.visibility = 'visible';
                document.getElementById('mainContent').style.opacity = '1';
                document.getElementById('box').style.opacity = '1';
                addToForm(orderForm);
            }
        }
    }
   

})

$(document).on('submit', '#confirmOrderForm', event => {
    event.preventDefault();

    var allprod_names = Array.from(document.querySelectorAll('#prod_name'));
    var prod_names_list = [];
    for (let i = 0; i < allprod_names.length; i++) {
        prod_names_list.push(allprod_names[i].value);
    }

    var allprod_prices = Array.from(document.querySelectorAll('#prod_price'));
    var prod_prices_list = [];
    for (let i = 0; i < allprod_prices.length; i++) {
        prod_prices_list.push(allprod_prices[i].value);
    }

    var allprod_numbers = Array.from(document.querySelectorAll('#prod_number'));
    var prod_numbers_list = [];
    for (let i = 0; i < allprod_numbers.length; i++) {
        prod_numbers_list.push(allprod_numbers[i].value);
    }

    var allprod_qtys = Array.from(document.querySelectorAll('#prod_qty'));
    var prod_qtys_list = [];
    for (let i = 0; i < allprod_qtys.length; i++) {
        prod_qtys_list.push(allprod_qtys[i].value);
    }

    var order_id = $('#order_code').val();
    var issued_date = $('#issued_date').val();
    var customer = $('#customer').val();
    var payment_type = $('#payment_type').val();
    var payment_status = $('#payment_status').val();
    var balance = $("#balance").val();
    var discount = $("#totDisc").val();
    var status = $('#status').val();
    var price = 0;
    var price_total = $('#total').val();
    price += price_total;

    const order_details = {
        prod_name: prod_names_list,
        prod_id: prod_numbers_list,
        prod_price: prod_prices_list,
        prod_qty: prod_qtys_list,
        total: price,
        customer: customer,
        payment_type: payment_type,
        payment_status: payment_status,
        status: status,
        balance: balance,
        discount: discount,
        client_id: client_id,
        // created_at: currentDateTime,
        created_at: issued_date,
        month: mondt
    };

    if(order_id != '') {
        orderRef.doc(order_id).set(order_details)
        .then(()=> {
            window.location = "homepage.php?create_order&success";
        })
    }

})

if(add_emp != null) {
    add_emp.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('employee submitted');
        var emp_codeno = Number($('#emp_codeno').val());
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var role =$('#staff_type :selected').val();
        var id_card_id = $('#id_card_id :selected').val();
        var salary = $('#salary').val();
        var id_card_no = Number($('#id_card_no').val());
        var password = $('#password').val();
        var username = $('#username').val();
        var address = $('#address').val();
        var contact_no = $('#contact').val();
        var hired_date = $('#hired_date').val();
        var gender = $('#gender :selected').val();
        var email =  $('#email').val();
        var emp_ext =  $('#emp_ext').html();
        var inpFile = document.getElementById('emp_img');

        let img = inpFile.files[0];
        var image = emp_ext + img.name;    

        img = new File([img], image, {type:img.type});
    
        const employee = {
            staff_type: role,
            Firstname: first_name,
            Lastname: last_name,
            email: email,
            id_card_type: id_card_id,
            contact_no: contact_no,
            id_card_no: id_card_no,
            business_type: business_type,
            address: address,
            salary: salary,
            username: username,
            gender: gender,
            emp_img: image,
            business_id: client_id,
            empCodeNo: emp_codeno,
            deleteStatus: 0,
            date_created: adate,
            from_date: hired_date,
            to_date: null
        }
    
        if (id_card_id == '' || password == '' || salary == '' || email == '' || username == ''){
            $('.response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>One or more Credentials are missing</div>');
        } else {
                const goToSuccess = () => {
                    window.location = 'homepage.php?add_employee&success';
                };
                // Upload the file and metadata
                storageRef.child('users/' + client_id + '/' + image).put(img);
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    staffRef.doc(user.uid).set(employee);  
                    goToSuccess();          
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
        }
    })
}



// messageQryRef.where("date", "", currentTime)

// const q = query(coll, where("state", "==", "CA"));
// const snapshot = await getCountFromServer(q);
// console.log('count: ', snapshot.data().count);

messageQryRef.orderBy('date', 'desc').onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    console.log('messagecount:' + count);
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderMsgAdmin(change.doc.data(), change.doc.id, count);
        }

    })
})

prodRef.where("quantity_at_hand", "<=", 3).get()
.then(stockCount => {
    var count = stockCount.docChanges().length;
    console.log(count);
    $('#prod_stock_update').html(count);
})

customerQryRef.orderBy('date', 'desc').onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    console.log(count);
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderCustomers(change.doc.data(), change.doc.id, count);
        }

    })
})

staffQryRef.onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            storageRef.child('users/' + client_id + '/' + change.doc.data().prod_img).getDownloadURL()
            .then(()=> {
                renderUsers(change.doc.data(), change.doc.id, count, url);
            })
        }

    })
})

supplierQryRef.orderBy('date', 'desc').onSnapshot((snapshot) => {
    console.log('found suppliers');
    const count = snapshot.docChanges().length;
    console.log(count);
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderSuppliers(change.doc.data(), change.doc.id, count);
        }

    })
})

returnQryRef.onSnapshot((snapshot) => {
    console.log('found some returns!');
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderReturns(change.doc.data(), change.doc.id, count);
        }

    })
})

expenseQryRef.orderBy('exp_date', 'desc').onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        console.log('found expense');
        if(change.type === 'added') {
            renderExpenses(change.doc.data(), change.doc.id, count);
        }

    })
})

shopQryRef.onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderShops(change.doc.data(), change.doc.id, count);
        }

    })
})

warehouseQryRef.onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderWarehouses(change.doc.data(), change.doc.id, count);
        }

    })
})

orderQryRef.onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderOrders(change.doc.data(), change.doc.id, count);
        }

    })
})

prodQryRef.onSnapshot((snapshot) => {
    console.log('getting product snapshot!');
    const count = snapshot.docChanges().length;
    console.log('Product count: ' + count);
    snapshot.docChanges().forEach(change => {
        console.log('obtained it now!');
        if(change.type === 'added') {
            storageRef.child('products/' + client_id + '/' + change.doc.data().prod_img).getDownloadURL()
            .then((url) => {
                renderProducts(change.doc.data(), change.doc.id, count, url);
                if(change.doc.data().availability == "Yes"){
                    renderOrderTable(change.doc.data(), change.doc.id, url);
                } else {
                    renderOrderTableNA(change.doc.data(), change.doc.id, url);
                }
            })
            .catch((error) => {
                // Handle any errors
                console.log(error.message);
            });
        }

    })
})

categoryQryRef.onSnapshot((snapshot) => {
    const count = snapshot.docChanges().length;
    snapshot.docChanges().forEach(change => {
        if(change.type === 'added') {
            renderCategory(change.doc.data(), change.doc.id, count);
        }
    });
})