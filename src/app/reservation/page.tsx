'use client'

import React, { useEffect, useState } from 'react'

export default function ReservationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const handleKakaoChat = () => {
    // 카카오톡 오픈채팅방 링크
    const kakaoLink = 'https://open.kakao.com/o/syels2Rh'
    
    // 새 창으로 오픈채팅방 열기
    window.open(kakaoLink, '_blank')
  }

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
        <div className={`text-center mb-16 relative transition-all duration-1200 ease-out delay-200 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-6 mb-8 group">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
            <span className="text-gray-400 font-light tracking-[0.3em] uppercase text-sm group-hover:text-white transition-colors duration-500">
              Reservation & Inquiry
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
            예약/문의
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
            더핀 골프아카데미와 함께하세요
          </p>
        </div>

        {/* 카카오톡 상담 섹션 */}
        <div className={`max-w-4xl mx-auto transition-all duration-1400 ease-out delay-400 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-3xl p-12 border border-gray-700/50 backdrop-blur-xl text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-4xl">
                💬
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">카카오톡 상담</h2>
              <p className="text-xl text-gray-300 mb-8">
                간편하게 카카오톡으로 상담을 받아보세요
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>실시간 상담 가능</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>골프 전문가와 직접 소통</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>편리한 예약 및 문의</span>
              </div>
            </div>

            <button
              onClick={handleKakaoChat}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💬 카카오톡으로 상담하기
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}