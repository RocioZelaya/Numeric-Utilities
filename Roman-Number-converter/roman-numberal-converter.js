document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const inputField = document.getElementById("input");
    const resultOutput = document.getElementById("result");

    convertBtn.addEventListener("click", () => {
        const input = inputField.value.trim();
        let output = "";

        if (/^\d+$/.test(input)) {
            const arabicNumber = parseInt(input, 10);
            if (arabicNumber >= 1 && arabicNumber <= 3999) {
                output = convertToRoman(arabicNumber);
            } else {
                output = "Invalid Input";
            }
        } else {
            output = convertToArabic(input.toUpperCase());
            if (output === -1) {
                output = "Invalid Input";
            }
        }

        resultOutput.textContent = output;
    });

    function convertToRoman(num) {
        const romanNumerals = [
            { value: 1000, numeral: "M" },
            { value: 900, numeral: "CM" },
            { value: 500, numeral: "D" },
            { value: 400, numeral: "CD" },
            { value: 100, numeral: "C" },
            { value: 90, numeral: "XC" },
            { value: 50, numeral: "L" },
            { value: 40, numeral: "XL" },
            { value: 10, numeral: "X" },
            { value: 9, numeral: "IX" },
            { value: 5, numeral: "V" },
            { value: 4, numeral: "IV" },
            { value: 1, numeral: "I" }
        ];

        let roman = "";
        for (const pair of romanNumerals) {
            while (num >= pair.value) {
                roman += pair.numeral;
                num -= pair.value;
            }
        }
        return roman;
    }
    function convertToArabic(roman) {
        const romanNumerals = {
            "I": 1, "IV": 4, "V": 5, "IX": 9, "X": 10,
            "XL": 40, "L": 50, "XC": 90, "C": 100,
            "CD": 400, "D": 500, "CM": 900, "M": 1000
        };

        let result = 0;
        for (let i = 0; i < roman.length; i++) {
            if (i < roman.length - 1 && romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
                result -= romanNumerals[roman[i]];
            } else {
                result += romanNumerals[roman[i]];
            }
        }

        return result;
    }
});
