import Image from 'next/image'

export default function QEDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">QED 27타석</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            최신 QED 시스템 27타석과 좌타까지 배려한 2타석을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">최신 QED 시스템</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>27개 프리미엄 타석</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>좌타 전용 2타석</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>실시간 타석 예약 시스템</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✓</div>
                <p>편안한 연습 환경</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-green-100 p-8 rounded-2xl">
              <div className="text-center text-6xl mb-4">🎯</div>
              <p className="text-center text-gray-600">
                QED 27타석 이미지가 여기에 표시됩니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
