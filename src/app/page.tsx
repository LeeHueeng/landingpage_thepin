import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('/golf-course.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center text-white px-4">
          <div className="mb-6">
            <span className="text-6xl mb-4 block">🏌️</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              더핀 골프 아카데미
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              청라에서 인정한 프리미엄 연습 골프장
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              🏌️‍♂️ 예약하기
            </Link>
            <Link 
              href="/lesson" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              📚 레슨 문의
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              왜 더핀 골프 아카데미인가요?
            </h2>
            <p className="text-xl text-gray-600">
              최고의 시설과 전문적인 레슨으로 골프 실력을 향상시켜보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1:1 맞춤 레슨 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">프로 1:1 맞춤 레슨</h3>
              <p className="text-gray-600">
                전문 프로가 개인별 맞춤 커리큘럼으로 체계적인 레슨을 제공합니다.
              </p>
            </div>

            {/* 스마트폰 앱 예약 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">스마트폰 앱 예약</h3>
              <p className="text-gray-600">
                간편한 앱을 통해 타석 및 레슨을 언제든지 예약할 수 있습니다.
              </p>
            </div>

            {/* QED 27타석 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">QED 27타석</h3>
              <p className="text-gray-600">
                최신 QED 시스템 27타석과 좌타까지 배려한 2타석을 제공합니다.
              </p>
            </div>

            {/* 트랙맨 프라이빗 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">트랙맨 프라이빗 스튜디오</h3>
              <p className="text-gray-600">
                최고급 트랙맨 시스템이 설치된 프라이빗 레슨 스튜디오 2룸을 운영합니다.
              </p>
            </div>

            {/* 펏뷰 퍼팅 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⛳</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">펏뷰 퍼팅 시뮬레이터</h3>
              <p className="text-gray-600">
                국내 최대 규모 7미터 퍼팅 전문 시뮬레이터 '펏뷰'로 정확한 퍼팅 연습이 가능합니다.
              </p>
            </div>

            {/* 프리미엄 시설 */}
            <div className="bg-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">프리미엄 시설</h3>
              <p className="text-gray-600">
                깔끔한 인테리어와 편안한 대기공간으로 언제든 편히 쉴 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              편의시설 및 서비스
            </h2>
            <p className="text-xl text-gray-600">
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
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{facility.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            지금 바로 골프 실력을 향상시켜보세요
          </h2>
          <p className="text-xl text-green-100 mb-8">
            전문적인 레슨과 최고의 시설로 여러분의 골프 여정을 도와드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:0325670972"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              📞 032-567-0972
            </Link>
            <Link 
              href="/location"
              className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              📍 위치 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
