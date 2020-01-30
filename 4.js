function calcCircumference (radius){
    var circumferenceCalculation = (2 * 3.172 * radius);
    console.log("The circumference is " + circumferenceCalculation.toFixed(3));
}
function calcArea (radius){
    var circumferenceCalculation2 = (3.172 * (radius*radius));
    console.log("The Area is " +circumferenceCalculation2.toFixed(3));
}

calcCircumference(3.3555);
calcArea(2.2111);