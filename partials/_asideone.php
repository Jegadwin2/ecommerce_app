<aside>
    <div class="top">
        <div class="logo">
            <img src="images/newlogo.png" alt="" sizes="" srcset="">
            <h2>EGA <span class="danger">TOR</span></h2>
        </div>
        <div class="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
        </div>
    </div>     

    <div class="sidebar close-sidebar">
        <ul class="sidebar-list">
            <li class="dropdown">
                <div class="title">
                    <a href="homepage.php?dashboard" class="<?php if($path == "dashboard"){echo "link active";}else{echo "link";}?>">
                        <span class="material-icons-sharp">grid_view</span>
                        <h3 class="name">Dashboard</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="#" class="link">
                        <span class="material-icons-sharp">person_outline</span>
                        <h3 class="name">People</h3>
                    </a>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div class="submenu">
                    <a href="homepage.php?suppliers" class="<?php if($path == "suppliers"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">wifi</span>
                        <h3 class="name">Suppliers</h3>
                    </a> 
                    <a href="homepage.php?customers" class="<?php if($path == "customers"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">male</span>
                        <h3 class="name">Customers</h3>
                    </a>                  
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="#" class="link">
                        <span class="material-icons-sharp">receipt_long</span>
                        <h3 class="name">Transactions</h3>
                    </a>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div class="submenu">
                    <a href="homepage.php?orders" class="<?php if($path == "orders"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">shopping_bag</span>
                        <h3 class="name">Orders</h3>
                    </a>
                    <a href="homepage.php?expenses" class="<?php if($path == "expenses"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">insights</span>
                        <h3 class="name">Expenses</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">   
                    <a href="homepage.php?messages" class="<?php if($path == "messages"){echo "link active";}else{echo "link";}?>">
                        <span class="material-icons-sharp">mail_outline</span>
                        <h3 class="name">Messages</h3>
                        <span class="message-count">26</span>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="homepage.php?products" class="<?php if($path == "products"){echo "link active";}else{echo "link";}?>">
                        <span class="material-icons-sharp">inventory</span>
                        <h3 class="name">Products/Inventory</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="#" class="link">
                        <span class="material-icons-sharp">place</span>
                        <h3 class="name">Places</h3>
                    </a>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div class="submenu">
                    <a href="homepage.php?shops" class="<?php if($path == "shops"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">store</span>
                        <h3 class="name">Shops</h3>
                    </a>
                    <a href="homepage.php?warehouse" class="<?php if($path == "warehouse"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">warehouse</span>
                        <h3 class="name">Warehouse</h3>
                    </a>
                    <a href="homepage.php?ecommerce" class="<?php if(isset($_GET['ecommerce'])){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">bolt</span>
                        <h3 class="name">Online Store</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="#" class="link">
                        <span class="material-icons-sharp">report_gmailerrorred</span>
                        <h3 class="name">Reports</h3>
                    </a>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div class="submenu">
                    <a href="homepage.php?returns" class="<?php if($path == "returns"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">assignment_return</span>
                        <h3 class="name">Returns</h3>
                    </a>                    
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="#" class="link">
                        <span class="material-icons-sharp">settings</span>
                        <h3 class="name">Settings</h3>
                    </a>
                    <i class="bx bx-chevron-right"></i>
                </div>
                <div class="submenu">
                    <a href="homepage.php?users" class="<?php if($path == "users"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">manage_accounts</span>
                        <h3 class="name">Accounts</h3>
                    </a>
                    <a href="homepage.php?profile" class="<?php if($page == "profile"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">camera</span>
                        <h3 class="name">Profile</h3>
                    </a>
                    <a href="homepage.php?about_company" class="<?php if($path == "about_company"){echo "links active";}else{echo "links";}?>">
                        <span class="material-icons-sharp">business</span>
                        <h3 class="name">About_company</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="homepage.php?add_product" class="<?php if($path == "add_product"){echo "link active";}else{echo "link";}?>">
                        <span class="material-icons-sharp">add</span>
                        <h3 class="name">Add Product</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="homepage.php?create_order" class="<?php if($path == "create_order"){echo "link active";}else{echo "link";}?>">
                        <span class="material-icons-sharp">border_color</span>
                        <h3 class="name">Order Product</h3>
                    </a>
                </div>
            </li>
            <li class="dropdown">
                <div class="title">
                    <a href="./logout.php" class="link">
                        <span class="material-icons-sharp">logout</span>
                        <h3 class="name">Logout</h3>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</aside>