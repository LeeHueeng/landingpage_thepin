import Image from 'next/image'

export default function PuttviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">펏뷰 퍼팅 시뮬레이터</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            국내 최대 규모 7미터 퍼팅 전문 시뮬레이터 '펏뷰'로 정확한 퍼팅 연습이 가능합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">퍼팅 전문 연습 시설</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>국내 최대 7미터 퍼팅 거리</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>실시간 퍼팅 궤적 분석</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>다양한 그린 컨디션 시뮬레이션</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>퍼팅 스킬 향상을 위한 전문 프로그램</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-green-100 p-8 rounded-2xl">
              <div className="text-center text-6xl mb-4">⛳</div>
              <p className="text-center text-gray-600">
                펏뷰 퍼팅 시뮬레이터 이미지가 여기에 표시됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
