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
    name: "Nguyen Duc Bao", age: 23, address: "Da Nang", object2: {
        id: "id2"
    }
}

console.log("object cua toi", myObject)

var myArray = ['Javascript', 'PHP', 'Ruby'];

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
setTimeout(function autoLogin() {

})
var myObject = {
    myFunction: function tenChoDeHieu() {

    }
}

// hosting
// goi ham truoc khi dinh nghia thif chi ap dun duoc cho declaration function
// a();
// function a(){}
// expresstion function khong the hosting


// 3. Arrow function

// Chuoi trong Javascrpt
//backslash in java script
var fullName = '   Duc Bao la \"Super man\' Bao Bao. Day la dau gach cheo nguoc \\   '; //kieu la string
var fullName2 = new String('Duc Bao'); //kieu la object

console.log(fullName === fullName2);
console.log(fullName);
console.log(fullName.length);

var firstName = 'Bao';
var lastName = "Nguyen";
console.log(`Toi la: ${lastName} ${firstName}`)

// lam viec voi chuoi
console.log(fullName.length);
// search chuoi
console.log(fullName.indexOf('Bao'));
console.log('Bat dau tu vi tri thu 6 ' + fullName.indexOf('Bao', 6));
console.log('Lay chu cuoi cung trong string ' + fullName.lastIndexOf('Bao'))

//search va index of khac nhau o cho search ho tro bieu thuc chinh quy, con indexOf thi khong.
// search khong ho tro tim bat' dau` tu` vi tri, index o tro tim bat dau tu vi tri
console.log(fullName.slice(4, 10));
console.log(fullName.slice(4));
console.log(fullName.slice(0));
console.log(fullName.slice(-5, -1));

// bieu thuc chinh quy
// replace
console.log(fullName.replace(/Bao/g, 'Key'));
console.log(fullName.replace('Bao', 'Key'));

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(fullName.length)
console.log(fullName.trim());
console.log(fullName.trim().length);

var languages = 'Javascript, PHP, Ruby';

console.log(languages.split(', '))
var languages1 = 'Javascript';
console.log(languages1.split(''))

// get string by index
console.log(fullName.charAt(3));
console.log(fullName[3]);

console.log(fullName.charAt(-3));
console.log(fullName[-3])


console.log(typeof fullName.charAt(-3));
console.log(typeof fullName[-3])


//number trong Javascript
var age = 19;
var PI = 3.14231231123;

// tranh dung cach nay
var otherNumber = new Number(9);

var result = 20 / 'ABC';
console.log(result); // NaN la dai dien cho 1 so khong hop le nhung type cua no van la number
console.log(typeof result);
// kiem tra 1 so co phai NaN hay khong thi chi co the dung
console.log(isNaN(result));

console.log(typeof 20);
console.log(typeof (20).toString());
console.log(PI.toFixed()) //khong truyen gi thi no mat dinh la 0, va no se lam trong len neu lon hon 5
// lam tron xuong neu phia sau < 5. Va no chuyen ve string

console.log(PI.toFixed(3))
console.log(typeof PI.toFixed(3))

console.log(typeof 23.1 === "number")

//mang array

var languageArray = ['PhP', 'JavaScript', 'Java', null, undefined, 1231, function () {
}]

// khong khuyen khich
var languagesArray2 = new Array('PhP', 'JavaScript', 'Java', null, undefined, 1231, function () {
});
console.log(languageArray)
console.log(languagesArray2)

console.log(typeof languageArray, typeof languagesArray2)
//array cung la 1 object nen khi kiem tra array va object {} thi dung ham Array.isArray();
console.log(Array.isArray(languageArray))
console.log(Array.isArray({}))
console.log(languageArray.length)
console.log(languageArray[2])

//to string se ngan cach cac phan tu voi nhau boi dau ,
console.log(languageArray.toString());
console.log(languageArray.join());

console.log(languageArray.join(' '));

//xoa phan tu cuoi cung trong mang, va tra ve phan tu bi xoa
console.log(languageArray.pop());
console.log(languageArray);

//Them 1 hoac nhieu phan tu vao cuoi mang, va tra ve do dai moi cua mang
console.log(languageArray.push('Dart', 'Laravel'));
console.log(languageArray)

//xoa phan tu o dau mang va tra ve phan tu bi xoa
console.log(languageArray.shift());
console.log(languageArray);
//* khi xoa het phan tu trong mang, thi no se tra ve undefined cho ca 2 cach shift vaf pop

// them 1 hoac nhieu phan tu vao dau mang
console.log(languageArray.unshift('THem moi', 'them moi java'));
console.log(languageArray);

//splicing
// bat dau tu vi tri mang[1] va xoa di 2 phan tu, return ve phan tu bi xoa
console.log(languageArray.splice(1, 2))
console.log(languageArray)

//chen them 1 phan tu vao mang va khong tra ve phan tu nao ca. keu qua mang goi se dc chen` vao 1 hoacj nhieu phan tu
console.log(languageArray.splice(1, 0, 'Chen 1', 'Chen2'));
console.log(languageArray)

//xoa va chen
console.log(languageArray.splice(1, 2, 'Chen moi 1', 'Chen moi 2'));
console.log(languageArray);

//concat hop 2 mang, khong dung + duoc vi no chuyen sang string.
console.log(languageArray.concat(languagesArray2));
console.log("Van khong thay doi ", languageArray);
console.log(languagesArray2);

//slicing lau phan tu ra, thuong dung de copy mang,
console.log(languageArray)
console.log(languageArray.slice(1, 8))
console.log(languageArray)
console.log(languageArray.slice(-2, -1))
console.log(languageArray)
console.log(languageArray.at(-2))

var phoneKey = 'phone';
//object trong javascript
var myInfo = {
    name: 'Nguyen Duc Bao',
    age: 18,
    address: 'Da Nang, Viet Nam',
    'full-name': 'full Name is Nguyen Duc Bao',
    [phoneKey]: '0788049042',
    getname: function () {
        return this.name;
    }
}
console.log(myInfo);
myInfo.email = 'nguyenducbao@gmail.com';
myInfo['my-email'] = 'batquytat@gmail.com';
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['full-name'])
//ap dung khi
var mykey = 'address';
console.log(myInfo[mykey]);

// delete key
delete myInfo["full-name"];
console.log(myInfo.getname())

//object constructor
function User(firstName, lastname, avatar) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Bao', 'Nguyen', 'Avatar');
var user = new User('Khanh', 'Nguyen', 'Avatar');


console.log(author);
console.log(User === author.constructor)
console.log(typeof author)
console.log(user);

author.title = 'THay giao';
user.comment = 'Hoc Sinh';
console.log(author);
console.log(author.getName());
console.log(user);
console.log(user.getName());

var Cach2 = function (firstName, lastname, avatar) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
Cach2.prototype.className = 'Tu hoc';
Cach2.prototype.getClassName = function () {
    return this.className;
}

var author2 = new Cach2('bao', 'ne', 'hihi');
console.log('cach2', author2.getClassName())

// Làm bài tại đây
var Student = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

//Date
var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getHours());
console.log(date.getSeconds());

console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)

//Math object
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.round(1.6));

//giá tr tuyệt đối
console.log(Math.abs(-4));

//làm tròn trên
console.log(Math.ceil(4.1));

//lamf tronf duoi
console.log(Math.floor(5.9));


console.log(Math.floor(Math.random() * 5));
var random = Math.floor(Math.random() * 5);
var bonus = ['10 coin', '20 coin', '30 coin', ' 40 coin', '50 coin'];

console.log(bonus[random]);

var random2 = Math.floor(Math.random() * 100);
if (random2 < 5) {
    console.log("Cường hóa thành công");
} else {
    console.log("Fail. Tỷ lệ cường hóa " + random2);
}

console.log(Math.max(2, 4, 12, 412, 4, -231));
console.log(Math.min(3532, 423, 2, 312, 3, 4, 0));


//Cau dieu kien
var date = 2;
if (date === 2) {
    console.log('Hom nay la thu 2');
} else if (date === 3) {
    console.log('Hom nay la thu 3');
} else if (date === 4) {
    console.log('Hom nay la thu 4');
} else {
    console.log('Khong biet');
}

// switch nó sẽ sử dụng 3 dấu === để so sánh
var date = 6;
switch (date) {
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 3');
        break;
    case 4:
        console.log('Hom nay la thu 4');
        break;
    case 5:
    case 6:
    case 7:
        console.log('Hom nay la cuoi tuan');
        break;
    case 8:
        console.log('Hom nya la chu nhat');
        break
    default:
        console.log('Khong biet');
}

var course = {
    name: 'Javascipt', coin: 0
}
course.coin = 0 ? console.log(`${course.coin} coins`) : console.log("Mien phi");

//vòng lặp
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

var i = 10;
for (; i > 1; --i) {
    console.log(i);
}

var myArray = ['Javascript', 'PHP', "Java", "Dart"];

var i = 0;
// nó chỉ lấy 1 lần sẽ tối ưu hơn
var arrayLength = myArray.length;
for (; i < arrayLength; ++i) {
    console.log(myArray[i]);
}


var orders = [{
    name: 'Khóa học HTML - CSS Pro', price: 3000000
}, {
    name: 'Khóa học Javascript Pro', price: 2500000
}, {
    name: 'Khóa học React Pro', price: 3200000
}]


function getTotal(arrays) {
    var length = arrays.length;
    var total = 0;
    for (var i = 0; i < length; ++i) {
        total += arrays[i].price;
    }
    return total;
}

// Expected results:
console.log(getTotal(orders)) // Output: 8700000

// sử dụng for in để lấy key của đối tượng
var myInfo = {
    name: 'Bao Nguyen', age: 21, address: 'Da Nang, VN'
}
for (var key in myInfo) {
    console.log(key);
    console.log(myInfo[key]);
}

// key cua array se la so, array cũng là 1 object
var languages = ['Javascript', 'PHP', 'Ruby'];
for (var key in languages) {
    console.log(languages[key]);
}

//key cua string se la vi tri ky tu
var myString = 'Javascript';
for (var key in myString) {
    console.log(key, myString[key]);
}


// for of lấy value trong mảng, hoăặc lấy ký tự trong chuỗi
var languages = ['Javascript', 'PHP', 'Java']
for (var value of languages) {
    console.log(value);
}
var myString = "javascript";
for (var value of myString) {
    console.log(value);
}

// muốn lấy value trong object á thì phải chuyển nó thanh mảng key mới dùng for of được
var myInfo = {
    name: 'Nguyen Duc Bao',
    age: 18,
    address: 'Da Nang, Viet Nam',
    'full-name': 'full Name is Nguyen Duc Bao',
    [phoneKey]: '0788049042',
    getname: function () {
        return this.name;
    }
}
for (var value of Object.keys(myInfo)) {
    console.log(value, myInfo[value]);
}

// while
var languages = ['Javascript', 'PHP', 'Java'];
var i = 0;
while (i < languages.length) {
    console.log(languages[i]);
    i++;
}

// do while
var isSuccess = false;

var i = 0;
do {
    i++;
    console.log('Nhạp thẻ lần ' + i);
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i < 3);

//break và continue
for (var i = 0; i < 10; i++) {

    if (i % 2) {
        continue;
    }
    console.log(i);
}

console.log("==========")
var myArray = [[8, 5], [8, 2], [4, 6]];
var array = [];
//vong lap long nha - nested loop
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        array.push(myArray[i][j]);
    }
}
console.log(array.sort().reverse());

//de quy
function countDown(num) {
    console.log(num);
    if (num > 0) return countDown(num - 1);
    return num;
}

countDown(3);

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];
loop(0, array.length, function (index) {
    console.log('index: ', index);
})


//array
var courses = [{
    id: 1, name: 'Javascript', coin: 3
}, {
    id: 2, name: 'ReactJS', coin: 4
}, {
    id: 3, name: 'Java', coin: 0
}, {
    id: 4, name: 'HTML & CSS', coin: 0
}];


courses.forEach(function (course, thamSoThu2LaIndex) {
    console.log(thamSoThu2LaIndex, course);
})

//kiem tra tat ca cac phan tu trong mang
var allIsFree = courses.every(function (course, index) {
    console.log(index);
    return course.coin === 0;
})
console.log(allIsFree)

// chi can 1 phần từ trả về đúng là ngừng lại vòng lặp
var haveFree = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 0;
})
console.log(haveFree)

//tim phan tu trong mang, lap qua tung phan tu trong mang, phan tu nao thoa man thi tra ve va ket thuc ngay sau do.
var findCourseFunction = function (course, index) {
    return course.name === 'Java';
}
var javeCourse = courses.find(findCourseFunction);
console.log(javeCourse)

//filter thì giống find nhưng nó trả về tất cả các phần tử thỏa mãn. Còn thằng find nó chỉ trả về phần tử đầu tiên.
var listCourseFree = courses.filter(function (course, index) {
    return course.coin === 0;
})
console.log("Free course", listCourseFree);


// map
var newCourse = courses.map(function (course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    };
});
console.log(newCourse);

//reduce
function coinHandler(previousValue, currentValue, currentIndex, originArray) {
    return previousValue + currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);

//bt reduce - flat deep array
var deepthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = deepthArray.reduce(function (flatOutput, deepthItem) {
    return flatOutput.concat(deepthItem);
}, []);
console.log(flatArray);

//Lấy ra các khóa học và đău vào 1 mảng mới
var topics = [{
    topic: "Front-end", courses: [{id: 1, title: "HTML, CSS"}, {
        id: 2, title: "Javascript"
    }]
}, {
    topic: "Back-end", courses: [{
        id: 1, title: "PHP"
    }, {
        id: 2, title: "NodeJs"
    }]
}];

// chuyen no ve 1 mang cung cap
var newFunction = function (temp, topic) {
    return temp.concat(topic.courses);
}
var flatArray = topics.reduce(newFunction, []);
console.log(flatArray);

var htmls = flatArray.map(function (course) {
    return `<div><h3> ${course.title} </h3>
<h3>${course.id}</h3>
</div>`;
})
console.log(htmls.join(''));