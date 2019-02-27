'use strict';
var _random = function(min, max){
    return Math.random()*(max - min) + min;
  };

var Salmon_cookies = function (store_name, location, min_cust, max_cust, store_open, store_close, cookie_order_size, avg_cookies_per_cust){
    this.store_name = store_name;
    this.store_type = 'Salmon Cookies';
    this.location = location;
    this.min_cust = min_cust;
    this.max_cust = max_cust;
    this.open_hour = store_open;
    this.close_hour =store_close;
    this.cookie_order_size = cookie_order_size;
    this.cookies_sold_each_hour = [];
    this.avg_cookies_per_cust = avg_cookies_per_cust || 6.3;
};


Salmon_cookies.prototype.cookies_per_hour = function () {
    var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
    return Math.floor(this.avg_cookies_per_cust * random_customers);
};

