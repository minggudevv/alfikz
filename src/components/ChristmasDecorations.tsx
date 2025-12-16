"use client";

import { useEffect, useState } from "react";

export default function ChristmasDecorations() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate light colors (red, green, gold, blue)
    const lightColors = [
        "#ff4444", // Red
        "#44ff44", // Green  
        "#ffdd44", // Gold
        "#4488ff", // Blue
        "#ff44aa", // Pink
    ];

    const lights = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        color: lightColors[i % lightColors.length],
        delay: i * 0.15,
    }));

    if (!mounted) return null;

    return (
        <div className="fixed top-0 inset-x-0 z-[99] pointer-events-none overflow-visible">
            {/* String Lights Container */}
            <div className="relative w-full">
                {/* The String/Wire */}
                <svg
                    viewBox="0 0 1440 60"
                    className="w-full h-16"
                    preserveAspectRatio="none"
                >
                    {/* Main cable with sag */}
                    <path
                        d="M-20,5 Q360,35 720,25 Q1080,15 1460,30"
                        stroke="rgba(30,30,30,0.8)"
                        strokeWidth="3"
                        fill="none"
                    />
                    <path
                        d="M-20,5 Q360,35 720,25 Q1080,15 1460,30"
                        stroke="rgba(60,60,60,0.5)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="5,10"
                    />
                </svg>

                {/* Light Bulbs */}
                <div className="absolute top-0 left-0 w-full h-16 flex justify-around items-start px-4">
                    {lights.map((light) => (
                        <div
                            key={light.id}
                            className="relative flex flex-col items-center"
                            style={{
                                marginTop: `${8 + Math.sin(light.id * 0.8) * 12}px`,
                            }}
                        >
                            {/* Bulb Socket */}
                            <div className="w-2 h-2 bg-zinc-700 rounded-sm" />

                            {/* Light Bulb */}
                            <div
                                className="w-3 h-4 rounded-full relative animate-pulse"
                                style={{
                                    background: `radial-gradient(circle at 30% 30%, ${light.color}, ${light.color}aa)`,
                                    boxShadow: `0 0 15px 5px ${light.color}80, 0 0 30px 10px ${light.color}40`,
                                    animationDelay: `${light.delay}s`,
                                    animationDuration: "1.5s",
                                }}
                            >
                                {/* Highlight */}
                                <div
                                    className="absolute top-1 left-1 w-1 h-1 bg-white/60 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Corner Ornaments */}
            <div className="absolute top-4 left-4">
                <div className="relative">
                    {/* Ornament String */}
                    <div className="absolute -top-4 left-1/2 w-px h-4 bg-gradient-to-b from-zinc-600 to-transparent" />
                    {/* Red Ornament */}
                    <div
                        className="w-10 h-10 rounded-full animate-[swing_3s_ease-in-out_infinite]"
                        style={{
                            background: "radial-gradient(circle at 30% 30%, #ff6666, #cc0000)",
                            boxShadow: "0 4px 15px rgba(200,0,0,0.4), inset 0 -5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className="absolute top-2 left-2 w-3 h-2 bg-white/30 rounded-full blur-sm" />
                    </div>
                </div>
            </div>

            <div className="absolute top-4 right-4">
                <div className="relative">
                    {/* Ornament String */}
                    <div className="absolute -top-4 left-1/2 w-px h-4 bg-gradient-to-b from-zinc-600 to-transparent" />
                    {/* Gold Ornament */}
                    <div
                        className="w-10 h-10 rounded-full animate-[swing_3.5s_ease-in-out_infinite_0.5s]"
                        style={{
                            background: "radial-gradient(circle at 30% 30%, #ffdd66, #cc9900)",
                            boxShadow: "0 4px 15px rgba(200,150,0,0.4), inset 0 -5px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        <div className="absolute top-2 left-2 w-3 h-2 bg-white/40 rounded-full blur-sm" />
                    </div>
                </div>
            </div>

            {/* Frost Effect on Top Edge */}
            <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                    background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 80%, transparent)",
                    filter: "blur(1px)",
                }}
            />

            {/* Style for swing animation */}
            <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
        </div>
    );
}
