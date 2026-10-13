import React from 'react';
import { CLINIC_PROCESS, CLINIC_IMAGES, Language } from '../data/clinicData';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  return (
    <section id="process" className="py-24 bg-[#FAF9F5] border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
            <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
            <span>3-Step Treatment Journey</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
            체계적이고 편안한 3단계 진료 과정
          </h2>
          <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
            환자분께서 치료의 모든 단계를 명확히 이해하고 안심하실 수 있도록, 
            3D 디지털 분석부터 1:1 전담 시술과 평생 사후관리까지 정밀하게 진행됩니다.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_PROCESS.map((item, index) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-8 border border-[#DEE5DF] shadow-xs flex flex-col justify-between hover:border-[#ADC7B5] hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#122A1F]/30 group-hover:text-[#2E6B47] transition-colors">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#EBF1EC] text-[#1D4A32]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#122A1F] leading-snug">
                  {item.title[currentLang]}
                </h3>

                <p className="text-xs text-[#526458] font-light leading-relaxed">
                  {item.desc[currentLang]}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F3EF]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#2E6B47]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Banner / Trust Quote */}
        <div className="bg-[#122A1F] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs text-[#79D29B] font-semibold tracking-wider uppercase">
              DentArt Diagnostic Standards
            </span>
            <h3 className="font-serif text-2xl font-bold">
              “정직한 진단이 최고의 치료 결과를 만듭니다”
            </h3>
            <p className="text-xs sm:text-sm text-[#B4C9BE] font-light leading-relaxed">
              대학병원급 3D 저선량 CT와 3Shape TRIOS 5 구강 스캐너로 오차 없이 정밀 진단하며, 꼭 필요한 치료만 권해 드립니다.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-white text-[#122A1F] hover:bg-[#F2F6F3] px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shrink-0 cursor-pointer self-start md:self-auto"
          >
            <Calendar className="w-4 h-4 text-[#2E6B47]" />
            <span>정밀 검진 예약하기</span>
          </button>
        </div>
      </div>
    </section>
  );
};
