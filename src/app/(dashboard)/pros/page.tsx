import React from 'react'
import Image from 'next/image'

export default function ProsPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* 헤더 섹션 */}
        <div className="text-center mb-24 relative">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 필 프로 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-800/50 overflow-hidden flex flex-col">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="/필.jpg"
                  alt="필 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">조필규</h2>
                  <p className="text-slate-400 text-lg">KPGA PRO</p>
                </div>
                
                <div className="grid grid-rows-[1fr_auto_auto] gap-6 min-h-[900px]">
                  <div className="space-y-6 text-left">
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2009 ~ 2011</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">프론티어 투어 본선진출 2회</div>
                        <div className="text-gray-300">필리핀 주니어 대회 다수 입상</div>
                        <div className="text-gray-300">Samsung 아마추어 챔피언십 우승</div>
                        <div className="text-gray-300">UP 대학 골프팀 활동</div>
                        <div className="text-gray-300">UP 마룬컵 개인전 우승</div>
                        <div className="text-gray-300">PAL 필리핀 항공배 오차드팀 우승</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2012</span>
                      <div className="text-gray-300 text-left">KPGA 프로 입회</div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2013 ~ 2015</span>
                      <div className="text-gray-300 text-left">필리핀 골프투어 (PGT/PGTA) 활동</div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2020 ~ 2022</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">큐이디 아카데미 의정부점 헤드프로 근무</div>
                        <div className="text-gray-300">KPGA 스릭슨 투어 활동</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2022.11 ~</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">더핀 골프아카데미 소속</div>
                        <div className="text-gray-300">QED Data Analyst LV.1</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      추천 대상
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">골프를 처음 시작하는 초보자</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">기본기부터 차근차근 배우고 싶은 분</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">체계적인 레슨을 원하는 분</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">아침 시간대 레슨을 선호하는 분</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      레슨 특징
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">15년 경력의 풍부한 경험</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">기초부터 고급까지 단계별 레슨</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">개인별 맞춤형 지도</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>레슨 시간</span>
                      <span className="text-gray-300 font-semibold">7:00 ~ 15:00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>휴무일</span>
                      <span className="text-gray-300 font-semibold">목요일, 일요일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 하준규 프로 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-800/50 overflow-hidden flex flex-col">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="/하.JPG"
                  alt="하 프로"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">하준규</h2>
                  <p className="text-slate-400 text-lg">KPGA PRO</p>
                </div>
                
                <div className="grid grid-rows-[1fr_auto_auto] gap-6 min-h-[900px]">
                  <div className="space-y-6 text-left">
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2017</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">한국중고골프연맹 c&t배 단체전 우승</div>
                        <div className="text-gray-300">경기도골프협회 일요신문배 개인전 5등</div>
                        <div className="text-gray-300">대한골프협회 육군참모총장배 개인전 우승</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2018</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">KPGA 입회</div>
                        <div className="text-gray-300">프론티어투어 1회 본선진출</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2019</span>
                      <div className="text-gray-300 text-left">챌린지투어 2회 본선진출</div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2019 ~ 2024</span>
                      <div className="text-gray-300 text-left">챌린지, 스릭슨투어 활동</div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="text-gray-400 font-semibold w-[100px] text-left">2024</span>
                      <div className="space-y-1 text-left">
                        <div className="text-gray-300">더핀 골프아카데미 소속</div>
                        <div className="text-gray-300">QED Data Analyst LV.1</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      추천 대상
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">이미 기본기를 갖춘 중급자</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">스코어 개선을 원하는 분</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">젊고 활발한 레슨을 선호하는 분</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">저녁 시간대 레슨을 선호하는 분</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      레슨 특징
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">10년 경력의 젊은 에너지</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">최신 골프 기술과 트렌드 반영</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">데이터 기반 정확한 분석</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>레슨 시간</span>
                      <span className="text-gray-300 font-semibold">15:00 ~ 23:00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>휴무일</span>
                      <span className="text-gray-300 font-semibold">월요일, 토요일</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
