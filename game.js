let player = { x: 200, y: 200, size: 20 };
let enemies = [];
let score = 0;
let startButton;
let gameState = "START"; // 使用状态机管理：START, PLAYING

function setup() {
  createCanvas(400, 400);
  
  // 初始化按钮
  startButton = createButton('START GAME');
  startButton.position(width / 2 - 50, height / 2);
  startButton.mousePressed(startGame);

  // 初始化敌人
  for (let i = 0; i < 4; i++) {
    enemies.push({
      x: random(400),
      y: random(400),
      speedX: random(1, 3),
      speedY: random(1, 3)
    });
  }
}

function startGame() {
  gameState = "PLAYING";
  startButton.hide(); // 点击后立即隐藏按钮
  score = 0;          // 重置分数
}

function draw() {
  background(30);

  if (gameState === "START") {
    // 菜单界面
    fill(255);
    textAlign(CENTER);
    text("Dodge the Red Balls!", width / 2, height / 2 - 20);
  } 
  else if (gameState === "PLAYING") {
    // 运行游戏逻辑
    runGame();
  }
}

