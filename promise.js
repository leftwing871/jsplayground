const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function () {
            res("2번 주문 완료");
            //rej('2번 주문중 에러');
        }, 1000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(function () {
            res("3번 주문 완료");
        }, 1000);
    });
};

console.log('1시작');
// f1()
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej));

// console.log('2시작');
// f2('2시작')
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej));

// console.log('3시작');
// f3('3시작')
// .then((res) => console.log(res))
// .catch((rej) => console.log(rej));

// Promises chaining
/*
f1()
.then((res) => f2(res))
.then((res) => f3(res))
.then((res) => console.log(res))
.catch(console.log)
.finally(() => {
    console.log("끝");
});
*/

// Promises.all
/*
console.time("x");
Promise.all([f1(), f2(), f3()])
.then(
    (res) => {
        console.log(res);
        console.timeEnd("x");
    }
)
.catch(console.log);
*/

// Promises.race
// * 하나가 먼저 완료되면 끝냅니다.
console.time("x");
Promise.race([f1(), f2(), f3()])
.then(
    (res) => {
        console.log(res);
        console.timeEnd("x");
    }
)
.catch(console.log);
