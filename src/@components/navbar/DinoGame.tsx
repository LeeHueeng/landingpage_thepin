"use client";

import React, { useState, useEffect, useRef } from "react";

interface GolfGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GolfGame({ isOpen, onClose }: GolfGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameLoopRef = useRef<number>()
  const ballRef = useRef<{ x: number; y: number; velocityX: number; velocityY: number; radius: number }>({
    x: 100,
    y: 200,
    velocityX: 0,
    velocityY: 0,
    radius: 8,
  });
  const holeRef = useRef<{ x: number; y: number; radius: number }>({
    x: 350,
    y: 200,
    radius: 15,
  });
  const obstaclesRef = useRef<
    Array<{ x: number; y: number; width: number; height: number }>
  >([]);
  const friction = 0.98;
  const gravity = 0.2;

  useEffect(() => {
    if (isOpen && !gameStarted) {
      setGameStarted(false);
      setScore(0);
      setGameOver(false);
      setCurrentLevel(1);
      resetLevel();
    }
  }, [isOpen, gameStarted]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver]);

  const resetLevel = () => {
    // 레벨별 설정
    const levelConfigs = [
      { ballX: 100, ballY: 200, holeX: 350, holeY: 200, obstacles: [] },
      {
        ballX: 80,
        ballY: 150,
        holeX: 320,
        holeY: 250,
        obstacles: [{ x: 200, y: 180, width: 20, height: 80 }],
      },
      {
        ballX: 60,
        ballY: 100,
        holeX: 340,
        holeY: 280,
        obstacles: [
          { x: 150, y: 120, width: 20, height: 60 },
          { x: 250, y: 200, width: 60, height: 20 },
        ],
      },
    ];

    const config = levelConfigs[currentLevel - 1] || levelConfigs[0];

    ballRef.current = {
      x: config.ballX,
      y: config.ballY,
      velocityX: 0,
      velocityY: 0,
      radius: 8,
    };

    holeRef.current = {
      x: config.holeX,
      y: config.holeY,
      radius: 15,
    };

    obstaclesRef.current = config.obstacles;
  };

  const gameLoop = () => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // 화면 클리어
    ctx.clearRect(0, 0, 400, 300);

    // 배경 그리기 (골프장 느낌)
    ctx.fillStyle = "#90EE90";
    ctx.fillRect(0, 0, 400, 300);

    // 그리드 패턴 (잔디 느낌)
    ctx.strokeStyle = "#7CB342";
    ctx.lineWidth = 1;
    for (let i = 0; i < 400; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 300);
      ctx.stroke();
    }
    for (let i = 0; i < 300; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(400, i);
      ctx.stroke();
    }

    // 홀 그리기
    const hole = holeRef.current;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
    ctx.fill();

    // 홀 테두리
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(hole.x, hole.y, hole.radius, 0, Math.PI * 2);
    ctx.stroke();

    // 장애물 그리기
    ctx.fillStyle = "#8B4513";
    obstaclesRef.current.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // 골프공 그리기
    const ball = ballRef.current;
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // 골프공 디테일
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.stroke();

    // 골프공 반사광
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.arc(ball.x - 3, ball.y - 3, 2, 0, Math.PI * 2);
    ctx.fill();

    // 공 물리 업데이트
    if (!isDragging) {
      ball.velocityX *= friction;
      ball.velocityY *= friction;
      ball.velocityY += gravity;

      ball.x += ball.velocityX;
      ball.y += ball.velocityY;

      // 벽 충돌
      if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= 400) {
        ball.velocityX *= -0.8;
        ball.x = Math.max(ball.radius, Math.min(400 - ball.radius, ball.x));
      }
      if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= 300) {
        ball.velocityY *= -0.8;
        ball.y = Math.max(ball.radius, Math.min(300 - ball.radius, ball.y));
      }

      // 장애물 충돌
      obstaclesRef.current.forEach((obstacle) => {
        if (
          ball.x + ball.radius > obstacle.x &&
          ball.x - ball.radius < obstacle.x + obstacle.width &&
          ball.y + ball.radius > obstacle.y &&
          ball.y - ball.radius < obstacle.y + obstacle.height
        ) {
          // 충돌 방향 계산
          const centerX = obstacle.x + obstacle.width / 2;
          const centerY = obstacle.y + obstacle.height / 2;
          const dx = ball.x - centerX;
          const dy = ball.y - centerY;

          if (Math.abs(dx) > Math.abs(dy)) {
            ball.velocityX *= -0.8;
            ball.x =
              dx > 0
                ? obstacle.x + obstacle.width + ball.radius
                : obstacle.x - ball.radius;
          } else {
            ball.velocityY *= -0.8;
            ball.y =
              dy > 0
                ? obstacle.y + obstacle.height + ball.radius
                : obstacle.y - ball.radius;
          }
        }
      });

      // 홀에 들어갔는지 확인
      const distance = Math.sqrt(
        (ball.x - hole.x) ** 2 + (ball.y - hole.y) ** 2
      );
      if (distance < hole.radius) {
        if (Math.abs(ball.velocityX) < 0.5 && Math.abs(ball.velocityY) < 0.5) {
          // 다음 레벨로
          if (currentLevel < 3) {
            setCurrentLevel((prev) => prev + 1);
            setScore((prev) => prev + 100);
            resetLevel();
          } else {
            // 게임 클리어
            setGameOver(true);
            if (score + 100 > highScore) {
              setHighScore(score + 100);
            }
          }
        }
      }
    }

    if (!gameOver) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setCurrentLevel(1);
    resetLevel();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!gameStarted || gameOver) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ball = ballRef.current;
    const distance = Math.sqrt((x - ball.x) ** 2 + (y - ball.y) ** 2);

    if (distance <= ball.radius) {
      setIsDragging(true);
      setDragStart({ x, y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ball = ballRef.current;
    ball.x = x;
    ball.y = y;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ball = ballRef.current;
    const power =
      Math.sqrt((x - dragStart.x) ** 2 + (y - dragStart.y) ** 2) * 0.1;
    const angle = Math.atan2(dragStart.y - y, dragStart.x - x);

    ball.velocityX = Math.cos(angle) * power;
    ball.velocityY = Math.sin(angle) * power;

    setIsDragging(false);
    setScore((prev) => prev + 1);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.code === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">🏌️ 골프 게임</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 mb-2">
            골프공을 드래그해서 홀에 넣으세요!
          </p>
          <p className="text-xs text-gray-500 mb-2">
            ESC 키로 언제든 게임 종료 가능
          </p>
          <div className="flex justify-between text-sm">
            <span>레벨: {currentLevel}/3</span>
            <span>점수: {score}</span>
            <span>최고점수: {highScore}</span>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="border border-gray-300 rounded bg-green-100 mx-auto block cursor-crosshair"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        />

        <div className="text-center mt-4">
          {!gameStarted ? (
            <button
              onClick={startGame}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              게임 시작
            </button>
          ) : gameOver ? (
            <div>
              <p className="text-green-600 font-bold mb-2">🎉 게임 클리어!</p>
              <button
                onClick={startGame}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                다시 시작
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600 mb-2">
                골프공을 드래그해서 홀에 넣으세요!
              </p>
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm transition-colors"
              >
                게임 종료
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
