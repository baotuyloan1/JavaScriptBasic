var postApi = 'http://localhost:8080/api/products/';

fetch(postApi).then(function (response) {
    return response.json();
    //Promise. JSON.parse: JSON -> Javascript
}).then(function (products) {
    var laptops = products._embedded.laptopDtoList.map(function (laptop) {
        return `<li><h2>${laptop.name}</h2>
 <p>${laptop.price}</p></li>`
    })
    var phones = products._embedded.phoneDtoList.map(function (phone) {
        return `<li><h2>${phone.name}</h2>
<p>${phone.price}</p></li>`
    })

    var products = laptops.concat(phones);
    var html = products.join('');
    document.getElementById('product-block').innerHTML = html;
}).catch(function (err) {
    alert('Co loi');
})

