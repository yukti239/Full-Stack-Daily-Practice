```javascript
function convertTemperature() {
    let celsius = Number(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("result").innerHTML =
        "Temperature in Fahrenheit: " + fahrenheit + "°F";
}
```
