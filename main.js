    const form = document.getElementById("numeric-form");
    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    const message = document.getElementById("message");
    const submitButton = document.getElementById("submitButton")

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const valueA = parseFloat(campoA.value);
        const valueB = parseFloat(campoB.value);

        if (valueB > valueA) {
            message.textContent = "Formulário válido! B é maior que A.";
            message.style.color = "green";
        } else {
            message.textContent = "Formulário inválido! B deve ser maior que A.";
            message.style.color = "red";
        }
    });

