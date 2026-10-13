import React, { useState } from 'react';
import { TREATMENTS, TreatmentItem, Language } from '../data/clinicData';
import { 
  Coins, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  ChevronRight, 
  Calendar, 
  Check, 
  X,
  Sparkles,
  FileText,
  Info
} from 'lucide-react';

interface TreatmentsSectionProps {
  currentLang: Language;
  onSelectTreatmentForBooking: (treatmentId: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  currentLang,
  onSelectTreatmentForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);
  const [modalTab, setModalTab] = useState<'procedure' | 'pricing' | 'precautions' | 'aftercare'>('procedure');

  const categories = [
    { id: 'all', label: { ko: '전체 치료 보기', en: 'All Treatments' } },
    { id: 'cosmetic', label: { ko: '심미보철·라미네이트', en: 'Porcelain Veneers' } },
    { id: 'ortho', label: { ko: '투명교정·인비절라인', en: 'Invisalign®' } },
    { id: 'restorative', label: { ko: '자연치아 보존·신경치료', en: 'Restorative Care' } },
    { id: 'implant', label: { ko: '정밀 임플란트', en: 'Dental Implants' } },
    { id: 'hygiene', label: { ko: '무통 스케일링·예방', en: 'Hygiene & Scaling' } },
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  return (
    <section id="treatments" className="py-24 bg-[#FAF9F5] border-b border-[#E7EBE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header (DentArt Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1D4A32] bg-[#EBF1EC] px-3.5 py-1.5 rounded-full border border-[#D5E2D8]">
              <Sparkles className="w-3.5 h-3.5 text-[#2E6B47]" />
              <span>Specialized Clinical Treatments</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#122A1F] tracking-tight">
              덴트아트 전문 치료 프로그램
            </h2>
            <p className="text-sm sm:text-base text-[#4E6254] font-light leading-relaxed">
              자연치아를 최대한 보존하는 최소침습 원칙과 3D 디지털 정밀 기술로 시술합니다. 
              체인점의 과잉 진단 없이, 각 치료별 비용·치료 기간·주의사항·사후관리를 명확하게 안내합니다.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs text-[#526558] font-light">
              총 {TREATMENTS.length}개 전문 진료 항목 운영 중
            </span>
          </div>
        </div>

        <p className="text-xs text-[#526558]">이미지는 진료 안내용입니다. 인물 사진은 AI 모델 이미지이며 실제 환자 또는 치료 결과 사진이 아닙니다.</p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#122A1F] text-white shadow-sm'
                  : 'bg-white text-[#4A5D50] hover:text-[#122A1F] hover:bg-[#EBF0E9] border border-[#DEE5DF]'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#DDE5DF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#ADC7B5] group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9EFEA]">
                  <img
                    src={item.image}
                    alt={item.name[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#122A1F] shadow-xs">
                      {item.categoryLabel[currentLang]}
                    </span>
                  </div>
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#122A1F]/85 backdrop-blur-md text-white">
                      {item.highlightTag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#122A1F] group-hover:text-[#25573B] transition-colors leading-snug">
                      {item.name[currentLang]}
                    </h3>
                    <p className="text-[11px] text-[#5A7061] tracking-wide font-light">
                      {item.subname}
                    </p>
                  </div>

                  <p className="text-xs text-[#4F6255] font-light leading-relaxed line-clamp-2">
                    {item.shortDesc[currentLang]}
                  </p>

                  {/* 4 Essential Dimensions (비용, 기간, 주의사항, 사후관리) */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E7EBE4] space-y-2.5 text-xs">
                    {/* 1. 비용 */}
                    <div className="flex items-start gap-2">
                      <Coins className="w-4 h-4 text-[#2E6B47] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold text-[#122A1F] block">
                          예상 비용:
                        </span>
                        <span className="text-[#35483B] font-medium">
                          {item.priceKrw}
                        </span>
                      </div>
                    </div>

                    {/* 2. 기간 & 내원 */}
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#2E6B47] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold text-[#122A1F] block">
                          치료 기간 및 내원:
                        </span>
                        <span className="text-[#35483B]">
                          {item.duration[currentLang]} ({item.visits[currentLang]})
                        </span>
                      </div>
                    </div>

                    {/* 3. 주의사항 */}
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-[#B87A24] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold text-[#122A1F] block">
                          시술 시 주의사항:
                        </span>
                        <span className="text-[#526458] line-clamp-1">
                          {item.precautions[0]}
                        </span>
                      </div>
                    </div>

                    {/* 4. 사후관리 & 보증 */}
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2E6B47] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold text-[#122A1F] block">
                          사후관리 및 보증:
                        </span>
                        <span className="text-[#35483B]">
                          {item.warrantyYears}년 품질보증서 발급 · 6개월 정기 리콜
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedTreatment(item);
                    setModalTab('procedure');
                  }}
                  className="flex-1 py-2.5 px-3 rounded-full border border-[#CBD6CE] text-[#122A1F] text-xs font-semibold hover:bg-[#F0F5F1] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#2E6B47]" />
                  <span>상세 가이드</span>
                </button>

                <button
                  onClick={() => onSelectTreatmentForBooking(item.id)}
                  className="flex-1 py-2.5 px-3 rounded-full bg-[#122A1F] text-white text-xs font-semibold hover:bg-[#1D3E2F] transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#79D29B]" />
                  <span>상담 예약</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Clinical Detail Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#DEE5DF] shadow-2xl relative space-y-6 p-6 sm:p-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#E7EBE4] pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF1EC] text-[#1D4A32]">
                    {selectedTreatment.categoryLabel[currentLang]}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF0E1] text-[#7A4B10]">
                    {selectedTreatment.highlightTag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#122A1F]">
                  {selectedTreatment.name[currentLang]}
                </h3>
                <p className="text-xs text-[#526558] font-light">
                  {selectedTreatment.tagline[currentLang]}
                </p>
              </div>

              <button
                onClick={() => setSelectedTreatment(null)}
                className="p-2 rounded-full hover:bg-[#F0F4F1] text-[#55695D] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-1.5 border-b border-[#E7EBE4] pb-2 text-xs font-semibold overflow-x-auto">
              <button
                onClick={() => setModalTab('procedure')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  modalTab === 'procedure'
                    ? 'bg-[#122A1F] text-white'
                    : 'text-[#55695D] hover:text-[#122A1F]'
                }`}
              >
                진료 과정 (5-Step)
              </button>
              <button
                onClick={() => setModalTab('pricing')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  modalTab === 'pricing'
                    ? 'bg-[#122A1F] text-white'
                    : 'text-[#55695D] hover:text-[#122A1F]'
                }`}
              >
                비용 & 보험 안내
              </button>
              <button
                onClick={() => setModalTab('precautions')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  modalTab === 'precautions'
                    ? 'bg-[#122A1F] text-white'
                    : 'text-[#55695D] hover:text-[#122A1F]'
                }`}
              >
                주의사항 & 생활관리
              </button>
              <button
                onClick={() => setModalTab('aftercare')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  modalTab === 'aftercare'
                    ? 'bg-[#122A1F] text-white'
                    : 'text-[#55695D] hover:text-[#122A1F]'
                }`}
              >
                사후관리 & 품질보증
              </button>
            </div>

            {/* Tab 1: Procedure */}
            {modalTab === 'procedure' && (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#4E6254] leading-relaxed">
                  {selectedTreatment.fullDesc[currentLang]}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#122A1F]">
                    단계별 정밀 시술 과정
                  </h4>
                  <div className="space-y-2.5">
                    {selectedTreatment.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E7EBE4] flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#122A1F] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-xs text-[#122A1F]">
                            {step.title}
                          </p>
                          <p className="text-[11px] text-[#526458] font-light mt-0.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Pricing */}
            {modalTab === 'pricing' && (
              <div className="space-y-4 text-xs">
                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E7EBE4] space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7EBE4]">
                    <span className="font-semibold text-[#122A1F]">예상 진료 수가:</span>
                    <span className="font-bold text-sm text-[#122A1F]">
                      {selectedTreatment.priceKrw}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7EBE4]">
                    <span className="font-semibold text-[#122A1F]">보험 적용 여부:</span>
                    <span className="font-medium text-[#2E6B47]">
                      {selectedTreatment.insuranceBadge[currentLang]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#122A1F]">소요 기간 및 내원:</span>
                    <span className="text-[#4E6254]">
                      {selectedTreatment.duration[currentLang]} · {selectedTreatment.visits[currentLang]}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EBF1EC] text-[#1D4A32] flex items-start gap-2.5 text-[11px]">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#2E6B47]" />
                  <p className="leading-relaxed">
                    덴트아트 치과는 환자분의 동의 없이 불필요한 비급여 시술을 권유하지 않습니다. 
                    방문 당일 3D 구강검진 후 정확한 진료비 산정 명세서를 투명하게 사전 교부해 드립니다.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Precautions */}
            {modalTab === 'precautions' && (
              <div className="space-y-3 text-xs">
                <h4 className="font-bold text-[#122A1F]">
                  치료 시 반드시 숙지해야 할 주의사항
                </h4>
                <div className="space-y-2">
                  {selectedTreatment.precautions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FFFBF5] border border-[#F5E2C4] flex items-start gap-2.5 text-[#63481B]"
                    >
                      <AlertCircle className="w-4 h-4 text-[#B87A24] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Aftercare */}
            {modalTab === 'aftercare' && (
              <div className="space-y-4 text-xs">
                <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E7EBE4] space-y-3">
                  <div className="flex items-center gap-2 text-[#2E6B47] font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    <span>최장 {selectedTreatment.warrantyYears}년 품질 보증 시스템</span>
                  </div>
                  <p className="text-[#4E6254] leading-relaxed">
                    {selectedTreatment.aftercare[currentLang]}
                  </p>
                </div>

                <div className="space-y-2 text-[11px] text-[#55695D]">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E6B47]" />
                    <span>정품 보증서 카드 및 시술 고유 바코드 발급</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2E6B47]" />
                    <span>6개월 주기 교합 정밀 점검 및 불소 도포 케어</span>
                  </p>
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-[#E7EBE4] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedTreatment(null)}
                className="px-5 py-2.5 rounded-full border border-[#CBD6CE] text-[#55695D] text-xs font-semibold hover:bg-[#F0F4F1] transition-colors cursor-pointer"
              >
                닫기
              </button>

              <button
                onClick={() => {
                  const id = selectedTreatment.id;
                  setSelectedTreatment(null);
                  onSelectTreatmentForBooking(id);
                }}
                className="flex-1 bg-[#122A1F] text-white py-3 px-6 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#1D3E2F] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#79D29B]" />
                <span>이 치료로 상담 예약 신청하기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
