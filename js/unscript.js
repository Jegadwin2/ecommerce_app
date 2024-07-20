var aboutUs = document.getElementById('about-us');
var services = document.getElementById('service');
var contactUs = document.getElementById('contact-us');
var main = document.querySelector('main');
var add_customer = document.querySelector('#add_customer');
var add_supplier = document.querySelector('#add_supplier');
var add_expense = document.querySelector('#add_expense');
var add_return = document.querySelector('#add_return');
var add_warehouse = document.querySelector('#add_warehouse');
var add_shop = document.querySelector('#add_shop');
var add_order = document.querySelector('#make_order');
const themeToggler = document.querySelector(".theme-toggler");

document.body.addEventListener('click', (e) => {
    var activeLink = document.querySelectorAll('.banner');
    var contactForm = document.querySelectorAll('#contactForm');
    var contactFormInp = document.querySelectorAll('#contactForm .inp');
    var service = document.querySelector('.banner.services');
    if(e.target.parentNode == document.querySelector('.b1')
     || e.target.parentNode == document.querySelector('.b2')
     || e.target.parentNode == contactForm
    ){
        console.log('banner is active');
    } else if(e.target == services){
        console.log('Our Services');
        e.preventDefault();
        service.classList.add('active');
        main.classList.add('active');
    }else if(e.target == contactUs){
        console.log('Contact Us');
        var contact = document.querySelector('.banner.contact');
        e.preventDefault();
        contact.classList.add('active');
        main.classList.add('active');
    } else if(e.target == aboutUs){
        console.log('About Us');
        var about = document.querySelector('.banner.as');
        e.preventDefault();
        about.classList.add('active');
        main.classList.add('active');
    } else if(e.target == add_customer){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(e.target == add_expense){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(e.target == add_order){
        e.preventDefault();
        console.log('effort needed');
        document.querySelector('#mainContent.add_order').style.visibility = 'visible';
        document.querySelector('#mainContent.add_order').style.opacity = '1';
        document.querySelector('#mainContent.add_order #box').style.opacity = '1';
    } else if(e.target == add_supplier){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(e.target == add_return){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(e.target == add_shop){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(e.target == add_warehouse){
        e.preventDefault();
        console.log('effort needed');
        document.getElementById('mainContent').style.visibility = 'visible';
        document.getElementById('mainContent').style.opacity = '1';
        document.getElementById('box').style.opacity = '1';
    } else if(document.querySelector('#mainContent').style.visibility == 'visible'
            // || document.querySelector('#mainContent.add_shop').style.visibility == 'visible'
            // || document.querySelector('#mainContent.add_warehouse').style.visibility == 'visible'){
            ){
            if(e.target.parentElement != document.getElementById('form') &&
            e.target.parentElement != document.querySelector('.form') &&
            e.target.parentElement != document.getElementById('box') &&
            e.target.parentElement != document.getElementById('boxes') &&
            e.target.parentElement != document.querySelector('select') &&
            e.target.parentElement != document.querySelector('#start_input.purchase') &&
            e.target.parentElement != document.querySelector('.smalltwo.form-control') &&
            e.target.parentElement != document.querySelector('#start_input.return') &&
            e.target.parentElement != document.querySelector('#status_second')){
                console.log('hiding form!');      
                document.getElementById('box').style.opacity = '0';
                document.getElementById('mainContent').style.opacity = '0';
                document.getElementById('mainContent').style.visibility = 'hidden';                
            } else {
                console.log('part of the document');
            }
    } else {
        console.log('hello there!');
        activeLink.forEach(link=> {
            if(e.target == link){
                console.log('banner is active');
            }
            else{
                link.classList.remove('active');
                main.classList.remove('active');
            };
        });
    };

    contactFormInp.forEach(input=> {
        if(e.target.parentNode == input) {
            var contact = document.querySelector('.banner.contact');
            console.log('Input is active');
            contact.classList.add('active');
            main.classList.add('active');
        }
    });
})


window.onload = () => {
    if(themeToggler != null) {
        if(themeToggler.querySelector('span:nth-child(1)').classList == 'active'){
            document.body.classList.add('dark-theme-variables');
        };
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme-variables');
        
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
            // themeToggler.querySelector('span').classList.toggle('active');
        });
    }
}

const listItems = document.querySelectorAll(".sidebar-list li");

listItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('active active');
        let isActive = item.classList.contains("active");

        listItems.forEach(el=> {
            el.classList.remove("active");
        })

        if(isActive) item.classList.remove("active");
        else item.classList.add("active");
    })
});

// if (cust_name == '' ){
//     $('.response').html('<div class="alert bg-danger alert-dismissable" role="alert"><em class="fa fa-lg fa-warning">&nbsp;</em>Please Enter A Customer</div>');
// } else {
//     proceed to payment
// }