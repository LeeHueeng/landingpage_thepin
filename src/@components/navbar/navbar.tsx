import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='flex justify-between items-center p-4 px-10 w-full fixed top-0 left-0 right-0 z-50 ' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' }}>
        <Link href='/'>
            <h1 className='text-2xl font-bold text-white'>더핀 골프 아카데미 청라</h1>
        </Link>
        <div className='flex gap-4 text-white'>
            <Link href='/'>시설 소개</Link>
            <Link href='/about'>회원 혜택</Link>            
            <Link href='/contact'>사용 후기</Link>
            <Link href='/contact'>프로 소개</Link>
            <Link href='/contact'>오시는 길</Link>
            <Link href='/contact'>예약/문의</Link>
        </div>
    </div>
  )
}
