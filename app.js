const time = document.querySelector('#time');
const today = document.querySelector('#today');
const thisMonth = document.querySelector('#thisMonth');
const Switch = document.querySelector('#switch');
const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');

let banglaArr = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function displayDateBangla() {
    title1.innerHTML = 'আজ';
    title2.innerHTML = 'সময়';
    let d = new Date();
    let arrDay = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    let arrMonth = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    let day = d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let datebangla = calculateBanglaTime(date);
    let year = d.getFullYear();
    let yearBangla = calculateBanglaTime(year);
    let dateFormat = ` ${arrDay[day]},
      ${datebangla} ${arrMonth[month]}, ${yearBangla} `;
    today.innerHTML = dateFormat;
}

function displayDateEnglish() {
    title1.innerHTML = 'Today';
    title2.innerHTML = 'Time';
    let d = new Date();
    let arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();
    let dateFormat = ` ${arrDay[day]},
      ${date} ${arrMonth[month]}, ${year} `;
    today.innerHTML = dateFormat;
}


function digitalClock() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let result = '';
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (Switch.checked == false) {
        displayDateEnglish();
        if (hours <= 12) {
            result = `${hours} : ${minutes} : ${seconds} AM`;
            time.innerHTML = result;
        } else {
            result = `0${hours - 12} : ${minutes} : ${seconds} PM`;
            time.innerHTML = result;
        }
    } else {
        displayDateBangla();
        if (hours <= 12) {
            let resultedHours = calculateBanglaTime(hours);
            let resultedMinutes = calculateBanglaTime(minutes);
            let resultedSeconds = calculateBanglaTime(seconds);
            result = `0${resultedHours} : ${resultedMinutes} : ${resultedSeconds} অপরাহ্ন`;
            time.innerHTML = result;
        } else if (hours < 18 && hours > 12) {
            let resultedHours = calculateBanglaTime(hours - 12);
            let resultedMinutes = calculateBanglaTime(minutes);
            let resultedSeconds = calculateBanglaTime(seconds);
            result = `0${resultedHours} : ${resultedMinutes} : ${resultedSeconds} মধ্যাহ্ন`;
            time.innerHTML = result;
        } else {
            let resultedHours = calculateBanglaTime(hours - 12);
            let resultedMinutes = calculateBanglaTime(minutes);
            let resultedSeconds = calculateBanglaTime(seconds);
            result = `0${resultedHours} : ${resultedMinutes} : ${resultedSeconds} অপরাহ্ন`;
            time.innerHTML = result;
        }
    }
}
time.innerHTML = digitalClock();
setInterval(digitalClock, 10);

function calculateBanglaTime(value) {
    let arrValue = [];
    let strValue = String(value);
    arrValue = strValue.split('');
    let valueBangla = '';
    for (let i = 0; i < arrValue.length; i++) {
        let temp = Number(arrValue[i]);
        valueBangla += banglaArr[temp];
    }
    return valueBangla;
}