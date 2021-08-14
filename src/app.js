const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = parseInt(winningScoreSelect.value);

p1.button.addEventListener('click', (event) => {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', (event) => {
    updateScore(p2, p1);
});

resetButton.addEventListener('click', (event) => {
    reset();
});

winningScoreSelect.addEventListener('change', (event) => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
});

const reset = () => {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.button.classList.remove('disabled');
        p.display.classList.remove('text-success', 'text-danger');
    }
};

const updateScore = (player, opponent) => {
    player.score += 1;
    player.display.innerText = player.score;
    if (player.score == winningScore) {
        endGame(player, opponent);
    }
};

const endGame = (winner, loser) => {
    winner.display.classList.add('text-success');
    loser.display.classList.add('text-danger');
    winner.button.classList.add('disabled');
    loser.button.classList.add('disabled');
};