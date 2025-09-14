'use client'

import React, { useEffect, useState } from 'react'

export default function MusicPage() {
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
                Music Request
              </span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
              신청곡을 받아요
            </h1>
            
            <div className="relative">
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
                요일별 특별한 테마로 즐거운 골프 연습을 해보세요!
              </p>
              {/* 텍스트 하단 언더라인 */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 요일별 테마 카드 */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 transition-all duration-1400 ease-out delay-400 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          {/* 월요일 - 파란색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-blue-800/50 overflow-hidden p-6 group-hover:border-blue-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌊</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300">월요일</h3>
                <p className="text-blue-200 text-sm mb-4 font-semibold">Blue Mon</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                시원한<br/> 
                블루스와 재즈로<br/>
                가벼운 월요일 아침을💙
                </p>
              </div>
            </div>
          </div>

          {/* 화요일 - 빨간색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-600 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-red-800/50 overflow-hidden p-6 group-hover:border-red-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔥</div>
                <h3 className="text-2xl font-bold text-red-300 mb-2 group-hover:text-red-200 transition-colors duration-300">화요일</h3>
                <p className="text-red-200 text-sm mb-4 font-semibold">Hot Tue</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                  뜨거운 에너지로<br/>
                  지친 화요일을<br/>
                  깨워 봐요.<br/>
                  으쌰으쌰😆
                  
                </p>
              </div>
            </div>
          </div>

          {/* 수요일 - 초록색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-700 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-green-800/50 overflow-hidden p-6 group-hover:border-green-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
                <h3 className="text-2xl font-bold text-green-300 mb-2 group-hover:text-green-200 transition-colors duration-300">수요일</h3>
                <p className="text-green-200 text-sm mb-4 font-semibold">Green Wed</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                푸르른 수요일,<br/>
                편안한<br/>
                어쿠스틱 선율로 <br/>
                숨 고를 시간🍀

                </p>
              </div>
            </div>
          </div>

          {/* 목요일 - 보라색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-800 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-purple-800/50 overflow-hidden p-6 group-hover:border-purple-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-300">목요일</h3>
                <p className="text-purple-200 text-sm mb-4 font-semibold">Purple Thu</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                신비로운 일렉트로닉과<br/>
                앰비언트 사운드로<br/>
                물드는 목요일💜<br/>
                </p>
              </div>
            </div>
          </div>

          {/* 금요일 - 노란색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-900 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-yellow-800/50 overflow-hidden p-6 group-hover:border-yellow-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-200 transition-colors duration-300">금요일</h3>
                <p className="text-yellow-200 text-sm mb-4 font-semibold">Golden Fri</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                밝은 K-POP과 <br/>
                댄스 음악으로 <br/> 
                황금빛 금요일을 시작하세요💛
                </p>
              </div>
            </div>
          </div>

          {/* 토요일 - 주황색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-1000 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-orange-800/50 overflow-hidden p-6 group-hover:border-orange-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌅</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-2 group-hover:text-orange-200 transition-colors duration-300">토요일</h3>
                <p className="text-orange-200 text-sm mb-4 font-semibold">Sunny Sat</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                활기찬 토요일,<br/> 
                태양처럼 <br/>
                뜨거운 에너지를 느껴보세요🔥
                </p>
              </div>
            </div>
          </div>

          {/* 일요일 - 핑크색 테마 */}
          <div className={`group relative transition-all duration-1000 ease-out delay-1100 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl border border-pink-800/50 overflow-hidden p-6 group-hover:border-pink-600/70 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌸</div>
                <h3 className="text-2xl font-bold text-pink-300 mb-2 group-hover:text-pink-200 transition-colors duration-300">일요일</h3>
                <p className="text-pink-200 text-sm mb-4 font-semibold">Sweet Sun</p>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300 break-keep">
                달콤한 발라드와<br/> 
                감미로운 재즈로<br/> 
                한 주의 피날레를 장식하세요💖
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 신청 방법 안내 */}
        <div className={`mt-24 text-center transition-all duration-1200 ease-out delay-1200 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white mb-6">🎤 신청 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">음악 선택</h4>
                  <p className="text-gray-300">원하는 요일의 테마 음악을 선택하세요</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">곡명 전달</h4>
                  <p className="text-gray-300">구체적인 곡명과 아티스트를 알려주세요</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">즐거운 연습</h4>
                  <p className="text-gray-300">요청하신 음악과 함께 골프 연습을 즐기세요</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-300 mb-6 text-lg">신청은 카카오톡으로 받습니다</p>
              <div className="flex justify-center">
                <a 
                  href="https://open.kakao.com/o/gf7MZ1Rh" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 카카오톡 신청
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
