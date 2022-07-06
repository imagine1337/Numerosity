var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = document.body.clientWidth - 24;
canvas.height = document.body.clientHeight - 24;
txtbox = document.getElementById('txtBox');
inpbox = document.getElementById('inputBox');

scores = [];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    txtbox.innerHTML = '<input type="text" id="inputBox"></input> <br /> <button onclick="evalGuess()">Guess</button>';
}

function clearCanvas() {
    canvas.width = 0
    canvas.height = 0
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function randint(n) {
    return Math.floor(Math.random() * n)
}

function dropMatch() {
    x = randint(canvas.width)
    y = randint(canvas.height)
    n0 = randint(72)
    n1 = randint(72)
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + n0, y + n1)
    ctx.strokeStyle = '#ffbb00'
    ctx.lineWidth = 3
    ctx.stroke()
}

function dropMatches(n) {
    for (let i = 0; i <= n; i++) {
        console.log('test');
        dropMatch();
    }
    setTimeout(draw, 3000)
}

let n2 = Math.floor(Math.random() * 102);

function evalGuess() {
    guess = parseInt(document.getElementById('inputBox').value)
    clearCanvas()
    txtbox.innerHTML = `<h1 id="ans">Answer: ${n2-1}</h1> <br /> <h1 id="ans">Guess: ${guess}</h1> <br /> <h1 id="ans">Difference: ${Math.abs(guess-(n2-1))}</h1>`
}

console.log(n2)
dropMatches(n2)
