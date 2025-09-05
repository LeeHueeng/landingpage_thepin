'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PuttviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const puttviewImages = [
    {
      id: 1,
      title: '펏뷰 퍼팅 시뮬레이터',
      description: '국내 최대 규모 7미터 퍼팅 전문 시뮬레이터',
      image: '/puttview-studio.jpg',
      icon: '⛳'
    },
    {
      id: 2,
      title: '펏뷰 퍼팅 시뮬레이터', 
      description: '국내 최대 규모 7미터 퍼팅 전문 시뮬레이터',
      image: '/puttview-studio.jpg',
      icon: '⛳'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % puttviewImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [puttviewImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#F5F5F5] mb-6">펏뷰 퍼팅 시뮬레이터</h1>
          <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
            국내 최대 규모 7미터 퍼팅 전문 시뮬레이터 '펏뷰'로 정확한 퍼팅 연습이 가능합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">퍼팅 전문 연습 시설</h2>
            <div className="space-y-4 text-[#A1A1AA]">
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>국내 최대 7미터 퍼팅 거리</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>실시간 퍼팅 궤적 분석</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>다양한 그린 컨디션 시뮬레이션</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>퍼팅 스킬 향상을 위한 전문 프로그램</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-[400px] bg-[#181818] border border-[#262626] rounded-2xl overflow-hidden">
              <div className="relative h-full">
                {puttviewImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="h-full relative">
                      {/* 배경 이미지 */}
                      <div className="absolute inset-0">
                        <Image
                          src={image.image}
                          alt={image.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // 이미지 로드 실패 시 이모지 표시
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="h-full flex flex-col items-center justify-center p-8">
                                  <div class="text-8xl mb-6">${image.icon}</div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* 이전/다음 버튼 */}
                <button
                  onClick={() => goToSlide((currentSlide - 1 + puttviewImages.length) % puttviewImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => goToSlide((currentSlide + 1) % puttviewImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {puttviewImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-[#0f5725]' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
