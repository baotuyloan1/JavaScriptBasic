// comment 1 dong
/* comment nhieu dong*/

/**
 * Khai bao bien
 * Khai bao...
 * @type {number}
 */
//khai bao bien
// var fullName = "Nguyen Duc Bao";
// var age = 26 //khai bao tuoi
// alert(fullName);
// console.log(age);
// console.warn(fullName);
// console.error("error ne");
// confirm('Xac nhan ban du tuoi')
// prompt('Xac nhan ban du tuoi')
//
// setTimeout(function () {
//     alert('Thong bao');
//     console.log("Day la log")
// }, 2000)
// // alert(age);
//
// setInterval(function (){
//     console.log("Day la log", Math.random());
// },1000)

// var a = 1 + 2;
// // console.log(a)
// var b = 2;
// var c = a + b;
// if (a > 0 && b > 0) console.log("A va b > 0")
// console.log(c)
// var d = 2**3;
// console.log(d)
//
// console.log(d--);
// var e = 8%6;
// e++;
// console.log(e);
//
// var age = 20
// var nextAge= ++age
// console.log(nextAge)
// var a = 1;
// var b = 1;
// b += a;
// console.log(b)

// var a = 6;
// console.log(--a)

// var firstName = 'Bao';
// var lastName = 'Nguyen';
// firstName += ' Nguyen';
//
// console.log(4 + 5+' ' + lastName + firstName)
// var a = 1;
// var b = 1;
// if ( a == b){
//     console.log("a = b")
// }else {
//     console.log("a khong bang b");
// }
var isSuccess = true;
console.log(isSuccess);
//có 6 giá trị khi convert sang boolean sẽ là false
/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// var fullName = NaN
// if (undefined){console.log("Dieu kien dung");}
// else console.log("Dieu kien sai")

var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b > 0) {
    console.log("Dieu kien ''dung");
    console.log('Dieu kien "dung');
}

//undefined type
var age;
console.log(age);

// null
console.log(null);

// symbol
var id = Symbol('id');
var id2 = Symbol('id');

console.log(id)
console.log(id2)
console.log(id == id2)

// function

var myFunction = function () {
    alert('Hi. Xin chao cac ban');
}

// myFunction();


// Object types
var myObject = {
    name: "Nguyen Duc Bao",
    age: 23,
    address: "Da Nang",
    object2: {
        id: "id2"
    }
}

console.log("object cua toi", myObject)

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log("my array", myArray);

console.log(typeof myFunction)

//so sanh === và !==
var b = 1;
var a = '1';

console.log(a === b)
// khi su dung == nó chi quan tâm đến value của 2 biến này thôi 1=='1' true
//=== so sánh cả value cả kiểu giá trị 1 ==='1' false, 1===1 true

// tương tự với !==
// '1' != 1 false, 1!=='1' true

var a = 1;
var b = 2;
if (a < b && a < 0) {
    console.log('A < B');
} else {
    console.log('A > B')
}

// lưu ý toán tử logic
var result = 'A' && 'B' && null && 'D';
// khi sử dụng toán từ && luôn đọc từ vế trái -> phải
// nếu cái đầu tiên khác giá trị truthy thì nó sẽ đọc sang vế phải, lấy giá trị của vế phải gán lại cho result
console.log(result)
if (result) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}

//function
function writeLog(message, param2) {
    console.log('Day la ' + message + param2);
}

writeLog("banh beo", 'banh da');
writeLog('khong can param 2, param 2 se undefined');

function writeLog1() {
    var myString = '';
    for (var param of arguments) {
        // myString += param + ' - ';

        //     template string
        myString += `${param} - `;
    }

    console.log(myString);
}

writeLog1('Log1', 'Log2', 'Log3', 'Log4');

// var isConfirm = confirm('Message?');


// khi dat ham trung ten no se su dung ham sau cung cho tat ca cac loi goi ham truoc va sau do
function cong(a, b) {
    return a + b;
}

// if (isConfirm)
//     console.log((cong(2, 4)))
console.log((cong(2, 4))) //no su dung ham cong() o duoi. no khong co line by line ket qua = -2
function cong(a, b) {
    return a - b;
}

console.log(cong(2, 3)); //-1

// ham trong ham
function showMessage() {
    function showMessage2() {
        console.log("Message 2");
    }

    showMessage2();
}

showMessage();

//Cac loai function
// 1. Declaretion function
function showMessage() {
    console.log('Declaration function')
}

// 2. Expression function, co the dat ten cho function, co hoac 0 deu duoc. Dat ten cho no de hieu thoi
// khong con muc dich gi ca
var showMessage2 = function testName() {
    console.log('Expression function')
}
setTimeout(function autoLogin(){

})
var myObject = {
    myFunction: function tenChoDeHieu(){

    }
}

// hosting
// goi ham truoc khi dinh nghia thif chi ap dun duoc cho declaration function
// a();
// function a(){}
// expresstion function khong the hosting


// 3. Arrow function

