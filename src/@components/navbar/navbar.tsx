'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import GolfGame from './GolfGame'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGameOpen, setIsGameOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='flex justify-between items-center p-4 px-6 md:px-10 w-full fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg border-b border-[#262626]/50'>
      
      {/* 로고 */}
      <Link href='/' onClick={closeMenu}>
        <h1 className='text-lg md:text-2xl text-white font-nunito'>
          <span className='font-bold'>THE PIN</span>
          <span className='font-semibold'> GOLF ACADEMY</span>
        </h1>
      </Link>

      {/* 데스크톱 메뉴 */}
      <div className='hidden md:flex gap-6 text-white items-center'>
        {/* 첫 번째 그룹 - 위치 조정 가능 */}
        <div className='flex gap-6 items-end pb-0.5'>
          <Link href='/' className='hover:text-[#A78BFA] transition-colors'>시설 소개</Link>
          <Link href='/about' className='hover:text-[#A78BFA] transition-colors'>회원 혜택</Link>            
          <Link href='/reviews' className='hover:text-[#A78BFA] transition-colors'>사용 후기</Link>
          <Link href='/pros' className='hover:text-[#A78BFA] transition-colors'>프로 소개</Link>
          <Link href='/location' className='hover:text-[#A78BFA] transition-colors'>오시는 길</Link>
        </div>
        
        {/* 두 번째 그룹 - 위치 고정 */}
        <div className='flex gap-6 items-center'>
          <Link href='/reservation' className='bg-[#FFFFFF] hover:bg-[#E4E4E7] px-4 py-2 rounded-full transition-colors text-[#000000]'>예약/문의</Link>
          <button 
            onClick={() => setIsGameOpen(true)}
            className='hover:text-[#A78BFA] transition-colors text-lg'
            title="이스터에그 게임"
          >
            🎮
          </button>
        </div>
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
      <div className={`fixed  top-0 right-0 h-full w-full bg-[#0A0A0A]/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col h-full'>
          {/* 모바일 메뉴 헤더 */}
          <div className='flex justify-between items-center p-4 border-b border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-md'>
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
          <div className='flex flex-col p-4 space-y-4 text-white bg-[#0A0A0A]/90 backdrop-blur-md'>
            <Link 
              href='/' 
              onClick={closeMenu}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626]'
            >
              🏌️ 시설 소개
            </Link>
            <Link 
              href='/about' 
              onClick={closeMenu}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626]'
            >
              🎁 회원 혜택
            </Link>            
            <Link 
              href='/reviews' 
              onClick={closeMenu}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626]'
            >
              ⭐ 사용 후기
            </Link>
            <Link 
              href='/pros' 
              onClick={closeMenu}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626]'
            >
              👨‍🏫 프로 소개
            </Link>
            <Link 
              href='/location' 
              onClick={closeMenu}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626]'
            >
              📍 오시는 길
            </Link>
            <Link 
              href='/reservation' 
              onClick={closeMenu}
              className='bg-[#FFFFFF] hover:bg-[#E4E4E7] text-[#000000] px-6 py-3 rounded-full text-center transition-colors mt-4'
            >
              📞 예약/문의
            </Link>
            <button 
              onClick={() => {
                setIsGameOpen(true)
                closeMenu()
              }}
              className='text-white hover:text-[#A78BFA] transition-colors py-2 border-b border-[#262626] text-left'
            >
              🎮 이스터에그 게임
            </button>
          </div>

          {/* 모바일 메뉴 하단 정보 */}
          <div className='mt-auto p-4 border-t border-[#262626] bg-[#0A0A0A]/90 backdrop-blur-md'>
            <div className='text-[#A78BFA] text-sm space-y-2'>
              <div className='flex items-center space-x-2'>
                <span>📞</span>
                <span>032-567-0972</span>
              </div>
              <div className='text-xs text-[#A1A1AA]'>
                청라에서 인정한 프리미엄 골프장
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 골프 게임 모달 */}
      <GolfGame 
        isOpen={isGameOpen} 
        onClose={() => setIsGameOpen(false)} 
      />
    </nav>
  )
}
