let cars = ['Benz','Audi','BMW','porsche'];
console.log(cars);

let car = cars.pop();               //배열의 마지막 요소를 꺼내고, 배열의 꺼낸 요소를 제거함
console.log(cars, car);

cars.push("Hyundai");
console.log(cars);

//Array를 생성
let persons = new Array('James','Maria');       //배열도 객체이므로 생성자 함수를 통해 생성 가능
console.log(persons);

//Array 속성
console.log(cars.length, persons.length);

//Array 정렬
console.log('정렬 전', cars);
cars.sort();
console.log('정렬 후', cars);

//내림차순 정렬
cars.reverse();
console.log(cars);

//Array join
console.log(cars.join(', '));

//문자열 거꾸로 만들기
let sample = '토마토 일요일 기러기'
let arr = sample.split('');         //글자 단위
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.join(''));
const reverseStr = sample.split('').reverse().join('');
console.log(reverseStr);
const rs = str => str.split('').reverse().join('');         //글자를 뒤집어주는 함수
console.log(rs('안녕하세요?'));

//배열의 일부분을 반환하기
const fruits = ['peach','banana','grape','apple'];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));               //index2부터 끝까지

//배열의 일부분 삭제해서 리턴
const res = fruits.splice(0, 2);
console.log(res);
console.log(fruits);

// 객체의 배열을 정렬해라
let students = [
    {name: 'james', eng:88, math:78},
    {name: 'maria', eng:78, math:98},
    {name: 'brian', eng:81, math:79},
    {name: 'tommy', eng:68, math:76},
];

//영어의 오름차순
/* students.sort(function(a, b){
    return a.eng - b.eng;
}); */
//수학의 내림차순
// students.sort((a, b) => b.math - a.math);
//이름의 오름차순
students.sort(a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}

