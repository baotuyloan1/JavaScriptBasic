// var, let, const: scope, Hosting
// var, let, const: assignment

//code block: if else, loop, {},...

// var co them goi o ngoai block no cung duoc
// let va const no chi ton tai trong block chua no va cac block con cua block do
// var ho tro hosting, const va let khong ho tro hosting
if (true) {
    var course = 'Java script basic';
    {
        {
            // const course = '123';
            console.log(course);

        }
    }
// const va let khong the gan gia tri truoc init
// var thì gán giá trị trước khi khai báo được => hosting
// const thì không thể gán giá trị cho biến lần thứ 2
    a = 1;
    var a;
    console.log(a);
}

//template string
let courseName = 'Javascript';
let courseName2 = 'PHP';
let description = `Template noi suy voi \${} Course\\name: ${courseName} ${courseName2}`;
console.log(description);
const lines = `Line 1

Line 2
`;
console.log(lines);

// Arrow function
var logger1 = function (log) {
    console.log(log);
}

let logger = (log) => {
    console.log(log)
};
logger('Message');

const sum = (a, b) => a + b;
console.log(sum(2, 2));
const sumObj = (a, b) => ({a: a, b: b});
console.log(sumObj(3, 54));

const logger2 = log => console.log(log);
logger2("Logger 2");

const course2 = {
    name: "javascript basic", getName: function () {
        return this; //context
        //     arrow function khong co context nen khong the => this;
    }
}
console.log(course2.getName());

//arrow function không thể dùng để làm làm function constructor được
// khon the dungf (name, price) => {...}
const Course3 = function (name, price) {
    this.name = name;
    this.price = price;
}
console.log(new Course3('Hihi', 1000));

//class
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

//defult parameter values
function logger3(log, isAlert = false, type = 'log') {
    if (isAlert) return alert(log);
    console[type](log);
}

logger3('ga', false, 'warn');

//Enhanced object literals
//1 Định nghãi key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

//trùng tên nhau thì có thể bỏ value đi cho gọn
let name = 'Laravel';
let price = 100;
var course5 = {
    name, price, getName() {
        return name
    }
//     name:name , price:price...
}
console.log(course5);

var fieldName = 'name';
var fieldPrice = 'price';
var course6 = {
    [fieldName]: 'Javascript', [fieldPrice]: '1000'
}
console.log(course6);


//Destructuring
// khi ... sử dụng kết hợp với destructuring thì nó là rest parameters
// khi định nghĩa ra tham số cho method nó cũng là toán tử rest
var array = ['Javascript', 'PHP', 'Ruby', 'Java'];

var [a, , ...c] = array;

console.log(a, c);

let course7 = {
    name: 'Javascript', price1: 10, level: 3, salary: 20, children: {
        name: 'ReactJs'
    }
}

let {
    price1,
    description: description1 = 'default description',
    name: parentName,
    children: {name: childrenName},
    ...conLai
} = course7
console.log(parentName, childrenName, conLai);
//vi du tao ra 1 object khong co file name1 va price1 => conLai là 1 object không có 2 field đó
//có thể áp dụng để xóa field không dùng delete
console.log(description1);

// rest
function logger4(...params) {
    console.log(params)
}

logger4(34, 5, 6, 2, 3, 2, 31, 3, 1)

// destructuring và rest
function logger5({name, address, ...rest}) {
    console.log(name);
    console.log(address);
    console.log(rest);
}

logger5({name: "Bao", address: "Da Nang", class: "IT"});

function logger6([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger6([2, 3, 5, 1, 1]);

//spread
var array = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2, ...array];
console.log(array3);

let object1 = {
    name: 'Javascript',
}
let object2 = {
    price: 1000
}
let object3 = {
    ...object1, ...object2
}
console.log(object3);

//áp dụng thực tế
let defaultConfig = {
    api: 'https://domain-products', apiVersion: 'V1', other: 'other'
}

let category = {...defaultConfig, api: 'https://domain-categories'};
console.log(category);

var array7 = ['Javascript', 'PHP', 'Ruby'];

// cach 1 rest
function logger7([...rest]) {
    for (var i in rest) {
        console.log(rest[i])
    }
}

logger7(array7)

//cach 2 spread
function logger8(...rest) {
    for (var i in rest) {
        console.log('Spread', rest[i]);
    }
}

logger8(...array7);

// tagged template literals
function highlight([first, ...strings], ...rest) {
    console.log(strings);
    return rest.reduce(
        (acc, currentValue) => [...acc, `<span>${currentValue}</span>`,strings.shift()], [first]
    ).join('');
}

let name1 = 'Duc Bao';
let address1 = 'Da Nang'
let hi = 'Hello';
let html = highlight`Nguyen ${name1}  sinh song tai${address1}${hi}!`
console.log(html)

//modules