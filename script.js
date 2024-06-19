// 
let celciusInput = document.querySelector("#celcius > input");
let fahreinheitInput = document.querySelector("#fahrenheit > input");
let kelvinInput = document.querySelector("#kelvin > input");

let btn = document.querySelector(".button")

function roundNumber(number) {
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function{
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp*(9.5)) + 32;
    let kTemp = cTemp + 273.15;

    fahreinheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})
fahreinheitInput.addEventListener('input', function{
    let fTemp = parseFloat(fahreinheitInput.value);
    let cTemp = ftemp -32 * (5/9);
    let kTemp = fTemp -32 * (5/9) + 273.15;

    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})
kelvinInput.addEventListener('input', function{
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = ktemp -273;
    let fTemp = kTemp -2723 * (9 / 5) +32 ;

    celciusInput.value = roundNumber(cTemp);
    fahreinheitInput.value = roundNumber(fTemp);
})

btn.addEventListener("click", ()=> {
    celciusInput.value = ""
    fahreinheitInput.value=""
    kelvinInput.value=""
})