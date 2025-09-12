'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ProsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 페이지 로드 시 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}>
        {/* 헤더 섹션 */}
        <div className={`text-center mb-24 relative transition-all duration-1200 ease-out delay-200 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          {/* 배경 글로우 효과 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-6 mb-8 group">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
              <span className="text-gray-400 font-light tracking-[0.3em] uppercase text-sm group-hover:text-white transition-colors duration-500">
                Pro Introduction
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
              프로 소개
            </h1>
            
            <div className="relative">
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
                최고의 실력과 경험을 갖춘 전문 프로들이 여러분의 골프 실력 향상을 도와드립니다.
              </p>
              {/* 텍스트 하단 언더라인 */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 프로 카드 섹션 */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 transition-all duration-1400 ease-out delay-400 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          {/* 조필규 프로 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src="/필.jpg"
                  alt="조필규 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">조필규</h2>
                <p className="text-slate-400 text-sm">PRO</p>
              </div>
            </div>
          </div>

          {/* 하준규 프로 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-600 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src="/하.JPG"
                  alt="하준규 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">하준규</h2>
                <p className="text-slate-400 text-sm">PRO</p>
              </div>
            </div>
          </div>

          {/* 배꽃 프로 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src="/KakaoTalk_Photo_2025-09-12-10-37-18 001.jpeg"
                  alt="배꽃 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">배꽃</h2>
                <p className="text-slate-400 text-sm">PRO</p>
              </div>
            </div>
          </div>

          {/* 장효진 프로 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-800 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src="/KakaoTalk_Photo_2025-09-12-10-37-19 002.jpeg"
                  alt="장효진 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">장효진</h2>
                <p className="text-slate-400 text-sm">PRO</p>
              </div>
            </div>
          </div>

          {/* 조영은 프로 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src="/KakaoTalk_Photo_2025-09-12-10-37-19 003.jpeg"
                  alt="조영은 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">조영은</h2>
                <p className="text-slate-400 text-sm">PRO</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
