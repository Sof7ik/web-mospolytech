function openCloseModal(event, modal) {
    modal.classList.toggle("showed");
}

function sendRegisterForm(event) {
    event.preventDefault();

    const registerForm = event.currentTarget;
    const formData = new FormData(registerForm);

    console.table({
        "Пароль": formData.get("user-pass"),
        "Email": formData.get("user-login")
    });
}

function closeModalByClickingOverlay(event, modal) {
    if (event.target === event.currentTarget) {
        openCloseModal(event, modal)
    }
}

function showPass (event) {
    const showPassBtn = event.currentTarget;
    const form = showPassBtn.closest("form");
    const passInput = form.querySelector("[name='user-pass']");

    if (passInput.type === "text") {
        passInput.type = "password";
    }
    else {
        passInput.type = "text";
    }
}

function onInputBlur(event) {
    const input = event.currentTarget;
    const validState = input.validity;

    // console.dir(input)

    let errorMessage = "";
    if(validState.valueMissing) {
        errorMessage = "Поле не заполнено";
    }
    else if (validState.badInput) {
        errorMessage = "Поле заполнено неверно";
    }
    else if (validState.tooShort) {
        errorMessage = `Минимальная длина ${input.minLength} сим.`;
    }
    else if (validState.typeMismatch) {
        errorMessage = "Неправильный формат ввода";
    }
    else if (validState.valid) {
        errorMessage = "";
    }

    input.setCustomValidity(errorMessage);

    const wrapper = input.closest(".label-input-wrapper");
    const errorMsgElem = wrapper.querySelector(".error-message");

    errorMsgElem.textContent = errorMessage;

    // console.log(input.name, validState);
}

document.addEventListener("DOMContentLoaded", () => {
    // кнопка открытия модалки регистрации
    const registerBtn = document.querySelector("[data-open-register-modal]");

    // модалка регистрации
    const modal = document.querySelector(".modal-window");

    // Откртыие формы регистрации
    registerBtn.addEventListener("click", (e) => {
        openCloseModal(e, modal);
    });

    // клик по оверлею
    document.querySelector(".modal-window").addEventListener("click", (e) => {
        closeModalByClickingOverlay(e, modal);
    })

    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", sendRegisterForm);

    // показать пароль
    const showPassBtn = document.querySelector("[data-show-pass-btn]");
    showPassBtn.addEventListener("pointerup", showPass);
    showPassBtn.addEventListener("pointerdown", showPass);

    registerForm.querySelectorAll("input").forEach(input => {
        input.addEventListener("blur", onInputBlur);
    })
})