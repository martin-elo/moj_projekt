

// 1) vytvor funkciu calculatorBMI
// 2) nájdeme si v HTML kode inputy a uložíme do premenných
//3) výpočet BMI zobraziť na HTML - cielove miesto.: <span class="value"></span>   
//4) použiť plošticu (addEventListener) na button a zavolať funkciu calculatorBMI
//5) premazať inputy po vypočítaní






//calculatorBMI

function calculatorBMI(weight, height) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    return Math.round(bmi);
}

// --------------
// HLAVNY PROGRAM

    const form = document.querySelector('#bmiForm');
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = calculatorBMI(weight, height);
    document.querySelector('.value').textContent = bmi;


// form.addEventListener('submit', function (event)  {
//     event.preventDefault();

//     if (weight <= 0 || height <= 0) {
//         calculatorBMI(weight, height);  
        
//         weight.value = '';
//         height.value = '';
//     }
// })

    // zobrazenie správy podľa BMI 
    let statusElement = document.querySelector(".status");
    let descriptionElement = document.querySelector(".bmi-description p");
    if (bmi < 18.5) {
        statusElement.textContent = "Podváha";
        descriptionElement.textContent = "Tvoj BMI index naznačuje podváhu. Skús si dopriať viac zdravých receptov!";
    } else if (bmi >= 18.5 && bmi < 25) {
        statusElement.textContent = "Normálna hmotnosť";
        descriptionElement.textContent = "Tvoj BMI index je v norme. Vychutnávaj si recepty bez obmedzení.";
    } else if (bmi >= 25 && bmi < 30) {
        statusElement.textContent = "Nadváha";
        descriptionElement.textContent = "Tvoj BMI index naznačuje nadváhu. Môžeš si vybrať zdravšie recepty!";
    } else {
        statusElement.textContent = "Obezita ";
        descriptionElement.textContent = "Tvoj BMI index naznačuje obezitu. Skús sa zamerať na zdravšie voľby.";
    }



