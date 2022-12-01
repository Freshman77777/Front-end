function callFiveTimes(callback) {
    for (let i=0; i<5; i++)
        callback();
}

const cb = function() {
    console.log('함수가 호출되었습니다.');
}
// cb();

// callFiveTimes(cb);

function cb2() {
    console.log('함수가 호출되었습니다.');
}
// callFiveTimes(cb2);

// callFiveTimes(function() {
//     console.log('함수가 호출되었습니다.')
// });

callFiveTimes(()=>{
    console.log('함수가 호출되었습니다.');
});

callFiveTimes(() => console.log('함수가 호출되었습니다.'));