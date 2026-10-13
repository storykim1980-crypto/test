import React from 'react';
import { Language } from '../data/clinicData';
import { Phone, Mail, MapPin, Clock, Calendar, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <footer className="bg-[#122A1F] text-[#E0EAE3] pt-16 pb-12 border-t border-[#1C3A2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#214233]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F4532] text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                D
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  DentArt
                </span>
                <span className="text-[11px] text-[#79D29B] font-medium tracking-wider uppercase">
                  덴트아트 치과의원
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8C2B3] font-light leading-relaxed max-w-sm break-keep">
              치아는 한 번 깎아내면 되돌릴 수 없습니다.
              0.1mm 최소삭제 원칙과 대학병원급 3D 디지털 장비로 환자분의 자연치아를 평생 지켜드리는 정직한 1:1 책임 치과입니다.
            </p>
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-white text-[#122A1F] hover:bg-[#F0F5F2] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#2E6B47]" />
                <span>1:1 상담 예약하기</span>
              </button>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              진료 안내
            </h4>
            <ul className="space-y-3.5 text-[#B2CABE] font-light">
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  최소삭제 세라믹 라미네이트
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  인비절라인® 디지털 투명교정
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  자연치아 보존 미세현미경 치료
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  3D 컴퓨터 네비게이션 임플란트
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  국민건강보험 급여 항목 & 수가표
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              진료시간 및 위치 안내
            </h4>
            <div className="space-y-4 text-[#B2CABE] font-light">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#79D29B] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p>월·수·목·금: 09:30 - 18:30 (점심시간 13:00 - 14:00)</p>
                  <p><strong className="text-[#79D29B] font-semibold">화요일 야간진료: 09:30 - 20:30</strong></p>
                  <p>토요일: 09:30 - 14:00 (점심시간 없이 진료)</p>
                  <p className="text-[11px] text-[#7A9988]">일요일 및 공휴일 휴진</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#79D29B] shrink-0 mt-0.5" />
                <p className="leading-relaxed break-keep">
                  <a
                    href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20152%20%EA%B0%95%EB%82%A8%ED%83%80%EC%9B%8C"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white underline underline-offset-4 decoration-[#3A5C4A]"
                  >
                    서울 강남구 테헤란로 152 강남타워 4층
                  </a>
                  <br />
                  (지하철 2호선 역삼역 3번 출구 도보 1분 · 건물 내 무료 발렛 주차)
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#79D29B] shrink-0" />
                <a href="tel:02-882-2875" className="font-bold text-white hover:text-[#79D29B] transition-colors">
                  02-882-2875
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E998B] font-light">
          <div>
            <p>상호명: 덴트아트 치과의원 | 대표자: 김태훈 | 사업자등록번호: 211-14-89210</p>
            <p>의료기관 개설허가번호: 제2024-3250012호 | 개인정보관리책임자: 이지영</p>
          </div>
          <p>© 2026 DentArt Aesthetic & Restorative Dental Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
