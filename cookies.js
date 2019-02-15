var pikeStreet = {
    min: 23,
    max: 65,
    avg_cust: 6.3,
    randomAvg: function() {
        var _random = function(min, max){
            return Math.floor(Math.random()*(max - min) + min);
         };
    }
}

function render_pikeStreet(){
var li_el = document.createElement('li');
var article_el = document.createElement('article');
var h2_el = document.createElement('h2');
var p_el = doucment.createElement('p');

li_el.textContent = pikeStreet;
article_el.appendChild(li_el);
li_el.appendChild(article_el);

console.log(li_el);


}

render_pikeStreet();