var aboutUs = document.getElementById('about-us');
var services = document.getElementById('service');
var contactUs = document.getElementById('contact-us');
var main = document.querySelector('main');

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