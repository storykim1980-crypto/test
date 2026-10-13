import React from 'react';
import { Language, CLINIC_IMAGES } from '../data/clinicData';
import { ArrowDown, Calendar, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenBooking,
  onExploreTreatments,
}) => {
  return (
    <section className="relative pt-12 pb-20 bg-gradient-to-b from-[#FAF9F5] via-[#FCFCFA] to-white border-b border-[#E7EBE4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Tag & Big Editorial Serif Headline */}
        <div className="max-w-3xl space-y-5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EBF1EC] text-[#1D4A32] border border-[#D5E2D8]">
            <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
            <span>Specialized Treatments & Aesthetic Care</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#122A1F] tracking-tight leading-[1.18]">
            자연치아 본연의 건강과<br />
            조화로운 미소를 완성하는 정밀 치료
          </h1>

          <p className="text-base sm:text-lg text-[#4E6254] font-light leading-relaxed">
            체인점의 유령 의사나 과잉 진료 없이, 보건복지부 인증 대표원장이 첫 상담부터 마지막 진료까지 1:1로 직접 책임집니다. 
            대학병원급 3D 구강 스캐너와 컴퓨터 무통 마취기로 편안하고 안심되는 치과 진료를 경험하세요.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreTreatments}
              className="inline-flex items-center gap-2 bg-[#122A1F] hover:bg-[#1D3E2F] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>치료 프로그램 자세히 보기</span>
              <ArrowDown className="w-4 h-4 text-[#79D29B] group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F6F3] text-[#122A1F] border border-[#CBD6CE] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#2E6B47]" />
              <span>1:1 상담 예약 신청</span>
            </button>
          </div>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Image */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-[#D8E1DA] shadow-xl relative aspect-[16/10] bg-[#EAF0EB] group">
            <img
              src={CLINIC_IMAGES.hero}
              alt="덴트아트 치과 현대적이고 편안한 진료실"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#DDE5DF] shadow-lg max-w-md space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E6B47] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#122A1F]">
                  Dental Studio Commitment
                </span>
              </div>
              <p className="font-serif text-sm font-semibold text-[#122A1F]">
                “치아를 깎지 않는 것이 가장 훌륭한 치료입니다.”
              </p>
              <p className="text-[11px] text-[#55695D] font-light">
                0.1mm 에나멜 보존 철학 · 대표원장 1:1 책임 진료
              </p>
            </div>
          </div>

          {/* Side Trust Strip Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-[#DEE5DF] shadow-xs space-y-2 hover:border-[#A8C4B1] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#1D4A32] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#2E6B47]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#122A1F]">
                3Shape TRIOS 5 구강 스캔
              </h3>
              <p className="text-xs text-[#526458] font-light leading-relaxed">
                구역질 나는 고무 본뜨기 없이 1분 만에 오차 없는 정밀 3차원 구강 데이터를 채득합니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#DEE5DF] shadow-xs space-y-2 hover:border-[#A8C4B1] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#1D4A32] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#2E6B47]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#122A1F]">
                컴퓨터 제어 자동 무통 마취기
              </h3>
              <p className="text-xs text-[#526458] font-light leading-relaxed">
                체온 감응형 일정한 미세 주입 압력으로 치과 바늘 통증과 뻐근함을 획기적으로 낮춥니다.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#122A1F] text-white shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#89DFAB] font-semibold tracking-wider uppercase">
                  Warranty & Care
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#89DFAB]" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                최장 10년 정품 품질 보증제
              </h3>
              <p className="text-xs text-[#B5CCC0] font-light leading-relaxed">
                시술 즉시 정품 인증서 발급, 6개월 정기 검진 시 교합 무상 점검으로 치료 후에도 안심할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
