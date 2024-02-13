let clickCount = 0;

// Если появилось окно с кнопкой, то нажать
setInterval(function() {
    // Ищем модальное окно и кнопку внутри него
    let modal = document.querySelector('.modal-dialog.modal-dialog-scrollable[data-region="modal"]');
    let button = modal ? modal.querySelector('button.btn.btn-primary[data-action="save"]') : null;

    // Нажать на кнопку
    if (modal && button) {
        button.click();
        clickCount++;

        // Удалить окно
        let elementToRemove = document.querySelector('.modal-backdrop');
        if (elementToRemove) {
            elementToRemove.remove();
        }
    }
    // Программа пока не может нажимать больше 2 раз. Вместо этого перезагружается страница
    if (clickCount >= 3) {
        location.reload();
    }
}, 500);