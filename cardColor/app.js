document.addEventListener('DOMContentLoaded', function () {
    const colorOption = document.getElementById('colorOption');

    function changeColor() {
        const valueColorOption = colorOption.value;
        const elementsToChangeColor = document.querySelectorAll('.changeColor');

        elementsToChangeColor.forEach(function (element) {
            element.style.backgroundColor = valueColorOption;
        });
    }

    
    colorOption.addEventListener('input', changeColor);
});
