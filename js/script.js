const themeToggler = document.querySelector(".theme-toggler");

$(document).on('click', '#add_customer', evt => {
    evt.preventDefault();
    document.getElementById('mainContent').style.visibility = 'visible';
    document.getElementById('mainContent').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
})

$(document).on('click', '#add_expense', evt => {
    evt.preventDefault();
    document.getElementById('mainContent').style.visibility = 'visible';
    document.getElementById('mainContent').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
})

$(document).on('click', '#add_supplier', evt => {
    evt.preventDefault();
    document.getElementById('mainContent').style.visibility = 'visible';
    document.getElementById('mainContent').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
})

$(document).on('click', '#add_return', evt => {
    evt.preventDefault();
    document.getElementById('mainContent').style.visibility = 'visible';
    document.getElementById('mainContent').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
})

$(document).on('click', '#add_transaction', evt => {
    evt.preventDefault();
    document.getElementById('mainContent').style.visibility = 'visible';
    document.getElementById('mainContent').style.opacity = '1';
    document.getElementById('box').style.opacity = '1';
})

$(document).on('click', '#add_shop', evt => {
    evt.preventDefault();
    document.querySelector('#mainContent').style.visibility = 'visible';
    document.querySelector('#mainContent').style.opacity = '1';
    document.querySelector('#mainContent #box').style.opacity = '1';
})

$(document).on('click', '#add_warehouse', evt => {
    console.log('warehouse form is active');
    evt.preventDefault();
    document.querySelector('#mainContent').style.visibility = 'visible';
    document.querySelector('#mainContent').style.opacity = '1';
    document.querySelector('#mainContent #box').style.opacity = '1';
})

console.log('hi, Divine me');

// if(document.querySelector('#mainContent') != null && 
//     document.querySelector('#mainContent').style.visibility == 'visible' &&
//     document.querySelector('#mainContent').style.opacity == '1'){
//     console.log('main content is active!');
//     document.body.addEventListener('click', e => {
//         if( e.target.parentElement != document.getElementById('form') &&
//             e.target.parentElement != document.querySelector('.form') &&
//             e.target.parentElement != document.getElementById('box') &&
//             e.target.parentElement != document.querySelector('#start_input.purchase') &&
//             e.target.parentElement != document.querySelector('.smalltwo.form-control') &&
//             e.target.parentElement != document.querySelector('#start_input.return') &&
//             e.target.parentElement != document.querySelector('#status_second') &&
//             e.target.parentElement != document.getElementById('boxes')){
//                 document.getElementById('box').style.opacity = '0';
//                 document.getElementById('mainContent').style.opacity = '0';
//                 document.getElementById('mainContent').style.visibility = 'hidden';
//         } else {
//             console.log('clicking on documennt');
//         }
//     })
// }

var theme = document.getElementById('pagetheme').innerHTML;
console.log(theme);

function changeTheme() {
    document.body.classList.toggle('dark-theme-variables');    
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}

if(themeToggler != null) {
    if(theme == 'dark-theme-variables'){
        changeTheme();
    } else {
        console.log('the page is not dark');
    };
    themeToggler.addEventListener('click', () => {
        console.log('here it darkens');
        if(document.body.classList.contains('dark-theme-variables')){
            console.log('No dark theme');
        } else {
            theme = 'dark-theme-variables';
        };
        changeTheme();
        console.log(theme);
        // themeToggler.querySelector('span').classList.toggle('active');
    });
}

var allAnchors = document.querySelectorAll('a.links');

allAnchors.forEach(element => {
    element.addEventListener('click', evt => {
        evt.preventDefault();
        console.log('hi, element clicked');
        var elementHref = element.href;
        console.log(elementHref);
        if (theme == 'dark-theme-variables'){
            console.log('its dark here!');
            const newUrl = elementHref +  '&pagetheme';
            window.location.replace(newUrl);
        } else {
            window.location.href = elementHref;
        }
    })
});

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