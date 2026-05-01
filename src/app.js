import Chart from 'chart.js/auto';
import { error, success, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'; // Обов'язково для відображення!

defaults.delay = 1000;

const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let current = 0;

const el = document.querySelector('#key');
const btn = document.querySelector('#new-game');

const setKey = () => {
    if (el) el.textContent = keys[current];
};

window.addEventListener('keydown', ({ key }) => {
    const pressed = key.toLowerCase();
    if (!keys.includes(pressed)) return;

    if (pressed === keys[current]) {
        current = Math.floor(Math.random() * keys.length);
        setKey();
        success({ text: "Правильно!" });
    } else {
        error({ text: "Спробуй ще раз!" });
    }
});

if (btn) {
    btn.onclick = () => {
        current = Math.floor(Math.random() * keys.length);
        setKey();
        success({ text: "Гру оновлено" });
    };
}

setKey();


//================================================
import Chart from 'chart.js/auto';

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

new Chart(document.getElementById('sales-chart'), {
  type: 'line',
  data: chartData
});