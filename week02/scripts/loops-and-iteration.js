const DAYS = 6;
const curDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 1; i <= DAYS; i++) {
    let nextDay = new Date();

    nextDay.setDate(curDate.getDate()+i);
    let nextDayString = new Intl.DateTimeFormat('en-US',{weekday: 'long'}).format(nextDay);
    console.log(nextDayString);
}

const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i=0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while (i <= studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}