// Creating Store Object
var pikeStreet = {
    min: 23,
    max: 65,
    avg_cust: 6.3,
    store_name: '1st and Pike',
    store_open: 8,
    store_close: 19,
    cookies_sold_each_hour: [],
         };
// Generate random number for cookies per hour
pikeStreet.calculate_cookies_per_hour = function(){
    var random_customers = Math.floor(_random(this.min, this.max));
    return Math.floor(this.avg_cust * random_customers);
};
// Generate random number for cookies sold each hour
pikeStreet.calculate_cookies_sold_each_hour = function () {
    for(var i = this.store_open; i < this.store_close; i++){
      var cookies_sold = this.calculate_cookies_per_hour();
      this.cookies_sold_each_hour.push(cookies_sold);
    }
};    
      pikeStreet.render = function(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

li_el.textContent = pikeStreet;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

var target_element = document.getElementById('cookie list');
target_element.appendChild(li_el);

console.log(li_el);


}

// Creating Store Object
var seaTac = {
    min: 3,
    max: 24,
    avg_cust: 1.2,
    store_name: 'SeaTac Airport',
    store_open: 8,
    store_close: 19,
    cookies_sold_each_hour: [],
         };
// Generate random number for cookies per hour
seaTac.calculate_cookies_per_hour = function(){
    var random_customers = Math.floor(_random(this.min, this.max));
    return Math.floor(this.avg_cust * random_customers);
};
// Generate random number for cookies sold each hour
seaTac.calculate_cookies_sold_each_hour = function () {
    for(var i = this.store_open; i < this.store_close; i++){
      var cookies_sold = this.calculate_cookies_per_hour();
      this.cookies_sold_each_hour.push(cookies_sold);
    }
};    
      seaTac.render = function(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

li_el.textContent = seaTac;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

var target_element = document.getElementById('cookie list');
target_element.appendChild(li_el);

console.log(li_el);


}

// Creating Store Object
var seattleCenter = {
    min: 11,
    max: 38,
    avg_cust: 3.7,
    store_name: 'Seattle Center',
    store_open: 8,
    store_close: 19,
    cookies_sold_each_hour: [],
         };
// Generate random number for cookies per hour
seattleCenter.calculate_cookies_per_hour = function(){
    var random_customers = Math.floor(_random(this.min, this.max));
    return Math.floor(this.avg_cust * random_customers);
};
// Generate random number for cookies sold each hour
seattleCenter.calculate_cookies_sold_each_hour = function () {
    for(var i = this.store_open; i < this.store_close; i++){
      var cookies_sold = this.calculate_cookies_per_hour();
      this.cookies_sold_each_hour.push(cookies_sold);
    }
};    
      seattleCenter.render = function(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

li_el.textContent = seattleCenter;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

var target_element = document.getElementById('cookie list');
target_element.appendChild(li_el);

console.log(li_el);


}

// Creating Store Object
var capHill = {
    min: 20,
    max: 38,
    avg_cust: 2.3,
    store_name: 'Capitol Hill',
    store_open: 8,
    store_close: 19,
    cookies_sold_each_hour: [],
         };
// Generate random number for cookies per hour
capHill.calculate_cookies_per_hour = function(){
    var random_customers = Math.floor(_random(this.min, this.max));
    return Math.floor(this.avg_cust * random_customers);
};
// Generate random number for cookies sold each hour
capHill.calculate_cookies_sold_each_hour = function () {
    for(var i = this.store_open; i < this.store_close; i++){
      var cookies_sold = this.calculate_cookies_per_hour();
      this.cookies_sold_each_hour.push(cookies_sold);
    }
};    
      capHill.render = function(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

li_el.textContent = capHill;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

var target_element = document.getElementById('cookie list');
target_element.appendChild(li_el);

console.log(li_el);


}

// Creating Store Object
var Alki = {
    min: 2,
    max: 16,
    avg_cust: 4.6,
    store_name: 'Alki',
    store_open: 8,
    store_close: 19,
    cookies_sold_each_hour: [],
         };
// Generate random number for cookies per hour
Alki.calculate_cookies_per_hour = function(){
    var random_customers = Math.floor(_random(this.min, this.max));
    return Math.floor(this.avg_cust * random_customers);
};
// Generate random number for cookies sold each hour
Alki.calculate_cookies_sold_each_hour = function () {
    for(var i = this.store_open; i < this.store_close; i++){
      var cookies_sold = this.calculate_cookies_per_hour();
      this.cookies_sold_each_hour.push(cookies_sold);
    }
};    
      Alki.render = function(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }

li_el.textContent = Alki;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

var target_element = document.getElementById('cookie list');
target_element.appendChild(li_el);

console.log(li_el);


}

pikeStreet.render = renderStore;
seaTac.render = renderStore;
seattleCenter.render = renderStore;
capHill.render = renderStore;
Alki.render = renderStore; 


pikeStreet.calculate_cookies_sold_each_hour();
pikeStreet.render();

seaTac.calculate_cookies_sold_each_hour();
seaTac.render();

seattleCenter.calculate_cookies_sold_each_hour();
seattleCenter.render();

capHill.calculate_cookies_sold_each_hour();
capHill.render();

Alki.calculate_cookies_sold_each_hour();
Alki.render();