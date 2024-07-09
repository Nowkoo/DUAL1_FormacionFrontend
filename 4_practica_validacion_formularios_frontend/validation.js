let numAficionesInput = document.querySelector("#hobbies-number");
let checkboxes = document.querySelectorAll(".hobbies");
let invalidAficionesMessage = document.createElement("p");
invalidAficionesMessage.setAttribute("id", "aficionesMessage");

setNumAficionesInputListener();
setCheckboxChangeListener();
setFormSubmitListener()
handleCheckboxes();

function setNumAficionesInputListener() {
    numAficionesInput.addEventListener("input", (event)=> {
        handleCustomValidity();
        handleCheckboxes();
    })
}

function setCheckboxChangeListener() {
    checkboxes.forEach((checkbox)=> {
        checkbox.addEventListener("change", (event)=> {
            handleCheckboxes();
        })
    })
}

function setFormSubmitListener() {
    document.querySelector("#form").addEventListener("submit", (event)=> {
        let checkedAmount = countSelectedCheckboxes();
    
        if (numAficionesInput.value != checkedAmount) {
            aficionesShowErrorMessage();
            aficionesChangeLegendColor();
            event.preventDefault();
        }
    })
}

function handleCustomValidity() {
    if (numAficionesInput.validity.rangeOverflow || numAficionesInput.validity.rangeUnderflow) {
        numAficionesInput.setCustomValidity("Debes elegir un número entre 2 y 4");
    } else {
        numAficionesInput.setCustomValidity("");
    }
}

function handleCheckboxes() {
    let checkedAmount = countSelectedCheckboxes();
    if (numAficionesInput.value == checkedAmount) {
        disableUncheckedCheckboxes();
        aficionesRemoveErrorMessage();
        aficionesRemoveLegendColor();
    } else if (numAficionesInput.value < checkedAmount) {
        disableUncheckedCheckboxes();
    } else {
        enableDisabledCheckboxes();
    }
}

function aficionesShowErrorMessage() {
    let aficionesFieldset = document.querySelector("#aficionesFieldset");
    aficionesFieldset.insertAdjacentElement("afterend", invalidAficionesMessage);
    invalidAficionesMessage.textContent = `Debes seleccionar ${numAficionesInput.value} aficiones.`;
}

function aficionesRemoveErrorMessage() {
    let invalidAficionesError = document.querySelector("#aficionesMessage");
    if (invalidAficionesError) invalidAficionesError.remove();
}

function aficionesChangeLegendColor() {
    let aficionesFieldset = document.querySelector("#aficionesFieldset").querySelector("legend");
    aficionesFieldset.classList.add("red");
}

function aficionesRemoveLegendColor() {
    let aficionesFieldset = document.querySelector("#aficionesFieldset").querySelector("legend");
    aficionesFieldset.classList.remove("red");
}

function countSelectedCheckboxes() {
    let checkboxes = document.querySelectorAll(".hobbies");
    let checkedAmount = 0;
    checkboxes.forEach((checkbox)=> {
        if (checkbox.checked) {
            checkedAmount++;
        }
    })
    return checkedAmount;
}

function disableUncheckedCheckboxes() {
    let checkboxes = document.querySelectorAll(".hobbies");
    checkboxes.forEach((checkbox)=> {
        if (!checkbox.checked) {
            checkbox.setAttribute("disabled", "true");
        }
    })
}

function enableDisabledCheckboxes() {
    let checkboxes = document.querySelectorAll(".hobbies");
    checkboxes.forEach((checkbox)=> {
        if (checkbox.disabled) {
                checkbox.removeAttribute("disabled");
        }
    })
}