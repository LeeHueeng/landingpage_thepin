"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Home() {
  const heroRef = useIntersectionObserver();
  const featuresRef = useIntersectionObserver();
  const facilitiesRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef.elementRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="relative z-20 text-center px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className={`text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-6xl lg:text-7xl ${heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              연습장의 기준을 바꾸다
            </h1>
            <p className={`mt-6 text-lg text-[#A78BFA] sm:text-xl ${heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '300ms'}}>
              더핀 골프 아카데미
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef.elementRef} className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl ${featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              왜 더핀 골프 아카데미인가요?
            </h2>
            <p className={`mt-2 text-lg leading-8 text-[#A1A1AA] ${featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
              최고의 시설과 전문적인 레슨으로 골프 실력을 향상시켜보세요
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* 트랙맨 프라이빗 스튜디오 */}
            <Link href="/facilities/trackman" className={`bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-[#262626] hover:border-[#A78BFA] group ${featuresRef.isVisible ? 'animate-zoom-in' : 'opacity-0 scale-95'}`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">트랙맨 프라이빗 스튜디오</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                최고급 트랙맨 시스템이 설치된 프라이빗 레슨 스튜디오 2룸을 운영합니다.
              </p>
            </Link>

            {/* 펏뷰 퍼팅 시뮬레이터 */}
            <Link href="/facilities/puttview" className={`bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-[#262626] hover:border-[#A78BFA] group transition-all duration-700 delay-100 ${featuresRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⛳</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">펏뷰 퍼팅 시뮬레이터</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                국내 최대 규모 7미터 퍼팅 전문 시뮬레이터 '펏뷰'로 정확한 퍼팅 연습이 가능합니다.
              </p>
            </Link>

            {/* QED 27타석 */}
            <Link href="/facilities/qed" className="bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-[#262626] hover:border-[#A78BFA] group animate-fade-in-up animation-delay-200">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">QED 27타석</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                최신 QED 시스템 27타석과 좌타까지 배려한 2타석을 제공합니다.
              </p>
            </Link>

            {/* 프로 1:1 맞춤 레슨 */}
            <div className="bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-[#262626] hover:border-[#A78BFA] group animate-fade-in-up animation-delay-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">프로 1:1 맞춤 레슨</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                전문 프로가 개인별 맞춤 커리큘럼으로 체계적인 레슨을 제공합니다.
              </p>
            </div>

            {/* 스마트폰 앱 예약 */}
            <div className="bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-[#262626] hover:border-[#A78BFA] group animate-fade-in-up animation-delay-400">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">스마트폰 앱 예약</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                간편한 앱을 통해 타석 및 레슨을 언제든지 예약할 수 있습니다.
              </p>
            </div>

            {/* 프리미엄 시설 */}
            <div className="bg-[#181818] p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border border-[#262626] hover:border-[#A78BFA] group animate-fade-in-up animation-delay-500">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">프리미엄 시설</h3>
              <p className="text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">
                깔끔한 인테리어와 편안한 대기공간으로 언제든 편히 쉴 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef.elementRef} className="py-24 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl ${facilitiesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              편의시설 및 서비스
            </h2>
            <p className={`mt-2 text-lg leading-8 text-[#A1A1AA] ${facilitiesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '200ms'}}>
              고객님의 편의를 위한 최고의 시설을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📅", title: "예약", desc: "온라인 예약 시스템" },
              { icon: "📶", title: "무선 인터넷", desc: "고속 Wi-Fi 제공" },
              { icon: "🚻", title: "남/녀 화장실", desc: "구분된 화장실" },
              { icon: "👥", title: "단체 이용", desc: "단체 예약 가능" },
              { icon: "🪑", title: "대기공간", desc: "편안한 휴식 공간" },
              { icon: "♿", title: "장애인 편의", desc: "휠체어 이용 가능" },
              { icon: "🅿️", title: "무료 주차", desc: "넉넉한 주차 공간" },
              { icon: "💳", title: "다양한 결제", desc: "지역화폐, 소비쿠폐" }
            ].map((facility, index) => (
              <div key={index} className={`bg-[#181818] p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#262626] hover:border-[#A78BFA] group ${facilitiesRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{facility.icon}</div>
                <h3 className="font-semibold text-[#F5F5F5] mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">{facility.title}</h3>
                <p className="text-sm text-[#A1A1AA] group-hover:text-[#D4D4D8] transition-colors duration-300">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.elementRef} className="py-24 bg-[#111111]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl ${ctaRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              지금 바로 골프 실력을 향상시켜보세요
            </h2>
            <p className={`mt-2 text-lg leading-8 text-[#A1A1AA] mb-8 ${ctaRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              전문적인 레슨과 최고의 시설로 여러분의 골프 여정을 도와드립니다
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="tel:0325670972"
                className="bg-[#FFFFFF] hover:bg-[#E4E4E7] px-8 py-4 rounded-full font-semibold text-lg text-[#000000] transition-all duration-300"
              >
                📞 032-567-0972
              </Link>
              <Link 
                href="/location"
                className="bg-[#E4E4E7] hover:bg-[#D4D4D8] px-8 py-4 rounded-full font-semibold text-lg text-[#000000] transition-all duration-300"
              >
                📍 위치 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
