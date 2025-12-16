"use client";

import { useEffect, useRef } from "react";

interface Snowflake {
    x: number;
    y: number;
    radius: number;
    speed: number;
    wind: number;
    opacity: number;
    swing: number;
    swingSpeed: number;
}

export default function SnowEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const snowflakes: Snowflake[] = [];
        const maxSnowflakes = 150;

        // Create snowflakes with varied properties
        for (let i = 0; i < maxSnowflakes; i++) {
            snowflakes.push(createSnowflake(width, height, true));
        }

        function createSnowflake(w: number, h: number, randomY = false): Snowflake {
            return {
                x: Math.random() * w,
                y: randomY ? Math.random() * h : -10,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 1 + 0.5,
                wind: Math.random() * 0.5 - 0.25,
                opacity: Math.random() * 0.5 + 0.4,
                swing: Math.random() * Math.PI * 2,
                swingSpeed: Math.random() * 0.02 + 0.01,
            };
        }

        function drawSnowflake(flake: Snowflake) {
            if (!ctx) return;

            // Draw main snowflake with glow
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
            ctx.shadowBlur = flake.radius * 2;
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
            ctx.fill();

            // Add sparkle effect to larger flakes
            if (flake.radius > 2.5) {
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius * 0.3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity + 0.3})`;
                ctx.fill();
            }
        }

        function update() {
            for (let i = 0; i < snowflakes.length; i++) {
                const flake = snowflakes[i];

                // Update swing
                flake.swing += flake.swingSpeed;

                // Move snowflake
                flake.y += flake.speed;
                flake.x += flake.wind + Math.sin(flake.swing) * 0.5;

                // Reset if out of bounds
                if (flake.y > height + 10 || flake.x < -10 || flake.x > width + 10) {
                    snowflakes[i] = createSnowflake(width, height, false);
                }
            }
        }

        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);
            ctx.shadowBlur = 0;

            for (const flake of snowflakes) {
                drawSnowflake(flake);
            }

            update();
        }

        let animationFrameId: number;
        function animate() {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
        />
    );
}
