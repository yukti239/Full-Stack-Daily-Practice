```javascript
function calculateFactorial() {
    let n = Number(document.getElementById("number").value);

    let factorial = 1;
    let i = 1;

    while (i <= n) {
        factorial = factorial * i;
        i++;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + n + " is " + factorial;
}
```
