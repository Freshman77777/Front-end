const birthYear = 1995;
const birthMonth = 04;
const birthDay = 09;

const today = new Date();
const toYear = today.getFullYear();
const toMonth = today.getMonth();
const toDay = today.getDate();

let fullAge;
if (birthMonth < toMonth) {
    fullAge = toYear - birthYear;
}   else if (birthMonth > toMonth) {
    fullAge = toYear - birthYear - 1;    
} else {                    // 생월과 현재월이 같은 경우
    if (birthDay <= toDay) {
        fullAge = toYear - birthYear;
    } else {
        fullAge = toYear - birthYear - 1;
    }
}    
    
console.log(`생년월일: ${birthYear}-${(birthMonth<10)?'0'+birthMonth:birthMonth}-${(birthDay<10)?'0'+birthDay:birthDay}`);
console.log(`오늘날짜: ${toYear}-${(toMonth<10)?'0'+toMonth:toMonth}-${(toDay<10)?'0'+toDay:toDay}`);
console.log(`만나이: ${fullAge}`);