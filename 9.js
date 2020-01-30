function addWeek(weeks){
    var weeks;
    var now = new Date();
now.setDate(now.getDate() + (weeks * 7));
return now;
}

console.log(addWeek(3));
console.log(addWeek(10));