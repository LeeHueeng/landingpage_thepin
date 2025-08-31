import Image from 'next/image'

export default function TrackmanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">트랙맨 프라이빗 스튜디오</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최고급 트랙맨 시스템이 설치된 프라이빗 레슨 스튜디오 2룸을 운영합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">프리미엄 레슨 환경</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>최신 트랙맨 4 골프 시뮬레이터</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>프라이빗 공간으로 집중된 레슨</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>실시간 스윙 분석 및 피드백</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>전문 프로와 1:1 맞춤 레슨</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-green-100 p-8 rounded-2xl">
              <div className="text-center text-6xl mb-4">🏠</div>
              <p className="text-center text-gray-600">
                트랙맨 시뮬레이터 이미지가 여기에 표시됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
