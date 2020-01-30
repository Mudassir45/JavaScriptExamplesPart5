function isWeekend(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
    else {
        return "Not a weekend";
    }
}

console.log(isWeekend('Nov 22, 2019'));