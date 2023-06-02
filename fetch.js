var productApi = 'http://localhost:8080/api/products/';
var categoryAPI = 'http://localhost:8080/api/categories/';

function start() {
    getProducts(renderProducts);
    getCategories(rendercategories);
    handleCreateForm();

}

start();


// function
function getProducts(cb) {
    fetch(productApi).then(function (response) {
        return response.json();
        //Promise. JSON.parse: JSON -> Javascript
    }).then(cb);
}

function getCategories(cb) {
    fetch(categoryAPI).then(function (response) {
        return response.json();
    }).then(cb);
}

function renderProducts(json) {
    var productsNew = json._embedded.laptopDtoList.concat(json._embedded.phoneDtoList);
    var listProductsBlock = document.querySelector("#list-products");
    var htmls = productsNew.map(function (product) {
        return `<li><h4>${product.name}</h4>
        <p>${product.price}</p>
          <i>${getCategoriesName(product.categories)}</i>
</li>`
    });
    listProductsBlock.innerHTML = htmls.join('');
}

function rendercategories(json) {
    var categories = json._embedded.categoryDtoList;
    var listCategoriesBlock = document.querySelector("#list-categories");
    var htmls = categories.map(function (category) {
        return `<li class="category-item-${category.id}"><h4>${category.name}</h4>
<p>${category.description}</p>
<button onclick="handleDeleteCategory(${category.id})">Xoa</button>
<button onclick="handleUpdateCategory({id:${category.id},name:'${category.name}' ,description:'${category.description}'})">Update</button></li>`
    });
    listCategoriesBlock.innerHTML = htmls.join('');
}

function handleDeleteCategory(id) {
    var options = {
        method: 'DELETE', headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(categoryAPI + id, options).then(function () {
        var courseItem = document.querySelector('.category-item-' + id);
        if (courseItem) {
            courseItem.remove();
        }
    });
}

function handleUpdateCategory(category) {

    var czxzxcnameInput = document.querySelector('input[name="name"]');
    var descriptionInput = document.querySelector('input[name="description"]');
    nameInput.value = category.name;
    descriptionInput.value = category.description;
    var updateBtn = document.querySelector('#create');
    updateBtn.innerText = "update";

    updateBtn.onclick = function () {
        category.name = nameInput.value;
        category.description = descriptionInput.value;
        handleUpdateBtn(category);
    }
    // fetch(categoryAPI + id, options).then(function () {
    //     var courseItem = document.querySelector('.category-item-' + id);
    //     if (courseItem) {
    //         courseItem.remove();
    //     }
    // });
}

function handleUpdateBtn(category) {
    var options = {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(category)
    };
    fetch(categoryAPI, options).then(function () {
        getCategories(rendercategories);
    }).then(function () {
        var nameInput = document.querySelector('input[name="name"]');
        var descriptionInput = document.querySelector('input[name="description"]');
        nameInput.value = '';
        descriptionInput.value = '';
        handleCreateForm();

    });
}

function getCategoriesName(categories) {
    return categories.map(function (category) {
        return category.name;
    })
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.innerText = 'Create';
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {name: name, description: description};
        createCategory(formData, function () {
            getCategories(rendercategories);
        });

    }
}


function createCategory(data, cb) {
    var options = {
        method: 'POST', body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(categoryAPI, options).then(function (response) {
        response.json();
    }).then(cb);
}