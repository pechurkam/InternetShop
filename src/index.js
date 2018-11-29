import './scss/main.scss';

console.log(`The time is ${new Date()}`);
//import 'bootstrap/dist/css/bootstrap.min.css';  // only minified CSS
import $ from 'jquery';
window.jQuery = $;
window.$ = $;


import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
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
    return ($('<a class="dropdown-item" href="#" id="' + id + '"></a>').text(name));
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
        $(".dropdown-item").on('click', dropdownFunction);
        console.log('Added to list');
    },
    error: function (xhr) {
        alert("An error occured: " + xhr.status + " " + xhr.statusText);
    },
});


/*function cartFunction() {

    let a = parseInt(document.getElementById("count").innerText);
    a++;
    document.getElementById("count").innerText = a.toString();
} */


function dropdownFunction() {
    let num = $(this).attr("id");
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


$(".dropdown-item").on('click', dropdownFunction);
$('#cartBut').on('click', cartFunction);
$('#myModal').on('click',function(e){
    e.preventDefault();
   $('#myModal').modal('show');
})



