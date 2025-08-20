'use client';

import { useEffect, useRef, useState } from 'react';

declare global { interface Window { kakao: any } }

/**
 * - 마커 드래그/지도 클릭 시 마커 이동
 * - 위/경도는 콘솔에 찍힘 (필요시 패널 추가 가능)
 * - InfoWindow 글자 줄바꿈/오버플로우 스타일 수정
 */
export default function LocationPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [curLatLng, setCurLatLng] = useState<{lat: number; lng: number} | null>(null);

  // ✅ 최종 좌표
  const LAT = 37.533785;
  const LNG = 126.630498;

  useEffect(() => {
    const KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (!KEY) { setMsg('환경변수(NEXT_PUBLIC_KAKAO_APP_KEY)가 비어있습니다.'); return; }

    // 혹시 남아있던 sdk 제거
    Array.from(document.scripts).forEach(s => {
      if (s.src.includes('dapi.kakao.com/v2/maps/sdk.js')) s.parentNode?.removeChild(s);
    });

    const SDK = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KEY}&autoload=false`;
    const s = document.createElement('script');
    s.src = SDK;
    s.async = true;

    s.onload = () => {
      const start = Date.now();
      (function waitLoad() {
        if (typeof window.kakao?.maps?.load === 'function') {
          window.kakao.maps.load(() => {
            if (typeof window.kakao?.maps?.LatLng === 'function') return initMap();
            // 코어 자동 로드 실패 시 강제 주입
            const core = document.createElement('script');
            core.src = 'https://t1.daumcdn.net/mapjsapi/js/main/4.4.19/kakao.js';
            core.onload = () => {
              if (typeof window.kakao?.maps?.LatLng === 'function') initMap();
              else setMsg('코어(kakao.js) 로드 실패');
            };
            core.onerror = () => setMsg('코어(kakao.js) 요청 실패');
            document.head.appendChild(core);
          });
        } else if (Date.now() - start < 10000) {
          setTimeout(waitLoad, 50);
        } else {
          setMsg('SDK load 함수 준비 타임아웃');
        }
      })();
    };

    s.onerror = () => setMsg('카카오 SDK 스크립트 로드 실패');
    document.head.appendChild(s);

    return () => { s.parentNode?.removeChild(s); };
  }, []);

  function initMap() {
    try {
      if (!mapRef.current) return;
      if (typeof window.kakao?.maps?.LatLng !== 'function') { setMsg('SDK가 아직 준비되지 않았습니다.'); return; }

      const center = new window.kakao.maps.LatLng(LAT, LNG);
      const map = new window.kakao.maps.Map(mapRef.current, { center, level: 3 }); // level은 3~5 사이 추천
      // 확대/축소 컨트롤 추가(미세 조정 편하게)
      map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);

      // ✅ 드래그 가능한 마커
      const marker = new window.kakao.maps.Marker({
        map,
        position: center,
        draggable: true,
      });

      // ✅ 인포윈도우: 한 줄 고정(줄바꿈 방지)
const info = new window.kakao.maps.InfoWindow({
    content: `
      <div style="
        padding:6px 10px;
        font-size:13px;
        line-height:1.4;
        white-space:nowrap;   /* 줄바꿈 금지 */
        max-width:none;       /* 가로 제한 제거(혹은 320px 정도로 넉넉히) */
      ">
        <strong>더핀 골프 아카데미 청라</strong> · 쓰리엠파크2 4층 401호 ~ 408호
      </div>
    `,
  });
  info.open(map, marker);
  

      // 좌표 패널(상태) 초기 표시(필요시 UI로 쓸 수 있음)
      setCurLatLng({ lat: Number(center.getLat().toFixed(6)), lng: Number(center.getLng().toFixed(6)) });

      // 지도 클릭 → 마커 이동 + 콘솔/상태 갱신
      window.kakao.maps.event.addListener(map, 'click', (e: any) => {
        const latlng = e.latLng;
        marker.setPosition(latlng);
        updatePanel(latlng);
      });

      // 마커 드래그 종료 → 상태 갱신
      window.kakao.maps.event.addListener(marker, 'dragend', () => {
        const latlng = marker.getPosition();
        updatePanel(latlng);
      });

      function updatePanel(latlng: any) {
        const lat = Number(latlng.getLat().toFixed(6));
        const lng = Number(latlng.getLng().toFixed(6));
        setCurLatLng({ lat, lng });
        console.log('CURRENT LAT,LNG =', lat, lng);
      }

      setMsg(null);
    } catch (e) {
      console.error(e);
      setMsg('지도 초기화 중 오류가 발생했습니다.');
    }
  }

  async function copyText(txt: string) {
    try {
      await navigator.clipboard.writeText(txt);
      setMsg('복사됨: ' + txt);
      setTimeout(() => setMsg(null), 1500);
    } catch {
      setMsg('클립보드 복사 실패 (브라우저 권한 확인)');
      setTimeout(() => setMsg(null), 2000);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">오시는 길</h1>
      <div className="mb-6 text-center">
        <p className="text-lg mb-2">인천 서구 청라한내로100번길 24</p>
        <p className="text-lg mb-2">쓰리엠파크2 4층 401호 ~ 408호</p>
      </div>

      {msg && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{msg}</div>
      )}

      <div ref={mapRef} style={{ width: '100%', height: 500, border: '1px solid #ddd', borderRadius: 8 }} />

      
    </div>
  );
}
