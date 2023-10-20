document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        checkAge();
    });

    function checkAge() {
        const birthdate = new Date(document.getElementById("birthdate").value);
        const today = new Date();
        const legalAgeColombia = 18;
        const age = today.getFullYear() - birthdate.getFullYear();

        
        if (age >= legalAgeColombia) {
            result.textContent = "Eres mayor de edad.";
        } else {
            result.textContent = "No eres mayor de edad";
        }
    }
});
