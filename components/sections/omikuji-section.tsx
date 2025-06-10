"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaDice } from "react-icons/fa";
import Image from "next/image";

export function OmikujiSection() {
  const [omikujiResult, setOmikujiResult] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // おみくじの結果配列
  const omikujiOptions = [
    "大吉",
    "中吉",
    "小吉",
    "吉",
    "末吉",
    "凶"
  ];

  // おみくじを引く関数
  const drawOmikuji = async () => {
    setIsDrawing(true);
    setIsShaking(true);
    setOmikujiResult("");
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsShaking(false);
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const randomIndex = Math.floor(Math.random() * omikujiOptions.length);
    setOmikujiResult(omikujiOptions[randomIndex]);
    setIsDrawing(false);
  };

  return (
    <section id="omikuji" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Omikuji
        </h2>
      </div>
      
      <div className="space-y-8 h-[28rem]">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Omikuji</h2>
        <div className="text-center space-y-8">    
          <div className={`${isShaking ? 'animate-bounce' : ''}`}>
            <Image 
              src="/omikuji.png" 
              alt="おみくじ" 
              width={120} 
              height={180}
              className="mx-auto py-6 rounded"
              priority
            />
          </div>
          
          <Button 
            onClick={drawOmikuji}
            disabled={isDrawing}
          >
            <FaDice className={`w-4 h-4 mr-2 ${isShaking ? 'animate-spin' : ''}`} />
            {isDrawing ? '占い中...' : 'おみくじを引く'}
          </Button>
          
          {omikujiResult && (
            <div className="text-4xl font-bold text-primary">
              {omikujiResult}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 