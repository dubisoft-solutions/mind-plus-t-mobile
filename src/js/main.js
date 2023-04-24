//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.slim.min.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js


$(function() {
    initFormValidation();
    initInputPinControl(".input-pin-control");
});

function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => genericFormsValidation(event, form));
    })
}

function validateFormWithDismissibleAlerts(event, form) {
    event.preventDefault()
    event.stopPropagation()

    if (form.checkValidity()) {
        // TODO: send request to server

        // cleanup the data
        form.reset();
        form.classList.remove('was-validated');

        const confirmationModal = new bootstrap.Modal(document.getElementById('requestAcceptedModal'));
        if (confirmationModal) {
            confirmationModal.show();
        }
    } else {
        form.classList.add('was-validated');
    }
}


function genericFormsValidation(event, form) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
}


function initInputPinControl(selector) {
    const inputPinControls = document.querySelectorAll(selector);
    inputPinControls.forEach(pinControl => {
        const inputs = pinControl.querySelectorAll('.pin-input');
        let focusedIndex = -1;

        inputs.forEach((input, key) => {
            input.addEventListener("paste", (event) => {
                event.preventDefault();
            });

            input.addEventListener("click", function() {
                let inputFocused = false;
                for (let key = 0; key < inputs.length; key++) {
                    let input = inputs[key];
                    if (!input.value) {
                        inputs[key].focus();
                        focusedIndex = key;
                        inputFocused = true;
                        break;
                    }
                }
                if (!inputFocused) {
                    inputs[inputs.length - 1].focus();
                    focusedIndex = inputs.length - 1;
                }
            });
            input.addEventListener("keydown", function(event) {
                if (event.keyCode == 8) {
                    if (!input.value && key > 0) {
                        inputs[key - 1].focus();
                        focusedIndex = key - 1;
                    }
                }
            })
            input.addEventListener("keyup", function() {
                if (input.value) {
                    if (key + 1 < inputs.length) {
                        inputs[key + 1].focus();
                        focusedIndex = key + 1;
                    }
                }
            });
        });

        pinControl.addEventListener("paste", (event) => {
            let paste = (event.clipboardData || window.clipboardData).getData("text");
            if (paste.length == 0) return;

            if (focusedIndex == -1) {
                focusedIndex = 0;
            }

            let i = focusedIndex;
            while (i < inputs.length && i < paste.length) {
                inputs[i].value = paste[i];
                i++;
            }

            if (i < inputs.length) {
                inputs[i].focus();
            } else {
                inputs[inputs.length - 1].focus();
            }
        });
    })
}