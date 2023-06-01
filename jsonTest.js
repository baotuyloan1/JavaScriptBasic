// json la 1 dinh dang duoi lieu (chuoi)
var a = '{"name":"Nguyen Duc Bao"}';
console.log(JSON.parse(a));

console.log(JSON.stringify({name: "Nguyen Duc Bao"}))

//Promise


// asybc setTimeout, setInterval, fetch, XML HttpRequest || request animation frame
//synch : dong bo la thang nao viet truoc chay truoc, thang nao viet sau la chay sau
// console.log(2)


//callback hell
// promise
// Pending
// Resolve
// Reject
var promise = new Promise(// function nay được gọi ngay khi new Promise
    function (resolve, reject) {

        //     thanh cong: resolve();
        //     that bai: reject();
        //     phai tra ve 1 trong 2 ham
        // resolve([{
        //     id: 1, name: 'Javascript'
        // }]);
        // reject('Co loi')
        resolve([12, 2, 3, 55])
    });

console.log(promise)
promise.then(function (i) {
    return i + 1;
}).then(function (i) {
    return i + 1;
}).then(function (i) {
    return i + 1;
}).then(function (i) {
    console.log(i);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('Finally !');
});

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000).then(function () {
    console.log(1);
    return sleep(1000);
}).then(function () {
    console.log(2);
    // return new Promise((resolve, reject) => reject('Co loi'));
}).then(function () {
    console.log(3);
    return sleep(1000);
}).catch(function (error) {
    console.log(error);
});

var successPromise = Promise.resolve([1, 1, 1, 1, 1, 1]);
successPromise.then(function (result) {
    console.log('result', result);
}).catch(function (err) {
    console.log('err', err);
})

var failurePromise = Promise.reject([1, 1, 1, 1, 1, 1]);
failurePromise.then(function (result) {
    console.log('result', result);
}).catch(function (err) {
    console.log('err', err);
})

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([1]);
    }, 1000)
});

var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve([2, 3]);
    }, 2000)
});

var promise3 = Promise.reject("co loi");

// khi mà 2 thằng promise xong thì nó mới vào hàm then
Promise.all([promise1, promise2, promise3]).then(function ([result1, result2]) {
    var result = result1.concat(result2);
    console.log(result);
}).catch(function (err) {
})

