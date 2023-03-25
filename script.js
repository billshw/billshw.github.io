const staff = [
    'Staff 1',
    'Staff 2',
    // ... add all staff names
];

const gifts = [
    'Gift 1',
    'Gift 2',
    // ... add all gift items
];

const drawBtn = document.getElementById('draw-btn');
const result = document.getElementById('result');
const logs = document.getElementById('logs');

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

drawBtn.addEventListener('click', () => {
    const luckyStaff = getRandomItem(staff);
    const luckyGift = getRandomItem(gifts);

    result.innerHTML = `${luckyStaff} wins ${luckyGift}`;

    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `${new Date().toLocaleString()}: ${luckyStaff} won ${luckyGift}`;
    logs.prepend(logEntry);
});
