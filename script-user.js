// script-user.js

document.addEventListener('DOMContentLoaded', () => {
    const bookButton = document.getElementById('book-individual');

    // Пример функции для записи на индивидуальную тренировку
    bookButton.addEventListener('click', () => {
        alert('Вы успешно записались на индивидуальную тренировку!');
    });
});