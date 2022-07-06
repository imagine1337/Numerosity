var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = document.body.clientWidth - 24;
canvas.height = document.body.clientHeight - 24;
txtbox = document.getElementById('txtBox');
inpbox = document.getElementById('inputBox');

scores = [];

const average = (array) => array.reduce((a, b) => a + b) / array.length;

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
    txtbox.innerHTML = ''
    x = randint(canvas.width)
    y = randint(canvas.height)
    n0 = randint(72)
    n1 = randint(72)
    ctx.beginPath()
    ctx.arc(x, y, 9, 0, Math.PI * 2, false)
    ctx.fillStyle = '#ffffff'
    ctx.fill();
    ctx.closePath()
    ctx.stroke()
}

function dropMatches(n) {
    for (let i = 0; i <= n; i++) {
        console.log('test');
        dropMatch();
    }
    setTimeout(draw, 3000)
}

function nn2() {
    n2 = Math.floor(Math.random() * 102)
}

function evalGuess() {
    guess = parseInt(document.getElementById('inputBox').value)
    clearCanvas()
    scores.push(Math.abs(guess - (n2 + 1)))
    txtbox.innerHTML = `<div id="answers"><h1 id="ans">Answer: ${n2+1}</h1> <br /> <h1 id="ans">Guess: ${guess}</h1> <br /> <h1 id="ans">Difference: ${Math.abs(guess-(n2+1))}</h1> <br /> <h1 id="ans">Score: ${average(scores)}</h1></div>`
    nn2()
    canvas.width = document.body.clientWidth - 24;
    canvas.height = document.body.clientHeight - 24;
    setTimeout(dropMatches, 5400, n2)
}

let n2 = Math.floor(Math.random() * 102);

dropMatches(n2)
