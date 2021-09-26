const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const message = document.querySelector("#message");

function calculateDobSum(dob){
    let sum = 0;
    for(var i=0; i<dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener("click", function isBirthDayLucky(){
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    const sum = calculateDobSum(dob);
    if(Number(luckyNumber.value) && dob)
    {
        if(sum % Number(luckyNumber.value) === 0)
        {
            message.innerText = "Hurrey! Your Birthday is Lucky 😋";
        }
        else
        {
            message.innerText = "aayoo! Your Birthday is not Lucky😛 ";
        }
    }
    else 
    {
        message.innerText = "oops! First Enter the details ";
    }
});