const playbtn = document.getElementById('playbtn');
const player1input = document.getElementById('player1input');
const player2input = document.getElementById('player2input');
const diff = document.getElementById('diff');
const insbtn = document.getElementById('insbtn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const player1scoretext = document.getElementById('player1scoretext');
const player2scoretext = document.getElementById('player2scoretext');
const timertext = document.getElementById('timertext');
const xbtn = document.getElementById('xbtn');
const ins = document.getElementById('ins');
const pausemenu = document.getElementById('pausemenu');
const continuebtn = document.getElementById('continuebtn');
const countdownoutput = document.getElementById('countdownoutput');
const gameoverview = document.getElementById('gameoverview');
const usn1output = document.getElementById('usn1output');
const score1output = document.getElementById('score1output');
const usn2output = document.getElementById('usn2output');
const savebtn = document.getElementById('savebtn');
const restartbtn = document.getElementById('restartbtn');
const score2output = document.getElementById('score2output');
const leaderboardbtn = document.getElementById('leaderboardbtn');
const leaderboardview = document.getElementById('leaderboardview');
const menubtn = document.getElementById('menubtn');

let isopen = true;
playbtn.disabled = true;

function checkButton() {
  let player1fill = player1input.value.trim() !== "";
  let player2fill = player2input.value.trim() !== "";

  playbtn.disabled = !(player1fill && player2fill);
}

player1input.addEventListener('input', checkButton);
player2input.addEventListener('input', checkButton);

playbtn.addEventListener('click', ()=>{
  checkPlayer(1);
  checkPlayer(2);
  menu.style.display = 'none';
  game.style.display = 'flex';
  startGame();
})

insbtn.addEventListener('click', ()=>{
  if(isopen === false){
    ins.style.display = 'block';
    isopen = true
  } else if(isopen === true){
    ins.style.display = 'none';
    isopen = false
  }
})

xbtn.addEventListener('click',()=>{
  ins.style.display = 'none';
  isopen = false
})

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && running === true){
    running = false;
    game.style.opacity = '50%';
    clearInterval(timerinterval);
    clearInterval(powerinterval);
    pausemenu.style.display = 'block';
  } else if (e.key === 'Escape' && running === false){
    pausemenu.style.display = 'none';
    game.style.opacity = '100%';
    countdownf();
    setTimeout(() => {
      running = true;
      loop();
      timerinterval = setInterval(() => {
        timer -= 1
      }, 1000);
      powerinterval = setInterval(()=>{
        makePower();
      }, 5000);
    }, 3000);
  }
});

continuebtn.addEventListener('click', ()=>{
    pausemenu.style.display = 'none';
    game.style.opacity = '100%';
    countdownf();
    setTimeout(() => {
      running = true;
      loop();
      timerinterval = setInterval(() => {
        timer -= 1
      }, 1000);
      powerinterval = setInterval(()=>{
        makePower();
      }, 5000);
    }, 3000);
})

restartbtn.addEventListener('click', ()=>{
  gameoverview.style.display = 'none';
  powersVar = [];
  character1 = {
    x: 150,
    y: groundLevel,
    speed: 5,
    currentAnimation: 'idle1',
    currentFrame: 0,
    isJumping: false,
    verticalVelocity: 0,
    movingRight: false,
    movingLeft: false,
    isKicking: false,
    flip: false
  };
  character2 = {
    x: 700,             // Positioned near the right goal
    y: groundLevel,
    speed: 5,
    currentAnimation: 'idle2',
    currentFrame: 0,
    isJumping: false,
    verticalVelocity: 0,
    movingRight: false,
    movingLeft: false,
    isKicking: false,
    flip: true          // This flag will make character2 face left
  };
  ball = {
    x: canvas.width / 2 - 25,
    y: groundLevel,
    radius: 50,
    dx: 0,
    dy: 0,
    gravity: 0.3,
    bounce: 0.5,
    lastHitTime: 0
  };
  player1Score = 0;
  player2Score = 0;
  game.style.display = 'flex';
  startGame();
})

function leaderboard(){
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) ?? [];
  const findLeaderboard = leaderboard.find((item)=>{
    return item.player1 == player1input.value && item.player2 == player2input.value
  });
  const lastindex = leaderboard.length > 0 ? leaderboard[leaderboard.length - 1].index : 0;
  if(!findLeaderboard){
    leaderboard.push({player1: player1input.value, player2: player2input.value, score1: player1Score, score2: player2Score, index: lastindex + 1})
  }
  if(findLeaderboard){
    findLeaderboard.score1 = player1Score;
    findLeaderboard.score2 = player2Score;
    findLeaderboard.index = lastindex + 1;
  }
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

savebtn.addEventListener('click', ()=>{
  leaderboard();
})

displayLeaderboard("score");

document.getElementById("sortScore").addEventListener("click", () => {
  displayLeaderboard("score");
});

document.getElementById("sortRecent").addEventListener("click", () => {
  displayLeaderboard("recent");
});

leaderboardbtn.addEventListener('click', ()=>{
  displayLeaderboard("score");  
  running = false
  clearInterval(powerinterval);
  clearInterval(timerinterval);
  powersVar = [];
  character1 = {
    x: 150,
    y: groundLevel,
    speed: 5,
    currentAnimation: 'idle1',
    currentFrame: 0,
    isJumping: false,
    verticalVelocity: 0,
    movingRight: false,
    movingLeft: false,
    isKicking: false,
    flip: false
  };
  character2 = {
    x: 700,             // Positioned near the right goal
    y: groundLevel,
    speed: 5,
    currentAnimation: 'idle2',
    currentFrame: 0,
    isJumping: false,
    verticalVelocity: 0,
    movingRight: false,
    movingLeft: false,
    isKicking: false,
    flip: true          // This flag will make character2 face left
  };
  ball = {
    x: canvas.width / 2 - 25,
    y: groundLevel,
    radius: 50,
    dx: 0,
    dy: 0,
    gravity: 0.3,
    bounce: 0.5,
    lastHitTime: 0
  };
  player1Score = 0;
  player2Score = 0;
  game.style.display = 'none';
  leaderboardview.style.display = 'flex';
});

function displayLeaderboard(sortBy) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) ?? [];

  if (sortBy === "score") {
      leaderboard.sort((a, b) => (b.score1 + b.score2) - (a.score1 + a.score2)); 
  } else if (sortBy === "recent") {
      leaderboard.sort((a, b) => b.index - a.index); 
  }

  const leaderboardContainer = document.getElementById("leaderboardview");
  leaderboardContainer.innerHTML = `
      <h1>Leaderboard</h1>
      <ul id="leaderboardList"></ul>
      <button id="sortScore">Sort by Highest Score</button>
      <button id="sortRecent">Sort by Most Recent</button>
      <button id="menubtn">Back to Menu</button>
  `;

  const list = document.getElementById("leaderboardList");
  leaderboard.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${item.player1} vs ${item.player2} - Score: ${item.score1} - ${item.score2}`;
      list.appendChild(li);
  });

  document.getElementById("sortScore").addEventListener("click", () => displayLeaderboard("score"));
  document.getElementById("sortRecent").addEventListener("click", () => displayLeaderboard("recent"));

  document.getElementById('menubtn').addEventListener('click', ()=>{
    leaderboardview.style.display = 'none';
    menu.style.display = 'flex';
  })
}