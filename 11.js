function isVowel (){
    var input = prompt("Enter a vowel");
    return input.toLowerCase();
}

function checkVowel (vowel){
    switch(vowel){
        case "a":
        console.log("Input is vowel");
        break;

        case "e":
        console.log("Input is vowel");
        break;

        case "i":
        console.log("Input is vowel");
        break;

        case"o":
        console.log("Input is vowel");
        break;

        case"u":
        console.log("Input is vowel");
        break;

        default:
        console.log("This is not vowel");
        break;
    }
}

checkVowel(isVowel());