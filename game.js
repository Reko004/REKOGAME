const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let cars = {
    player1: { x: 100, y: 500, color: 'red' },
    player2: { x: 100, y: 550, color: 'blue' }
};

function drawCars() {
    Object.values(cars).forEach(car => {
        ctx.fillStyle = car.color;
        ctx.fillRect(car.x, car.y, 40, 20);
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCars();
    requestAnimationFrame(update);
}

update();
