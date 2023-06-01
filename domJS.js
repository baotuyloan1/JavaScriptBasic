// HTML DOM
// 1. Element: ID, class, tag, css selector, HTML collection
var headingNode = document.getElementById('heading');
var headingNodes = document.getElementsByClassName('heading');
var tagHeadingNodes = document.getElementsByTagName('p');
var headingNodeQuerySelector = document.querySelector('html .box .heading-2:nth-child(3)')
var headingNodeQuerySelectorAll = document.querySelectorAll('html .box .heading-2:nth-child(2)')

// console.log({element: headingNode});
// console.log(headingNodes);
// console.log('Tag name',tagHeadingNodes);
// console.log(headingNodeQuerySelector);
//
// console.log('selector all',headingNodeQuerySelectorAll)
//
// console.log('id',document.forms['form-1'])
// console.log('array[2]',document.forms[2])
// console.log('by Field',document.forms.testForm);
//
// console.log('anchors', document.anchors)


var productsListElement =
    document.querySelectorAll('.products-list');
var firstProductElement =
    document.getElementsByClassName('product');
var buttonElements = document.getElementsByTagName('button');

console.log(productsListElement);
console.log(firstProductElement);
console.log(buttonElements);

// cong viec 1: su dung toi `boxNode`
var boxNode = document.querySelector('.box-1');
console.log(boxNode);

// cong viec 2: su dung toi cac li elements la con cua box-1
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('p'));

//2. Attribute
var aElement = document.querySelectorAll('a')[2];
aElement.title = 'Heading';
aElement.id = 'editId';
aElement.href = 'google.com';
aElement.text = "click me 11111";
aElement.setAttribute('myAttribute', 'ga');
aElement.setAttribute('href', 'yahoo.com');
aElement.innerText = aElement.baseURI;

console.log(aElement.getAttribute('myAttribute'));
console.log(aElement.href)

//3.Text innerText, textContent;
var headingElement = document.querySelector('.heading');
console.log('Text content', headingElement.textContent) // tra ve nguyen bang + khoang cach + chu...(bao gom text node)
console.log('Inner text', headingElement.innerText)  //tra về kết qua giong nhung gi thay
headingElement.innerText = 'New Heading';

headingElement.textContent = 'Text Content';

console.log(headingElement.innerText)
console.log(headingElement.textContent)

// innerHTML
// có thể thêm element node, text node và attribute node. Thêm cái sau sẽ mất cái trước
// lưu ý khi dùng outerHTML. sau khi set outerHTML thì không được dùng lại element đó nữa
// vì element đó đã bị thay đổi
var boxElement = document.querySelector('.box');
console.log(boxElement)
boxElement.innerHTML = 'newBox';
console.log(boxElement)

boxElement.innerHTML = '<h1 title1="Heading">new Heading</h1>'

console.log(document.querySelector('.box h1').innerText);
console.log(boxElement.innerHTML)

//outer html. ghi đè luôn nó luôn mất luôn elementBOx luôn
// boxElement.outerHTML = '<span>Text</span>'

var secondBox = document.querySelector('.boxes .box:nth-child(2)')
console.log(secondBox.childElementCount)
console.log({secondBox})

//DOM style, có 2 cách
secondBox.style.width = '100px';


Object.assign(secondBox.style, {
    height: '300px',
    backgroundColor: '#f00',
    width: '400px',
})

console.log(secondBox.style['backgroundColor']);
console.log(secondBox.style.backgroundColor);
console.log(secondBox.style);

// classlist
console.log(secondBox.classList.length)
console.log(secondBox.classList[1])
console.log(secondBox.classList.value)
secondBox.classList.add('white', 'blue', 'green');

setInterval(() => {
    // secondBox.classList.remove('white')
    secondBox.classList.toggle('white');
}, 1000)
console.log(secondBox.classList.contains('green'));
secondBox.classList = 'xoa het luon';
console.log(secondBox);

//DOM events

var h1E = document.querySelector('h1');
h1E.onclick = function (e){
    console.log("E ne", e.target);
}

var h1Elements = document.querySelectorAll('h1');
console.log(h1Elements);
for (var i= 0 ; i < h1Elements.length ; i++){
    h1Elements[i].onclick = function (e){
        console.log(e.target);
    }
}

var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e){
    console.log('Onchange',e.target.value)
}
inputElement.oninput = function (e){
    console.log('onInput',e.target.value);
    inputValue = e.target.value;
}
inputElement.onkeydown = function (e){
    console.log('Keydown',e.target);
}
inputElement.onkeyup = function (e){
    switch (e.which){
        case 27:
            console.log('Exits');
            break;
        case 32:
            console.log('SPace');
            break;
    }
    console.log('Keyup',e);
}

var inputCheckboxElement = document.querySelector('input[type="checkbox"]')
inputCheckboxElement.onchange = function (e){
    console.log(e.target.checked);
}

var inputSelectElement = document.querySelector('select');
inputSelectElement.onchange = function (e){
    console.log(e.target.value);
}

document.onkeydown = function (e){
    console.log(e.which)
    switch (e.which){
        case 27:console.log('EXIT');
        break;
        case 13:console.log('SEND CHAT');
        break;
    }
}

//preventDefault
//loai bo hanh vi mac dinh cua broswer tren 1 the html
var aElements = document.querySelectorAll('a');
for (var i = 0 ; i<aElements.length;++i){
    aElements[i].onclick = function (e){
        if (!e.target.href.startsWith('https://google.com.vn')){
            e.preventDefault();
        }
    }
}
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e){
    e.preventDefault();
}
ulElement.onclick = function (e){
    console.log(e.target);
}
//stopPropagation
document.querySelector('div').onclick = function (e){
    console.log("DIV");
}
//stopPropagation
var btn =document.querySelector('button');
btn.onclick = function (e){
    e.stopPropagation();
    console.log("BUTTON");
}

//xử lý nhiều việc khi 1 event xảy ra
btn.onclick = function (e){
    console.log('Viec 1');
    console.log('Viec 2');
    console.log('Viec 3');
}
// hủy bỏ lắng nghe
setTimeout(function () {
    btn.onclick = null;
},3000);

//DOM event hay event listener có thể sử lý công việc như nhau tùy cách sử dụng
btn.addEventListener('click',function (e){
    e.stopPropagation();
    console.log("Random1",Math.random());
})

function viec1(e){
    e.stopPropagation();
    console.log("viec1",Math.random());
}

var viec2 = function (e){
    e.stopPropagation();
    console.log("viec2");
}
btn.addEventListener('click',viec1);
btn.addEventListener('click',viec2);
//hủy bỏ listner
setTimeout(function (){
    btn.removeEventListener('click',viec1);
},3000)

