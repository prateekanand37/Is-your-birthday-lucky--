const dateofBirth=document.querySelector("#date-of-birth")
const luckyNumber=document.querySelector("#lucky-number")
const buttonCheck=document.querySelector("#check-number")
const outputText=document.querySelector(".output-text")

function luckyBirthday(){ 
    dob=dateofBirth.value
    const sum=calculateSum(dob);
    if(dob&&sum){
        compareValues(sum,luckyNumber)
    }
    else{
        outputText.innerText="Enter both."
    }
    }

     function compareValues(sum,luckyNumber){
    if(sum%luckyNumber.value===0){
        outputText.innerText="Your birthday is lucky."
        
    }
    else{
         outputText.innerText="Your birthday is not lucky."
     
    
    }
    }
    function calculateSum(dob){
    dob=dob.replaceAll("-","")
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i))
    }
    return sum;
}
    buttonCheck.addEventListener("click", luckyBirthday) 