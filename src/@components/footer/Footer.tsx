import React from 'react'
import Link from 'next/link'    

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 브랜드 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏌️</span>
              <h3 className="text-xl font-bold">더핀 골프 아카데미</h3>
            </div>
            <p className="text-[#A1A1AA] text-sm">
              청라큐이디 더핀골프아카데미<br />
              청라실내골프연습장
            </p>
            <div className="flex space-x-4">
              <span className="text-xs bg-[#262626] px-2 py-1 rounded">방문자 리뷰 154</span>
              <span className="text-xs bg-[#262626] px-2 py-1 rounded">블로그 리뷰 112</span>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-2 text-sm">
                <Link href='tel:0325670972'>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span className='underline'>032-567-0972</span>
              </div></Link>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>인천 서구 청라한내로100번길 24<br />쓰리엠파크2 4층 401-408호</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕒</span>
                <span>평일 영업시간: 07:00 ~ 23:00</span>
           
              </div>
              <div className="flex items-center space-x-2"> 
              <span>🕒</span>
            <span>주말(공휴일) 영업시간: 09:00 ~ 21:00</span>
              </div>
            </div>
          </div>    {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">운영시간 안내</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 w-3/4">
                <span>📍</span>
                <div className='flex justify-between w-full'>
                <span>평일 </span>
                <span>07:00 ~ 23:00</span>      </div>
               
            
          
              </div>
              <div className="flex items-center space-x-2 w-3/4">
                <span>🕒</span>
                <div className='flex justify-between w-full'>
                <span>주말(공휴일) </span>
                <span>09:00 ~ 21:00</span>      </div>
               
            
          
              </div>
     
            </div>
          </div>

          {/* 편의시설 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">편의시설</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-1">
                <span>✅</span>
                <span>예약</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📶</span>
                <span>무선 인터넷</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🚻</span>
                <span>남/녀 화장실</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>👥</span>
                <span>단체 이용</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-1 text-xs">
                <span>💳</span>
                <span>신용·체크 카드 사용 가능</span>
              </div>
            </div>
          </div>

          {/* 소셜 & 링크 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">소셜 & 링크</h4>
            <div className="space-y-2">
              <Link 
                href="https://blog.naver.com/thepin2024" 
                className="flex items-center space-x-2 text-sm hover:text-[#A78BFA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📝</span>
                <span>블로그</span>
              </Link>
              <Link 
                href="https://www.instagram.com/thepin_golf_academy/" 
                className="flex items-center space-x-2 text-sm hover:text-[#A78BFA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📸</span>
                <span>인스타그램</span>
              </Link>
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-semibold mb-2">찾아오시는 길</h5>
              <p className="text-xs text-[#A1A1AA]">
                쓰리엠파크2 건물입니다.<br />
                지상주차장이므로 4층으로 오시면<br />
                더욱 편리하게 방문 가능하십니다.
              </p>
            </div>
          </div>
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-[#262626] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[#A78BFA]">
              © 2024 더핀 골프 아카데미. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="hover:text-[#A78BFA] transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="hover:text-[#A78BFA] transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
