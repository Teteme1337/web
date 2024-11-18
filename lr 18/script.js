document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const birthdayInput = document.getElementById('birthday');
    const messageInput = document.getElementById('message');
    const button = document.querySelector('button');

    nameInput.addEventListener('input', () => {
        let value = nameInput.value;
        let parts = value.split(' ').filter(part => part !== '');
        if (parts.length > 2 || (parts[1] && parts[1].length < 3)) {
            nameInput.setCustomValidity('Имя и фамилия должны состоять из двух слов, каждое от 3 до 30 символов');
        } else {
            let valid = parts.every(part => /^[A-Za-z]{3,30}$/.test(part));
            nameInput.setCustomValidity(valid && parts.length === 2 ? '' : 'Некорректный формат имени и фамилии');
        }
        nameInput.reportValidity();
    });

    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailInput.setCustomValidity(emailPattern.test(emailInput.value) ? '' : 'Некорректный email');
        emailInput.reportValidity();
    });

    phoneInput.addEventListener('input', (e) => {
        const phonePattern = /^\+375\s\((29|33|44|25)\)\s\d{3}-\d{2}-\d{2}$/;
        let value = phoneInput.value.replace(/\+375\s?\(|\D/g, '');
        if (e.inputType === 'deleteContentBackward') {
            const currentCursorPosition = phoneInput.selectionStart;
            if (currentCursorPosition <= 6) {
                phoneInput.value = `+375 (`;
            } else {
                phoneInput.value = phoneInput.value;
            }
            return;
        }
        if (value.length > 9) {
            value = value.slice(0, 9);
        }
        if (value.length >= 7) {
            value = `+375 (${value.slice(0, 2)}) ${value.slice(2, 5)}-${value.slice(5, 7)}-${value.slice(7)}`;
        } else if (value.length >= 5) {
            value = `+375 (${value.slice(0, 2)}) ${value.slice(2, 5)}-${value.slice(5)}`;
        } else if (value.length >= 2) {
            value = `+375 (${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `+375 (${value}`;
        }
        phoneInput.value = value;
        phoneInput.setCustomValidity(phonePattern.test(phoneInput.value) ? '' : 'Некорректный номер телефона');
        phoneInput.reportValidity();
    });

    console.log(phoneInput.checkValidity());

    birthdayInput.setAttribute('max', new Date().toISOString().split('T')[0]);
    birthdayInput.addEventListener('input', () => {
        if (birthdayInput.value) {
            birthdayInput.classList.add('has-value');
        } else {
            birthdayInput.classList.remove('has-value');
        }
    });

    messageInput.addEventListener('input', () => {
        messageInput.setCustomValidity(messageInput.value.length >= 10 && messageInput.value.length <= 300 ? '' : 'Сообщение должно быть от 10 до 300 символов');
        messageInput.reportValidity();
    });

    button.addEventListener('click', () => {
        let check = 0;
        check += nameInput.checkValidity() ? 0 : 1;
        check += emailInput.checkValidity() ? 0 : 1;
        check += phoneInput.checkValidity() ? 0 : 1;
        check += birthdayInput.checkValidity() ? 0 : 1;
        check += messageInput.checkValidity() ? 0 : 1;
        console.log(check);

        if (check == 0) {
            alert('Готово!');
            location.reload();
        } else if (check == 1) {
            nameInput.reportValidity();
            emailInput.reportValidity();
            phoneInput.reportValidity();
            birthdayInput.reportValidity();
            messageInput.reportValidity();
        } else {
            alert('Заполните все поля!');     
        }
    });
});