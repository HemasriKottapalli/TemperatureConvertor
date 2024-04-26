const input = document.getElementById('input');
const toCelcius = document.getElementById('toCel');
const toFahrenheit = document.getElementById('toFah');
const output = document.getElementById('output');

function convert(){
    let value = input.value;

    if(toCelcius.checked){
        let C = Math.round((value - 32) * 5/9);
        output.innerText = `${C}°C`;
        output.style.color = "green";
    }
    else if(toFahrenheit.checked){
        let F = Math.round((9/5)*value + 32);
        output.innerText = `${F}°F`;
        output.style.color = "green";
    }
    else{
        output.innerText = "Please select your preferred conversion first!";
        output.style.color = "red";
        output.style.fontSize = "15px";
    }
}