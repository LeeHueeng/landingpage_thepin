'use client'

import React, { useEffect, useState } from 'react'

export default function ReservationPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    facility: '',
    message: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // 폼 데이터를 URL 파라미터로 변환
    const params = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      facility: formData.facility,
      message: formData.message
    })
    
    // 오픈채팅방 링크 생성
    const kakaoLink = `https://open.kakao.com/o/syels2Rh?${params.toString()}`
    
    // 새 창으로 오픈채팅방 열기
    window.open(kakaoLink, '_blank')
    
    // 안내 메시지 표시
    alert('카카오톡 오픈채팅방으로 이동합니다! 상담 내용을 전송해주세요.')
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 py-20 transition-all duration-1000 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}>
        {/* 헤더 섹션 */}
        <div className={`text-center mb-16 relative transition-all duration-1200 ease-out delay-200 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-6 mb-8 group">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
            <span className="text-gray-400 font-light tracking-[0.3em] uppercase text-sm group-hover:text-white transition-colors duration-500">
              Reservation & Inquiry
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-gray-500 to-gray-300 group-hover:via-white transition-all duration-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 tracking-tight">
            예약/문의
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
            더핀 골프아카데미와 함께하세요
          </p>
        </div>

        {/* 상담 일정 잡기 섹션 */}
        <div className={`max-w-4xl mx-auto transition-all duration-1400 ease-out delay-400 ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">📅 상담 일정 잡기</h2>
            
            {/* 상담 신청 폼 */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">희망 상담 날짜</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">희망 상담 시간</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">시간을 선택하세요</option>
                    <option value="09:00-10:00">09:00-10:00</option>
                    <option value="10:00-11:00">10:00-11:00</option>
                    <option value="11:00-12:00">11:00-12:00</option>
                    <option value="12:00-13:00">12:00-13:00</option>
                    <option value="13:00-14:00">13:00-14:00</option>
                    <option value="14:00-15:00">14:00-15:00</option>
                    <option value="15:00-16:00">15:00-16:00</option>
                    <option value="16:00-17:00">16:00-17:00</option>
                    <option value="17:00-18:00">17:00-18:00</option>
                    <option value="18:00-19:00">18:00-19:00</option>
                    <option value="19:00-20:00">19:00-20:00</option>
                    <option value="20:00-21:00">20:00-21:00</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">골프 경력</label>
                  <select
                    name="facility"
                    value={formData.facility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">경력을 선택하세요</option>
                    <option value="beginner">초보자 (1년 미만)</option>
                    <option value="intermediate">중급자 (1-3년)</option>
                    <option value="advanced">고급자 (3년 이상)</option>
                    <option value="pro">프로/준프로</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">상담 목적</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="어떤 부분을 상담받고 싶으신지, 특별한 요청사항이 있으시면 적어주세요"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    📅 상담 일정 신청
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}