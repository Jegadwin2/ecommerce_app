const staticCacheName = 'site-static-v000234';
const dynamicCacheName = 'site-dynamic-v0000235';
const assets = [
    '/ecommerce_app',
    '/ecommerce_app/index.php',
    '/ecommerce_app/js/index.js',
    '/ecommerce_app/ajax.js',
    '/ecommerce_app/js/ui.js',
    '/ecommerce_app/ajax.php',
    '/ecommerce_app/css/add_employee.css',
    '/ecommerce_app/css/login.css',
    '/ecommerce_app/css/pages.css',
    '/ecommerce_app/css/register.css',
    '/ecommerce_app/css/style.css',
    '/ecommerce_app/css/create_order.css',
    '/ecommerce_app/css/styled.css',
    '/ecommerce_app/users.php',
    '/ecommerce_app/homepage.php',
    '/ecommerce_app/js/sw.js',
    '/ecommerce_app/about_company.php',
    '/ecommerce_app/add_employee.php',
    '/ecommerce_app/add_product.php',
    '/ecommerce_app/code-generator.php',
    '/ecommerce_app/create_order.php',
    '/ecommerce_app/customers.php',
    '/ecommerce_app/products.php',
    '/ecommerce_app/expenses.php',
    '/ecommerce_app/login.php',
    '/ecommerce_app/places.php',
    '/ecommerce_app/print_receipt.php',
    '/ecommerce_app/orders.php',
    '/ecommerce_app/profile.php',
    '/ecommerce_app/register.php',
    '/ecommerce_app/returns.php',
    '/ecommerce_app/manifest.json',
    '/ecommerce_app/suppliers.php',
    '/ecommerce_app/logout.php',
    '/ecommerce_app/js/register.js',
    '/ecommerce_app/js/login.js',
    '/ecommerce_app/js/app.js',
    '/ecommerce_app/js/script.js',
    '/ecommerce_app/sidebars/admin.php',
    '/ecommerce_app/sidebars/staff.php',
    '/ecommerce_app/dashboars/admin.php',
    '/ecommerce_app/dashboars/staff.php',
    '/ecommerce_app/change_profile.php',
    '/ecommerce_app/partials/_aside.php',
    '/ecommerce_app/partials/_fullscript.php',
    '/ecommerce_app/partials/_head.php',
    '/ecommerce_app/partials/_top.php',
    '/ecommerce_app/fallback.php'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

// install service worker
self.addEventListener('install', evt => {
    //console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );

});

//activate event
self.addEventListener('activate', evt => {
    //console.log('service worker has been activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

//fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
        evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 30);
                    return fetchRes;
                })
            });
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1) {
                return caches.match('fallback.php');
            }
        })
    );
    }
});