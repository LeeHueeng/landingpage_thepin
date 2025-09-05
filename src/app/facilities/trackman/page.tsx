'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TrackmanPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const trackmanImages = [
    {
      id: 1,
      title: '트랙맨 스튜디오',
      description: '최신 트랙맨 4 시스템이 설치된 프라이빗 레슨 공간',
      image: '/trackman-studio-1.jpg', // .jpg 또는 .jfif 모두 지원
      icon: '🏠'
    },
    {
      id: 2,
      title: '트랙맨 스튜디오', 
      description: '최신 트랙맨 4 시스템이 설치된 프라이빗 레슨 공간',
      image: '/trackman-studio-2.jpg', // .jpg 또는 .jfif 모두 지원
      icon: '🏠'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trackmanImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [trackmanImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#F5F5F5] mb-6">트랙맨 프라이빗 스튜디오</h1>
          <p className="text-xl text-[#A1A1AA] max-w-3xl mx-auto">
            최고급 트랙맨 시스템이 설치된 프라이빗 레슨 스튜디오 2룸을 운영합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#F5F5F5]">프리미엄 레슨 환경</h2>
            <div className="space-y-4 text-[#A1A1AA]">
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>최신 트랙맨 4 골프 시뮬레이터</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>프라이빗 공간으로 집중된 레슨</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>실시간 스윙 분석 및 피드백</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-[#0f5725] text-xl">✓</div>
                <p>전문 프로와 1:1 맞춤 레슨</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-[400px] bg-[#181818] border border-[#262626] rounded-2xl overflow-hidden">
              <div className="relative h-full">
                {trackmanImages.map((image, index) => (
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
                  onClick={() => goToSlide((currentSlide - 1 + trackmanImages.length) % trackmanImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => goToSlide((currentSlide + 1) % trackmanImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* 인디케이터 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {trackmanImages.map((_, index) => (
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
