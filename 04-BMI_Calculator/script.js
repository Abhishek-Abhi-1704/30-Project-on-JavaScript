let calcBMI = () => {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    if(weight <= 0 || height <= 0){
        document.getElementById("res").textContent ="Please enter valid values";
         return;
    }
    let bmi = weight/(height*height);
    let cat= catagory(bmi);
    document.getElementById("res").innerHTML = `BMI = ${bmi.toFixed(2)} <br> catagory = ${cat}`
}

let catagory=(bmi)=>{
    if(bmi <= 18.5){
        return "underweighted"
    }else if(bmi>18.5 && bmi <= 24.9){
        return "normal weight"
    }else if(bmi>24.9 && bmi <= 29.9){
        return "over weight"
    }else{
        return "obese"
    }
}