const staff = [
    'Bill',
    'SWP',
    'Car',
    'SBP',
    'ballball',
    'Maison',
    'Chris Wong',
    'John Tam',
    // ... add all staff names
];

const gifts = [
    'PS5',
    'BOSE',
    '100$ CASH',
    'PS4..',
    'Macbook',
    'Airpods',
    'Homepod',
    'iphone17',
    'Switch',
    // ... add all gift items
];




const drawBtn = document.getElementById('draw-btn');
const result = document.getElementById('result');
const logs = document.getElementById('logs');
const fireworksCanvas = document.getElementById("fireworks");

fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;
const fireworks = new Fireworks();

function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    array.splice(index, 1); // Remove the item from the array
    return item;
}

function animationLoop() {
    const ctx = fireworksCanvas.getContext("2d");
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    fireworks.update(ctx);
    requestAnimationFrame(animationLoop);
}

drawBtn.addEventListener("click", () => {
    if (staff.length === 0 || gifts.length === 0) {
        alert("No more staff members or gifts available.");
        return;
    }

    const luckyStaff = getRandomItem(staff);
    const luckyGift = getRandomItem(gifts);

    result.innerHTML = `${luckyStaff} wins ${luckyGift}`;

    const logEntry = document.createElement("div");
    logEntry.className = "log-entry";
    logEntry.innerHTML = `${new Date().toLocaleString()}: ${luckyStaff} won ${luckyGift}`;
    logs.prepend(logEntry);

    animationLoop();
});

function downloadLogs() {
    const logEntries = Array.from(logs.children);
    let logContent = '';
    
    logEntries.forEach(entry => {
        logContent += entry.textContent + '\n';
    });

    const logBlob = new Blob([logContent], { type: 'text/plain' });
    const logURL = URL.createObjectURL(logBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = logURL;
    downloadLink.download = 'logs.txt';
    downloadLink.click();

    URL.revokeObjectURL(logURL);
}

const exportLogsBtn = document.createElement('button');
exportLogsBtn.innerText = 'Export Logs';
exportLogsBtn.addEventListener('click', downloadLogs);
document.body.appendChild(exportLogsBtn);
