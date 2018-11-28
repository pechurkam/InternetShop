import './scss/main.scss';

console.log(`The time is ${new Date()}`);
//import 'bootstrap/dist/css/bootstrap.min.css';  // only minified CSS
import $ from 'jquery';
window.jQuery = $;
window.$ = $;


import 'bootstrap/js/dist/dropdown';

let _makeProduct = require('./modules/product-html');
jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/product/list',
    method: 'get',
    dataType: 'json',
    success: function (json) {
        console.log('Loaded via AJAX!');
        // console.log(json);
        console.table(json);
        json.forEach(product => $('.product-grid').append(_makeProduct(product)));
        console.log('Added to grid');
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});

let _listCategories = ({id, name}) => {
    return ($('<a class="dropdown-item" href="#" id="${id}"></a>').text(name));
};
jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/category/list',
    method: 'get',
    dataType: 'json',
    success: function (json) {
        console.log('Loaded category list!');
        // console.log(json);
        console.table(json);
        json.forEach(category => $('.dropdown-menu').append(_listCategories(category)));
        console.log('Added to list');
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});


function cartFunction() {

    let a = parseInt(document.getElementById("count").innerText);
    a++;
    document.getElementById("count").innerText = a.toString();
}

function orderFunc() {
    $(".product-grid").empty();
    $('#zakaz').html('<form>\n' +
        '  <div class="form-group">\n' +
        '    <label for="exampleInputEmail1">Email address</label>\n' +
        '    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n' +
        '    <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n' +
        '  </div>\n' +
        '  <div class="form-group">\n' +
        '    <label for="exampleInputPassword1">Password</label>\n' +
        '    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
        '  </div>\n' +
        '  <div class="form-group form-check">\n' +
        '    <input type="checkbox" class="form-check-input" id="exampleCheck1">\n' +
        '    <label class="form-check-label" for="exampleCheck1">Check me out</label>\n' +
        '  </div>\n' +
        '  <button type="submit" class="btn btn-primary">Submit</button>\n' +
        '</form>')
}
let num = $("dropdown-item").attr("id");
function myFunction() {
    $(".product-grid").empty();
    jQuery.ajax({

        url: 'https://nit.tron.net.ua/api/product/list/category/' + num,
        method: 'get',
        dataType: 'json',
        success: function (json) {

            console.log('Loaded via AJAX!');
            // console.log(json);
            console.table(json);
            json.forEach(product => $('.product-grid').append(_makeProduct(product)));
            console.log('Added to grid');
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
    });

}
$("dropdown-item").on('click', myFunction);
$('#cartBut').on('click', cartFunction);
$('#cart').on('click', orderFunc);
