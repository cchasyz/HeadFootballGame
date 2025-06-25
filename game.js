  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  canvas.width = 1000;
  canvas.height = 600;

  const bg = new Image();
  bg.src = 'Sprites/background1.jpg';
  const goal = new Image();
  goal.src = 'Sprites/Goal - Side.png';
  const ballpic = new Image();
  ballpic.src = 'Sprites/Ball 01.png';
  const increaseball = new Image();
  increaseball.src = 'Sprites/Increase Ball.png';
  const decreaseball = new Image();
  decreaseball.src = 'Sprites/Decrease Ball.png';
  const diamondice = new Image();
  diamondice.src = 'Sprites/Diamond Ice.png';
  const powers = [increaseball, decreaseball, diamondice];
  const groundLevel = 380;

  let powersVar = []; 

  let character1 = {
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
  
  let character2 = {
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

  let ball = {
    x: canvas.width / 2 - 25,
    y: groundLevel,
    radius: 50,
    dx: 0,
    dy: 0,
    gravity: 0.3,
    bounce: 0.5,
    lastHitTime: 0
  }

  let countdown = 3;
  let running = false;
  let ballFrozen = false;
  let timerinterval;
  let timer;
  let player1Score = 0;
  let player2Score = 0;
  let frameRate = 100;
  let lastFrameTime = 0;
  let jumpSpeed = -15; 
  let gravity = 0.7;
  let countdowninterval;

  function makePower(){
    const randomX = Math.floor(Math.random() * (450 - 200 + 1) + 200);
    const randomPic = Math.floor(Math.random() * powers.length);

    powersVar.push({x: randomX, y: 0, pic: randomPic})
  }

  function updateBall(){
    ball.x += ball.dx;
    ball.y += ball.dy;
    
    ball.dy += ball.gravity;
    
    // Bounce off the floor (groundLevel)
    if (ball.y + ball.radius > groundLevel + 130) {
      ball.y = groundLevel + 130 - ball.radius;
      ball.dy = -ball.dy * ball.bounce;
    }
    
    // Bounce off the ceiling
    if (ball.y - ball.radius < 0) {
      ball.y = ball.radius;
      ball.dy = -ball.dy * ball.bounce;
    }
    
    // Bounce off the left wall
    if (ball.x - ball.radius < 0) {
      ball.x = ball.radius;
      ball.dx = -ball.dx * ball.bounce;
    }
    
    // Bounce off the right wall
    if (ball.x + ball.radius > canvas.width - 50) {
      ball.x = canvas.width - 50 - ball.radius;
      ball.dx = -ball.dx * ball.bounce;
    }
  }

  function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(bg, 0, 0, canvas.width, canvas.height); 

    powersVar.forEach(p => {
      c.drawImage(powers[p.pic], p.x, p.y, 50, 50);
    });

    
    if (animations[character1.currentAnimation] && animations[character1.currentAnimation].length > 0) {
      c.drawImage(animations[character1.currentAnimation][character1.currentFrame], character1.x, character1.y, 150, 150);
    }

    if (animations[character2.currentAnimation] && animations[character2.currentAnimation].length > 0) {
      c.save();
      c.scale(-1, 1);
      c.drawImage(animations[character2.currentAnimation][character2.currentFrame], -character2.x - 150, character2.y, 150, 150);
      c.restore();
    }
    
    c.drawImage(ballpic, ball.x, ball.y, ball.radius, ball.radius);

        c.drawImage(goal, 35, 340, 100, 170);

        c.save();
        c.scale(-1, 1);
        c.drawImage(goal, -965, 340, 100, 170);
        c.restore();
  }
      
  function updateCharacter(character) {  
    // Horizontal movement
    if (character.movingRight) {
      character.x += character.speed;
      if(character.x + 150 > canvas.width){
        character.x = canvas.width - 150
      }
    }
    if (character.movingLeft) {
      character.x -= character.speed;
      if(character.x < 0){
        character.x = 0
      }
    }
  
    if (character.isJumping) {
      character.y += character.verticalVelocity;
      character.verticalVelocity += gravity;
  
      if (character == character1) {
        if (character.verticalVelocity < 0) {
          if (character.currentAnimation !== 'jump1') {
            character.currentAnimation = 'jump1';
            character.currentFrame = 0;
          }
         } else {
            if (character.currentAnimation !== 'fall1') {
              character.currentAnimation = 'fall1';
              character.currentFrame = 0;
            } else if (character.y >= groundLevel){
              character.currentAnimation = 'idle1';
              character.currentFrame = 0;
            }
          }
       }
       if (character == character2) {
          if (character.verticalVelocity < 0) {
            if (character.currentAnimation !== 'jump2') {
              character.currentAnimation = 'jump2';
              character.currentFrame = 0;
            }
        } else {
          if (character.currentAnimation !== 'fall2') {
            character.currentAnimation = 'fall2';
            character.currentFrame = 0;
          } else if (character.y >= groundLevel){
            character.currentAnimation = 'idle2';
            character.currentFrame = 0;
          }
        }
      }
    }
  
    if (character.y >= groundLevel) {
      character.y = groundLevel;
      character.isJumping = false;
      character.verticalVelocity = 0;
      
      if (!character.isKicking) {
        if (character.movingRight) {
          if (character.currentAnimation !== ((character === character1) ? 'forward1' : 'backward2')) {
            character.currentAnimation = (character === character1) ? 'forward1' : 'backward2';
            character.currentFrame = 0;
          }
        } else if (character.movingLeft) {
          if (character.currentAnimation !== ((character === character1) ? 'backward1' : 'forward2')) {
            character.currentAnimation = (character === character1) ? 'backward1' : 'forward2';
            character.currentFrame = 0;
          }
        } else {
          if (character.currentAnimation !== ((character === character1) ? 'idle1' : 'idle2')) {
            character.currentAnimation = (character === character1) ? 'idle1' : 'idle2';
            character.currentFrame = 0;
          }
        }
      }
    }
  
    if (character.isKicking) {
      if (character == character1) {
        if (character.currentFrame === animations['kick1'].length - 1) {
          character.isKicking = false;
          character.currentAnimation = 'idle1';
          character.currentFrame = 0;
        }
      }
       else if (character == character2){
       if (character.currentFrame === animations['kick2'].length - 1) {
        character.isKicking = false;
        character.currentAnimation = 'idle2';
        character.currentFrame = 0;
      }
    }
  }
  }

  function checkKickCollision(character) {
    const kickZoneWidth = 50;
    const kickZoneHeight = 100;
  
    let zoneX, zoneY;
    if (!character.flip) { 
      // Character facing right (e.g. character1)
      zoneX = character.x + 100; // right edge of character's image
    } else {
      // Character facing left (e.g. character2)
      zoneX = character.x - kickZoneWidth; 
    }
    // Vertically, center the zone on the character
    zoneY = character.y + 25; // adjust so that the zone covers roughly the middle of the character
  
    // Check if the ball's center is inside the zone
    if (
      ball.x >= zoneX &&
      ball.x <= zoneX + kickZoneWidth &&
      ball.y >= zoneY &&
      ball.y <= zoneY + kickZoneHeight
    ) {
      ball.dy = -10;      // Kick upward
      if (!character.flip) {
        ball.dx = 7;
      } else {
        ball.dx = -7;
      }
    }
  }

  function checkCharacterBallCollision(character) {
    // Define character bounding box (assume 150x150 size)
    let charLeft = character.x + 50;
    let charRight = character.x + 100;
    let charTop = character.y + 50;
    let charBottom = character.y + 100;
    
    // Define ball bounding box (using ball.x, ball.y, ball.radius)
    let ballLeft = ball.x;
    let ballRight = ball.x + ball.radius;
    let ballTop = ball.y;
    let ballBottom = ball.y + ball.radius;
    
    return !(charRight < ballLeft || charLeft > ballRight || charBottom < ballTop || charTop > ballBottom);
  }
  
  function checkCollisionAndApplyImpulse(time) {
    
    const hitCooldown = 200; // 200 ms cooldown
    
    if (time - ball.lastHitTime > hitCooldown) {
    
      if (checkCharacterBallCollision(character1)) {
        // ball.dy = -3;
        ball.dx = 5;
        ball.lastHitTime = time;
      }
      
      else if (checkCharacterBallCollision(character2)) {
        // ball.dy = -3;
        ball.dx = -5;     
        ball.lastHitTime = time;
      }
    }
  }

  function checkGoal(){  
    const rightGoalX = 870;
    const leftGoalX = 150;
    const goalTop = 340;
    const goalBottom = 340 + 170;

    if(ball.x + ball.radius < leftGoalX &&
      ball.y > goalTop && 
      ball.y + ball.radius < goalBottom
    ){
      player2Score += 1;
      ball.x = canvas.width / 2 - 25;
      ball.y = 150;
      ball.dx = 0;
      ball.radius = 50;
    }
    if(ball.x > rightGoalX &&
      ball.y > goalTop && 
      ball.y + ball.radius < goalBottom
    ){
      player1Score += 1;
      ball.x = canvas.width / 2 - 25;
      ball.y = 150;
      ball.dx = 0;
      ball.radius = 50;
    }
  }

  function checkDistance(x1, y1, x2, y2){
    let distanceX = x2 - x1;
    let distanceY = y2 - y1;

    return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  }

  function checkPower(){
    for (let i = 0; i < powersVar.length; i++) {
      const p = powersVar[i];
      if(checkDistance(character1.x, character1.y + 75, p.x, p.y) < 100 || checkDistance(character2.x + 75, character2.y + 75, p.x, p.y) < 100){
        if(p.pic == 0){
          ball.radius += 20;
        } else if(p.pic == 1){
          ball.radius -= 20;
        } else if(p.pic == 2){
          ballFrozen = true;
          setTimeout(() => {
            ballFrozen = false;
          }, 3000);
        }
        
        powersVar.splice(i,1)
      }
    }
  }

  function loop(time) {
    checkGameOver();
    updateCharacter(character1);
    updateCharacter(character2);
    checkCollisionAndApplyImpulse(time);
    checkGoal();
    checkPower();
    if(!ballFrozen){
      updateBall();
    }

    for (let i = 0; i < powersVar.length; i++) {
      const p = powersVar[i];
      p.y += 1;
      if(p.y >= groundLevel + 75)p.y = groundLevel + 75;
    }

    if(character1.isKicking){
      checkKickCollision(character1);
    }
    if(character2.isKicking){
      checkKickCollision(character2);
    }

    draw();

    if (time - lastFrameTime > frameRate) {
      lastFrameTime = time;
      if (animations[character1.currentAnimation] && animations[character1.currentAnimation].length > 0) {
        character1.currentFrame = (character1.currentFrame + 1) % animations[character1.currentAnimation].length;
      }
      if (animations[character2.currentAnimation] && animations[character2.currentAnimation].length > 0) {
        character2.currentFrame = (character2.currentFrame + 1) % animations[character2.currentAnimation].length;
      }
    }

    player1scoretext.innerHTML = player1Score;
    player2scoretext.innerHTML = player2Score;
    timertext.innerHTML = timer;

    if(running){
      requestAnimationFrame(loop);
    }
  }

  function checkGameOver(){
    if (timer <= 0 || timer === 'Deathmatch!!') {
      if(player1Score !== player2Score){
        running = false
        clearInterval(powerinterval);
        usn1output.innerHTML = player1input.value;
        usn2output.innerHTML = player2input.value;
        score1output.innerHTML = player1Score;
        score2output.innerHTML = player2Score;
        gameoverview.style.display = 'flex';
      }
      clearInterval(timerinterval);
      timer = 'Deathmatch!!'
    }
  }

  function startGame() {
    draw();
    countdownf();
    setTimeout(() => {
      makePower();
      powerinterval = setInterval(()=>{
        makePower();
      }, 5000)
      running = true;
      timer = diff.value
      timerinterval = setInterval(() => {
        timer -= 1
      }, 1000);
      requestAnimationFrame(loop);
    }, 3000);
  }

  function countdownf(){
    countdown = 3;
    countdownoutput.innerHTML = countdown;
    countdownoutput.style.display = 'block';
    countdowninterval = setInterval(()=>{
      countdown -= 1;
      countdownoutput.innerHTML = countdown;
    },1000);
    setTimeout(()=>{
      clearInterval(countdowninterval);
      countdownoutput.style.display = 'none';
    },3000)
  }

  window.addEventListener('keydown', (e) => {
    // Character 1 controls
    if (e.key === 'd' && !character1.movingRight) {
      character1.movingRight = true;
      if (!character1.isJumping) {
        character1.currentAnimation = 'forward1';
        character1.currentFrame = 0;
      }
    }
    if (e.key === 'a' && !character1.movingLeft) {
      character1.movingLeft = true;
      if (!character1.isJumping) {
        character1.currentAnimation = 'backward1';
        character1.currentFrame = 0;
      }
    }
    if (e.key === 'w' && !character1.isJumping) {
      character1.isJumping = true;
      character1.verticalVelocity = jumpSpeed;
      character1.currentAnimation = 'jump1';
      character1.currentFrame = 0;
    }
    if (e.key === ' ') {
      character1.isKicking = true;
      character1.currentAnimation = 'kick1';
      character1.currentFrame = 0;
    }
  
    // Character 2 controls (Arrow keys and Enter)
    // Left Arrow - move left, Right Arrow - move right
    if (e.key === 'ArrowRight' && !character2.movingRight) {
      character2.movingRight = true;
      if (!character2.isJumping) {
        character2.currentAnimation = 'backward2';
        character2.currentFrame = 0;
      }
    }
    if (e.key === 'ArrowLeft' && !character2.movingLeft) {
      character2.movingLeft = true;
      if (!character2.isJumping) {
        character2.currentAnimation = 'forward2';
        character2.currentFrame = 0;
      }
    }
    // Enter key for jump
    if (e.key === 'ArrowUp' && !character2.isJumping) {
      character2.isJumping = true;
      character2.verticalVelocity = jumpSpeed;
      character2.currentAnimation = 'jump2';
      character2.currentFrame = 0;
    }
    // Arrow Up for kick
    if (e.key === 'Enter') {
      character2.isKicking = true;
      character2.currentAnimation = 'kick2';
      character2.currentFrame = 0;
    }
  });

  window.addEventListener('keyup', (e) => {
    // Character 1 key releases
    if (e.key === 'd') {
      character1.movingRight = false;
      if (!character1.isJumping) {
        character1.currentAnimation = 'idle1';
        character1.currentFrame = 0;
      }
    }
    if (e.key === 'a') {
      character1.movingLeft = false;
      if (!character1.isJumping) {
        character1.currentAnimation = 'idle1';
        character1.currentFrame = 0;
      }
    }
  
    // Character 2 key releases
    if (e.key === 'ArrowRight') {
      character2.movingRight = false;
      if (!character2.isJumping) {
        character2.currentAnimation = 'idle2';
        character2.currentFrame = 0;
      }
    }
    if (e.key === 'ArrowLeft') {
      character2.movingLeft = false;
      if (!character2.isJumping) {
        character2.currentAnimation = 'idle2';
        character2.currentFrame = 0;
      }
    }
  });