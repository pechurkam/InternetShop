let _makeHtml = ({
                     id,
                     name,
                     image_url,
                     description,
                     price,
                     special_price,
                 }) => {
    let $product = $(`<div class="card col-xs-12 col-sm-4 col-md-3" data-product-id="${id}">`);
    $product.append($(`<img src="${image_url}" alt="${name}" class="img-fluid product-image">`));
    $product.append($(`<span class="product-title">`).text(name));
    $product.append($(`<span class="product-price">`).text(price));
    if (special_price != null) {

        $product.append($(`<span class="product_special_price">`).text(special_price));
    }

    $product.append($(`<button type="button" href="#cartBut" class="btn btn-primary btn-sm">`).text("Add to cart"));
    //$product.append($('<span class="product-description">').text(description));
    return $product;
};
module.exports = _makeHtml;