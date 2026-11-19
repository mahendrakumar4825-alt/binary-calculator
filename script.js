
let lastResult = null;

function parseBase(value, base) {
    value = value.trim().toUpperCase();

    if (!value) {
        throw new Error("Please enter a number.");
    }

    let digits = "0123456789ABCDEF";
    let result = 0n;
    let sign = 1n;

    if (value.startsWith("-")) {
        sign = -1n;
        value = value.slice(1);
    }

    if (!value) {
        throw new Error("Invalid number.");
    }

    for (let char of value) {
        let digit = digits.indexOf(char);

        if (digit < 0 || digit >= base) {
            throw new Error(
                `Invalid digit "${char}" for base ${base}.`
            );
        }

        result = result * BigInt(base) + BigInt(digit);
    }

    return result * sign;
}

function calculate() {

    const errorBox = document.getElementById("error");
    errorBox.innerText = "";

    try {
        let base = Number(
            document.getElementById("inputBase").value
        );

        let outputBase = Number(
            document.getElementById("outputBase").value
        );

        let a = parseBase(
            document.getElementById("num1").value, base
        );

        let b = parseBase(
            document.getElementById("num2").value, base
        );

        let operation =
            document.getElementById("operation").value;

        let result;

        switch (operation) {

            case "add":
                result = a + b;
                break;

            case "sub":
                result = a - b;
                break;

            case "mul":
                result = a * b;
                break;

            case "div":
                if (b === 0n) {
                    throw new Error("Cannot divide by zero.");
                }
                result = a / b;
                break;

            case "and":
                result = a & b;
                break;

            case "or":
                result = a | b;
                break;

            case "xor":
                result = a ^ b;
                break;

            case "lshift":
            case "rshift":

                if (b < 0n || b > 1024n) {
                    throw new Error(
                        "Shift value must be between 0 and 1024."
                    );
                }

                result = operation === "lshift"
                    ? a << b
                    : a >> b;

                break;

            default:
                throw new Error("Invalid operation.");
        }

        lastResult = result;

        // Selected number system result
        document.getElementById("result").innerText =
            result.toString(outputBase).toUpperCase();

        document.getElementById("resultBaseLabel").innerText =
            getBaseName(outputBase);

        // Display all number system results
        document.getElementById("binaryResult").innerText =
            result.toString(2);

        document.getElementById("decimalResult").innerText =
            result.toString(10);

        document.getElementById("octalResult").innerText =
            result.toString(8);

        document.getElementById("hexResult").innerText =
            result.toString(16).toUpperCase();

    } catch (error) {
        errorBox.innerText = error.message;
        lastResult = null;
    }
}

function getBaseName(base) {
    const names = {
        2: "BINARY",
        8: "OCTAL",
        10: "DECIMAL",
        16: "HEXADECIMAL"
    };

    return names[base];
}

function clearAll() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerText = "0";

    document.getElementById("binaryResult").innerText = "0";
    document.getElementById("decimalResult").innerText = "0";
    document.getElementById("octalResult").innerText = "0";
    document.getElementById("hexResult").innerText = "0";

    document.getElementById("error").innerText = "";

    lastResult = null;
}

function swapNumbers() {

    let first = document.getElementById("num1");
    let second = document.getElementById("num2");

    let temp = first.value;

    first.value = second.value;
    second.value = temp;
}

function copyResult() {

    if (lastResult === null) {
        document.getElementById("error").innerText =
            "Please calculate a result first.";
        return;
    }

    let base = Number(
        document.getElementById("outputBase").value
    );

    let value = lastResult.toString(base);

    navigator.clipboard.writeText(value).then(() => {
        document.getElementById("resultBaseLabel").innerText =
            getBaseName(base) + " - COPIED!";
    }).catch(() => {
        document.getElementById("error").innerText =
            "Copy is unavailable in this browser.";
    });
}
