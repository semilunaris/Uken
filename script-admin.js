// script-admin.js

document.addEventListener('DOMContentLoaded', () => {
    const bookIndividualButton = document.getElementById('book-individual-admin');
    const todayWorkoutsList = document.getElementById('today-workouts');
    const debtsList = document.getElementById('debts-list');
    const statisticsDiv = document.getElementById('admin-statistics');
    const groupList = document.getElementById('group-list');
    const tournamentTableContent = document.getElementById('tournament-table-content');

    // Пример функции для записи на индивидуальную тренировку
    bookIndividualButton.addEventListener('click', () => {
        alert('Вы успешно записали клиента на индивидуальную тренировку!');
    });

    // Пример функции для загрузки списка тренировок на сегодня
    function loadTodayWorkouts() {
        // Заменить этот код на реальное получение данных
        todayWorkoutsList.innerHTML = `
            <li>17.00 - 18.00 Группа 14+ (Будет 3 человека)</li>
            <li>19.00 - 20.00 Группа 20 (Будет 5 человек)</li>
        `;
    }

   

    // Вызов функций загрузки данных
    loadTodayWorkouts();
    loadDebts();
    loadStatistics();
    loadGroups();
    loadTournamentTable();
});