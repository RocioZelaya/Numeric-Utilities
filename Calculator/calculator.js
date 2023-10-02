
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerText;

        switch (buttonText) {
            case "=":
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = "Error";
                }
                break;
            case "C":
                result.value = "";
                break;
            default:
                result.value += buttonText;
        };
    })
})
