'use client'

import React, { useEffect, useState } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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
                Membership Benefits
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
              회원 혜택
            </h1>
            
            <div className="relative">
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
                더핀 골프아카데미 회원만을 위한 특별한 혜택들을 만나보세요.
              </p>
              {/* 텍스트 하단 언더라인 */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 혜택 카드 섹션 */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1400 ease-out delay-400 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          {/* 골프채 무료 대여 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-emerald-800/50 overflow-hidden p-8 group-hover:border-emerald-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🏌️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">골프채 무료 대여</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  고품질 골프채를 무료로 대여해드립니다.<br/>
                  골프채가 없다고 두려워 마세요.<br/>
                  맞는 골프채는 천천히 알아가면 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 퍼팅장 무료 이용 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-600 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-800/50 overflow-hidden p-8 group-hover:border-blue-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">⛳</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">퍼팅장 무료 이용</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  전문 퍼팅장을 무료로 이용하실 수 있습니다.<br/> 
                  정확한 퍼팅 연습으로 스코어를 크게 개선해보세요.<br/>
                  (엄청 넓어요. 그냥 막 퍼팅하세요.)
                </p>
              </div>
            </div>
          </div>

          {/* QED 1회 이용권 증정 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-purple-800/50 overflow-hidden p-8 group-hover:border-purple-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">QED 1회 이용권 증정</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  방문 상담 시 QED 1회 이용권을 <br/>무료로 증정해드립니다. 
                  <br/>최첨단 분석 시스템을 체험해보세요.

                </p>
              </div>
            </div>
          </div>

          {/* 편안한 라운지 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-800 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-orange-800/50 overflow-hidden p-8 group-hover:border-orange-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🛋️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">편안한 라운지</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  레슨 전후 편히 쉴 수 있는 <br/>프리미엄 라운지를 제공합니다.<br/> 
                  TV와 쇼파로 편안한 휴식을 취하세요.
                  <br/>(대박적 !)
                </p>
              </div>
            </div>
          </div>

          {/* 탈의실 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-teal-800/50 overflow-hidden p-8 group-hover:border-teal-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">👕</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">깔끔한 탈의실</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  쾌적하고 깔끔한 탈의실을 제공합니다.<br/> 
                  개인 락커와 넓은 공간으로 편리하게 이용하세요.
                  <br/>(락커는 따로 있습니다. 약 300여개.. ㄷㄷㄷ)
                  <br/>(내_집_장만_참_쉽죠잉)
                </p>
              </div>
            </div>
          </div>

          {/* 샤워실 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-cyan-800/50 overflow-hidden p-8 group-hover:border-cyan-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🚿</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">프리미엄 샤워실</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  레슨 후 상쾌하게 씻을 수 있는 <br/>프리미엄 샤워실을 제공합니다.<br/> 
                  고급 어메니티와 함께 편리하게 이용하세요.
                  <br/>(헐 나두 씻을래 ! ! )
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className={`mt-24 text-center transition-all duration-1200 ease-out delay-1100 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-6">더핀 골프아카데미와 함께하세요</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              최고의 시설과 전문적인 레슨, 그리고 회원만을 위한 특별한 혜택들로
              여러분의 골프 실력 향상을 도와드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                회원가입 문의
              </button>
              <button className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                상담 예약
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
