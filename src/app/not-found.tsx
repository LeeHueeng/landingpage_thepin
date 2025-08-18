import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4'>
      {/* 골프공 애니메이션 */}
      <div className='relative mb-8'>
        <div className='w-32 h-32 bg-white rounded-full border-4 border-gray-300 shadow-lg animate-bounce'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-6xl font-bold text-gray-700'>404</div>
          </div>
          {/* 골프공의 딤플 효과 */}
          <div className='absolute top-4 left-4 w-2 h-2 bg-gray-400 rounded-full'></div>
          <div className='absolute top-8 right-6 w-1.5 h-1.5 bg-gray-400 rounded-full'></div>
          <div className='absolute bottom-6 left-8 w-1 h-1 bg-gray-400 rounded-full'></div>
          <div className='absolute bottom-8 right-4 w-1.5 h-1.5 bg-gray-400 rounded-full'></div>
        </div>
      </div>

      {/* 골프채 아이콘 */}
      <div className='mb-6'>
        <div className='flex items-center space-x-2'>
          <div className='w-1 h-16 bg-gray-800 rounded-full'></div>
          <div className='w-8 h-2 bg-gray-800 rounded-full'></div>
          <div className='w-6 h-1 bg-gray-600 rounded-full'></div>
        </div>
      </div>

      <h1 className='text-4xl font-bold text-gray-800 mb-4'>홀을 놓쳤습니다!</h1>
      <p className='text-xl text-gray-600 mb-2'>찾으시는 페이지가 골프장 어딘가로 날아갔나 봅니다.</p>
      <p className='text-lg text-gray-500 mb-8'>다시 홈 그린으로 돌아가서 새로운 게임을 시작해보세요.</p>

      <Link 
        href='/' 
        className='px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2'
      >
        <span>🏌️</span>
        <span>홈으로 돌아가기</span>
      </Link>

      {/* 골프장 요소들 */}
      <div className='absolute bottom-10 left-10 text-green-300 text-6xl opacity-20'>⛳</div>
      <div className='absolute top-20 right-16 text-green-300 text-4xl opacity-20'>🏌️</div>
      <div className='absolute bottom-20 right-10 text-green-300 text-5xl opacity-20'>🏌️‍♂️</div>
    </div>
  )
}
