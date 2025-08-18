'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='flex justify-between items-center p-4 px-6 md:px-10 w-full fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-md shadow-lg border-b border-green-700/50'>
      
      {/* 로고 */}
      <Link href='/' onClick={closeMenu}>
        <h1 className='text-lg md:text-2xl font-bold text-white'>더핀 골프 아카데미 청라</h1>
      </Link>

      {/* 데스크톱 메뉴 */}
      <div className='hidden md:flex gap-6 text-white'>
        <Link href='/' className='hover:text-green-300 transition-colors'>시설 소개</Link>
        <Link href='/about' className='hover:text-green-300 transition-colors'>회원 혜택</Link>            
        <Link href='/reviews' className='hover:text-green-300 transition-colors'>사용 후기</Link>
        <Link href='/pros' className='hover:text-green-300 transition-colors'>프로 소개</Link>
        <Link href='/location' className='hover:text-green-300 transition-colors'>오시는 길</Link>
        <Link href='/reservation' className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors'>예약/문의</Link>
      </div>

      {/* 햄버거 메뉴 버튼 */}
      <button 
        onClick={toggleMenu}
        className='md:hidden text-white p-2'
        aria-label="메뉴 열기"
      >
        <div className='w-6 h-6 flex flex-col justify-center items-center'>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* 모바일 메뉴 오버레이 */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden' onClick={closeMenu}></div>
      )}

      {/* 모바일 메뉴 */}
      <div className={`fixed  top-0 right-0 h-full w-full bg-green-900/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col h-full'>
          {/* 모바일 메뉴 헤더 */}
          <div className='flex justify-between items-center p-4 border-b border-green-700 bg-green-900/90 backdrop-blur-md'>
            <h2 className='text-white font-semibold'>메뉴</h2>
            <button 
              onClick={closeMenu}
              className='text-white p-2'
              aria-label="메뉴 닫기"
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          {/* 모바일 메뉴 아이템들 */}
          <div className='flex flex-col p-4 space-y-4 text-white bg-green-900/90 backdrop-blur-md'>
            <Link 
              href='/' 
              onClick={closeMenu}
              className='text-white hover:text-green-300 transition-colors py-2 border-b border-green-700'
            >
              🏌️ 시설 소개
            </Link>
            <Link 
              href='/about' 
              onClick={closeMenu}
              className='text-white hover:text-green-300 transition-colors py-2 border-b border-green-700'
            >
              🎁 회원 혜택
            </Link>            
            <Link 
              href='/reviews' 
              onClick={closeMenu}
              className='text-white hover:text-green-300 transition-colors py-2 border-b border-green-700'
            >
              ⭐ 사용 후기
            </Link>
            <Link 
              href='/pros' 
              onClick={closeMenu}
              className='text-white hover:text-green-300 transition-colors py-2 border-b border-green-700'
            >
              👨‍🏫 프로 소개
            </Link>
            <Link 
              href='/location' 
              onClick={closeMenu}
              className='text-white hover:text-green-300 transition-colors py-2 border-b border-green-700'
            >
              📍 오시는 길
            </Link>
            <Link 
              href='/reservation' 
              onClick={closeMenu}
              className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-center transition-colors mt-4'
            >
              📞 예약/문의
            </Link>
          </div>

          {/* 모바일 메뉴 하단 정보 */}
          <div className='mt-auto p-4 border-t border-green-700 bg-green-900/90 backdrop-blur-md'>
            <div className='text-green-300 text-sm space-y-2'>
              <div className='flex items-center space-x-2'>
                <span>📞</span>
                <span>032-567-0972</span>
              </div>
              <div className='text-xs text-green-400'>
                청라에서 인정한 프리미엄 골프장
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
