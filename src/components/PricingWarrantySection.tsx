import React, { useState } from 'react';
import { PRICING_SCHEDULE, Language } from '../data/clinicData';
import { ShieldCheck, Phone, FileText, CheckCircle2, Sparkles, Calendar, Info } from 'lucide-react';

interface PricingWarrantyProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const PricingWarrantySection: React.FC<PricingWarrantyProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'insurance' | 'nonInsurance'>('insurance');

  return (
    <section id="pricing" className="py-24 bg-[#FAF9F5] border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
              <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
              <span>Transparent Fees & Warranty</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
              투명 정찰 진료비 & 품질보증제
            </h2>
            <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
              모든 시술의 예상 비용과 건강보험 혜택을 사전에 투명하게 공개합니다. 
              시술 후에도 정품 인증서와 최장 10년 품질 보증 시스템으로 치료 후까지 안심을 더합니다.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#DDE5DF] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'insurance'
                  ? 'bg-[#122A1F] text-white shadow-xs'
                  : 'text-[#55695D] hover:text-[#122A1F]'
              }`}
            >
              국민건강보험 급여 항목
            </button>
            <button
              onClick={() => setActiveTab('nonInsurance')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'nonInsurance'
                  ? 'bg-[#122A1F] text-white shadow-xs'
                  : 'text-[#55695D] hover:text-[#122A1F]'
              }`}
            >
              비급여 심미·보철 정찰제
            </button>
          </div>
        </div>

        {/* Pricing Tables */}
        {activeTab === 'insurance' ? (
          <div className="bg-white rounded-3xl border border-[#DDE5DF] overflow-hidden shadow-xs">
            <div className="p-6 bg-[#F2F6F3] border-b border-[#E3ECE5] flex items-center gap-2 text-xs text-[#245338]">
              <Info className="w-4 h-4 text-[#2E6B47]" />
              <span>대한민국 국민건강보험 적용 시 환자 본인부담금 기준 안내 (의원급 기준)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAFBF9] text-[#3D5244] font-semibold border-b border-[#E7EBE4]">
                  <tr>
                    <th className="py-4 px-6">진료 항목</th>
                    <th className="py-4 px-6">보험 적용 기준</th>
                    <th className="py-4 px-6">예상 본인부담금</th>
                    <th className="py-4 px-6">참고사항</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAEFE8] text-[#2C3E33]">
                  {PRICING_SCHEDULE.insurance.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                      <td className="py-4 px-6 font-bold text-[#122A1F]">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 text-[#2E6B47] font-medium">
                        {item.coverage}
                      </td>
                      <td className="py-4 px-6 font-serif font-bold text-[#122A1F]">
                        {item.copay}
                      </td>
                      <td className="py-4 px-6 text-xs text-[#526558] font-light">
                        {item.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#DDE5DF] overflow-hidden shadow-xs">
            <div className="p-6 bg-[#F2F6F3] border-b border-[#E3ECE5] flex items-center gap-2 text-xs text-[#245338]">
              <Info className="w-4 h-4 text-[#2E6B47]" />
              <span>정품 재료 사용 및 사전 고지 정찰제 (카드 무이자 분할 납부 지원)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAFBF9] text-[#3D5244] font-semibold border-b border-[#E7EBE4]">
                  <tr>
                    <th className="py-4 px-6">치료 항목</th>
                    <th className="py-4 px-6">사용 소재 및 시술 특징</th>
                    <th className="py-4 px-6">정찰 진료 비용</th>
                    <th className="py-4 px-6 text-right">사후관리 보증기간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAEFE8] text-[#2C3E33]">
                  {PRICING_SCHEDULE.nonInsurance.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F5] transition-colors">
                      <td className="py-4 px-6 font-bold text-[#122A1F]">
                        {item.name}
                      </td>
                      <td className="py-4 px-6 text-xs text-[#526558] font-light">
                        {item.desc}
                      </td>
                      <td className="py-4 px-6 font-serif font-bold text-[#122A1F]">
                        {item.price}
                      </td>
                      <td className="py-4 px-6 text-right font-medium text-[#2E6B47]">
                        {item.warranty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Insurance Claim Concierge Box */}
        <div className="bg-white rounded-3xl p-8 border border-[#DEE5DF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-serif text-xl font-bold text-[#122A1F] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#2E6B47]" />
              <span>실손보험 및 치아보험 청구 서류 무료 발행</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#4E6254] font-light leading-relaxed">
              가입하신 민간 치아보험이나 실손의료비 보험이 있으신가요? 
              수석 실장이 진료확인서, 치료차트, 진료비 세부내역서 등 청구에 필요한 모든 서류를 신속하게 무료로 발급해 드립니다.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#122A1F] text-white hover:bg-[#1D3E2F] px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
          >
            <Calendar className="w-4 h-4 text-[#79D29B]" />
            <span>비용 및 보험 상담 예약</span>
          </button>
        </div>
      </div>
    </section>
  );
};
