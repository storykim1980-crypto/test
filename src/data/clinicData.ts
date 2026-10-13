export type Language = 'ko' | 'en';

export interface TreatmentItem {
  id: string;
  category: 'all' | 'cosmetic' | 'ortho' | 'restorative' | 'implant' | 'hygiene';
  categoryLabel: { ko: string; en: string };
  name: { ko: string; en: string };
  subname: string;
  tagline: { ko: string; en: string };
  shortDesc: { ko: string; en: string };
  fullDesc: { ko: string; en: string };
  priceKrw: string;
  priceJpy: string;
  insuranceBadge: { ko: string; en: string };
  isInsurance: boolean;
  duration: { ko: string; en: string };
  visits: { ko: string; en: string };
  steps: { title: string; desc: string }[];
  precautions: string[];
  aftercare: { ko: string; en: string };
  warrantyYears: number;
  highlightTag: string;
  image: string;
}

export interface DoctorProfile {
  name: { ko: string; en: string };
  title: { ko: string; en: string };
  role: { ko: string; en: string };
  badge: { ko: string; en: string };
  image: string;
  credentials: string[];
  philosophy: { ko: string; en: string };
}

export interface StaffMember {
  name: { ko: string; en: string };
  role: { ko: string; en: string };
  title: { ko: string; en: string };
  badge: { ko: string; en: string };
  description: { ko: string; en: string };
  duties: string[];
}

export const CLINIC_IMAGES = {
  hero: '/src/assets/images/hero_dentart_clinic_1791846640841.jpg',
  treatmentSuite: '/src/assets/images/treatment_suite_modern_1791846642395.jpg',
  patientSmile: '/src/assets/images/patient_smiling_natural_1791847230807.jpg',
  doctorLead: '/src/assets/images/doctor_korean_prostho_1791846641559.jpg',
  doctorWarm: '/src/assets/images/doctor_neighborhood_warm_1791850927783.jpg',
  clinicTeam: '/src/assets/images/clinic_team_doctors_1791847233256.jpg',
  treatmentRoom: '/src/assets/images/neighborhood_dental_chair_1791850927585.jpg',
  staffTeam: '/src/assets/images/clinic_staff_neighborhood_team_1791850928465.jpg',
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'minimal-prep-veneers',
    category: 'cosmetic',
    categoryLabel: { ko: '심미보철·라미네이트', en: 'Porcelain Veneers' },
    name: { ko: '최소삭제 세라믹 라미네이트', en: 'Minimal-Prep Porcelain Veneers' },
    subname: 'Minimal Prep Porcelain Veneers',
    tagline: {
      ko: '치아 삭제를 최소화하는 0.1~0.2mm 마이크로 에나멜 테크닉',
      en: 'Micro-enamel technique preserving 99% of natural tooth structure'
    },
    shortDesc: {
      ko: '자연치아를 거의 깎지 않고 스위스 정품 e.max 세라믹을 0.1mm 단위로 정밀 결합하여 투명감과 황금 미소선을 완성합니다.',
      en: 'Ultra-thin Swiss e.max ceramic bonded to natural enamel with zero to minimal reduction.'
    },
    fullDesc: {
      ko: '치아의 법랑질(에나멜)을 최대한 보존하는 최소삭제 원칙을 철저히 지킵니다. 3D 디지털 스마일 디자인으로 얼굴형과 입술선에 가장 어울리는 비율을 사전 시뮬레이션한 후, 마스터 치과기공사가 수공예로 질감과 투명도를 재현합니다.',
      en: 'Preserves the vital tooth enamel with a bespoke 3D smile simulation, crafting natural luminosity and proportions.'
    },
    priceKrw: '₩650,000 ~ ₩800,000 / 치아당 (비급여 정찰제)',
    priceJpy: '¥72,000 ~ ¥88,000',
    insuranceBadge: { ko: '비급여 정찰제 · 분납 가능', en: 'Non-Insurance · Transparent Fee' },
    isInsurance: false,
    duration: { ko: '약 5~7일 소요 (원데이 옵션 가능)', en: '5-7 Days (Same-day option available)' },
    visits: { ko: '2회 내원 (정밀 스캔 1회 + 영구 접착 1회)', en: '2 Visits (Scan + Bonding)' },
    steps: [
      { title: '3D 구강 스캔 & 디지털 스마일 디자인 (DSD)', desc: '트리오스 5 구강스캐너로 오차 없이 스캔 후 시술 후 미소를 3차원으로 미리 확인합니다.' },
      { title: '0.1mm 에나멜 표면 정돈 & 정밀 쉐이드 측정', desc: '치아를 거의 깎지 않고 표면 요철만 정리하며, 주변 치아와의 미세 색조를 측정합니다.' },
      { title: '임시 치아 모형(Mock-up) 착용 및 일상 테스트', desc: '실제 완성될 치아 모양을 임시 착용하여 발음, 교합, 지인들의 반응을 사전 점검합니다.' },
      { title: '원내 마스터 기공소 정밀 맞춤 세라믹 빌드업', desc: '스위스 Ivoclar e.max 정품 블록을 가공하여 자연스러운 투명도와 그라데이션을 부여합니다.' },
      { title: '고강도 듀얼큐어 레진 영구 접착 & 미세 교합 조정', desc: '에나멜-세라믹 화학적 결합을 통해 탈락 없는 반영구적 결합력을 완성합니다.' }
    ],
    precautions: [
      '시술 후 초기 48시간 동안은 커피, 카레, 와인 등 강한 착색성 음식을 삼가세요.',
      '앞니로 얼음, 게 껍질, 병뚜껑 등 지나치게 단단한 물질을 강하게 깨무는 습관은 피해주세요.',
      '시술 직후 며칠간 찬물에 일시적인 시림이 있을 수 있으며, 정상적인 적응 과정입니다.'
    ],
    aftercare: {
      ko: '시술 후 5년간 품질보증서 발급, 6개월 정기 검진 시 교합 무상 체크 및 폴리싱 제공',
      en: '5-year warranty certificate with complimentary bi-annual occlusion check'
    },
    warrantyYears: 5,
    highlightTag: '대표 심미 시술',
    image: CLINIC_IMAGES.patientSmile,
  },
  {
    id: 'invisalign-clear-aligner',
    category: 'ortho',
    categoryLabel: { ko: '투명교정·인비절라인', en: 'Clear Orthodontics' },
    name: { ko: '인비절라인® 정품 투명교정', en: 'Invisalign® Digital Clear Aligners' },
    subname: 'Invisalign® Clear Aligners',
    tagline: {
      ko: '철사와 브라켓 없이 보이지 않게 완성하는 비발치 중심 치열 교정',
      en: 'Discreet, removable clear aligners powered by 3D ClinCheck® AI prediction'
    },
    shortDesc: {
      ko: 'FDA 공인 특수 스마트트랙 소재의 맞춤형 투명 장치로 일상생활에 지장 없이 가지런한 치열을 만듭니다.',
      en: 'Virtually invisible aligners designed to fit comfortably and move teeth with gentle precision.'
    },
    fullDesc: {
      ko: '미국 Align Technology 정품 인비절라인 시스템을 사용합니다. 3D iTero 구강스캐너와 ClinCheck® AI 프로그램을 통해 치아의 이동 경로와 최종 완료 시점을 치료 시작 전에 환자가 직접 3차원 화면으로 확인합니다.',
      en: 'Customized using 3D ClinCheck software to visualize your treatment outcome before you even begin.'
    },
    priceKrw: '부분교정 ₩3,500,000~ / 전체교정 ₩5,500,000~',
    priceJpy: '¥390,000 ~ ¥620,000',
    insuranceBadge: { ko: '비급여 정찰제 · 12개월 무이자 분납', en: 'Non-Insurance · Installment Available' },
    isInsurance: false,
    duration: { ko: '부분교정 4~7개월 / 전체교정 12~18개월', en: 'Lite 4-7 mos / Full 12-18 mos' },
    visits: { ko: '6~8주에 1회 내원 (모바일 앱 원격 진도 체크)', en: 'Every 6-8 weeks (Remote monitoring)' },
    steps: [
      { title: '3D iTero 디지털 구강스캔', desc: '불편한 고무 인상재 없이 1분 만에 정밀 3D 구강 데이터를 수집합니다.' },
      { title: 'ClinCheck® 3D 시뮬레이션 상담', desc: '주차별 치아 이동 궤적과 치료 완료 후 모습을 3차원 영상으로 사전 공유합니다.' },
      { title: '미국 Align 본사 맞춤 장치 배송 및 수령', desc: '정품 스마트트랙 소재의 단계별 맞춤 얼라이너를 수령하고 착용법을 교육합니다.' },
      { title: '주차별 장치 자가 교체 & 원격 모니터링', desc: '1~2주마다 새 단계 장치로 교체하며, 스마트폰 앱으로 원격 진도를 확인합니다.' },
      { title: '교정 완료 후 비베라(Vivera) 정품 유지장치 장착', desc: '치아가 제자리로 돌아가지 않도록 정품 투명 유지장치로 미소를 영구 보존합니다.' }
    ],
    precautions: [
      '식사 및 양치 시간을 제외하고 하루 20~22시간 이상 반드시 착용하셔야 계획대로 치아가 이동합니다.',
      '식사 시에는 반드시 장치를 빼시고, 식후 깨끗이 양치한 후 다시 착용하세요.',
      '장치는 미온수와 전용 세정제로 세척하며, 뜨거운 물에 닿으면 변형될 수 있으니 주의하세요.'
    ],
    aftercare: {
      ko: '교정 종료 후 2년간 6개월 단위 무상 정기점검 및 유지장치 교합 체크',
      en: '2 years of post-orthodontic complimentary follow-up checks'
    },
    warrantyYears: 3,
    highlightTag: '비발치 맞춤 교정',
    image: CLINIC_IMAGES.treatmentSuite,
  },
  {
    id: 'zirconia-restorations',
    category: 'restorative',
    categoryLabel: { ko: '자연치아 보존·지르코니아', en: 'Restorative & Zirconia' },
    name: { ko: '맞춤 지르코니아 크라운 & 인레이', en: 'Custom Zirconia Inlay & Crown' },
    subname: 'Precision Zirconia Restorations',
    tagline: {
      ko: '자연치아 색상과 다이아몬드급 강도를 동시에 만족하는 무금속 보철',
      en: 'Metal-free biocompatible ceramic matching natural enamel aesthetics and bite strength'
    },
    shortDesc: {
      ko: '충치나 파절로 손상된 치아를 금속 노출 없이 자연치아 고유의 색과 튼튼한 강도로 완벽 복원합니다.',
      en: 'High-strength metal-free ceramic perfectly restoring damaged teeth with zero dark borders.'
    },
    fullDesc: {
      ko: '과거 금속이나 PFM 크라운의 잇몸 변색(블랙라인) 단점을 완전히 극복한 인체 친화적 풀 지르코니아를 사용합니다. 3D 밀링 시스템을 통해 정밀 가공하여 교합 간섭 없이 내 치아처럼 편안한 저작감을 제공합니다.',
      en: 'Eliminates unsightly grey margins around gums while offering exceptional durability for molars and premolars.'
    },
    priceKrw: '지르코니아 인레이 ₩280,000~ / 크라운 ₩550,000~',
    priceJpy: '¥31,000 ~ ¥61,000',
    insuranceBadge: { ko: '비급여 정찰제 · 5년 책임 보증', en: 'Non-Insurance · 5-Yr Warranty' },
    isInsurance: false,
    duration: { ko: '원데이 당일 완성 또는 4~5일 소요', en: 'Same-day or 4-5 Days' },
    visits: { ko: '1~2회 내원', en: '1-2 Visits' },
    steps: [
      { title: '미세현미경 충치 부위 정밀 제거', desc: '건전한 자연치아 조직을 최대한 남기고 감염된 우식 부위만 미세 절제합니다.' },
      { title: '3D 광학 스캔 및 디지털 캐드 디자인', desc: '교합면의 골과 능선을 컴퓨터 CAD로 1:1 환자 맞춤형으로 설계합니다.' },
      { title: '초정밀 5축 밀링기 지르코니아 가공', desc: '초고강도 다층 블록을 정밀 가공하여 자연스러운 투명도를 부여합니다.' },
      { title: '1,500도 고온 소결 및 표면 글레이징', desc: '세균 번식을 억제하고 대합치 마모를 방지하도록 매끄러운 표면으로 가공합니다.' },
      { title: '친환경 치과용 레진 시멘트 결합', desc: '치아와 틈새 없이 강력 접착하여 2차 충치를 원천 차단합니다.' }
    ],
    precautions: [
      '임시치아 부착 기간에는 엿, 카라멜, 껌 등 끈적거리는 음식 섭취를 피해주세요.',
      '최종 보철물 세팅 후 24시간 동안은 너무 단단한 음식 섭취를 삼가주세요.',
      '보철물 주변 잇몸에 치실과 치간칫솔을 꼼꼼히 사용하여 관리해 주세요.'
    ],
    aftercare: {
      ko: '5년간 보철물 파절 및 탈락 시 무상 수리 및 재제작 보증',
      en: '5-year structural warranty against fracture or loosening'
    },
    warrantyYears: 5,
    highlightTag: '자연치아 보존',
    image: CLINIC_IMAGES.treatmentRoom,
  },
  {
    id: 'digital-guided-implants',
    category: 'implant',
    categoryLabel: { ko: '정밀 네비게이션 임플란트', en: 'Guided Implants' },
    name: { ko: '3D 컴퓨터 네비게이션 임플란트', en: '3D Computer-Guided Dental Implants' },
    subname: 'Precision Digital Guided Implants',
    tagline: {
      ko: '무절개 핀홀 식립, 통증과 붓기 최소화, 스위스 정품 픽스처',
      en: 'Flapless micro-puncture placement with 3D surgical guide and Swiss fixture'
    },
    shortDesc: {
      ko: '잇몸을 크게 째지 않고 3D 모의수술 맞춤 가이드로 작은 구멍만 뚫어 식립하므로 출혈과 통증이 현저히 적습니다.',
      en: 'Minimally invasive placement planned in 3D to protect nerves, reducing healing time significantly.'
    },
    fullDesc: {
      ko: '저선량 3D CT 데이터와 구강 스캔 데이터를 결합하여 컴퓨터상에서 미리 모의수술을 진행합니다. 신경관과 인접 치아와의 안전거리를 0.01mm 오차 범위 내로 확보하며, 수술 당일 임시치아 체결로 일상생활 복귀가 빠릅니다.',
      en: 'Simulated digitally before surgery, our custom 3D surgical guide ensures accurate placement and immediate temporary teeth.'
    },
    priceKrw: '만65세 건강보험 약 ₩400,000 / 비급여 ₩1,100,000 ~ ₩1,400,000',
    priceJpy: '¥45,000 ~ ¥155,000',
    insuranceBadge: { ko: '만 65세 이상 건보 평생 2개 본인부담 30%', en: 'NHIS Senior Copay Eligible' },
    isInsurance: true,
    duration: { ko: '식립 당일 20분 / 골유착 8~12주', en: '20-min surgery / 8-12 weeks integration' },
    visits: { ko: '3~4회 내원', en: '3-4 Visits' },
    steps: [
      { title: '저선량 3D CT 및 잇몸 뼈 3차원 정밀 계측', desc: '골밀도와 잇몸뼈의 폭, 신경관의 위치를 3차원으로 면밀히 분석합니다.' },
      { title: '컴퓨터 가상 모의수술 및 3D 서지컬 가이드 제작', desc: '가장 이상적인 식립 각도와 깊이를 결정하고 맞춤 수술 유도 장치를 출력합니다.' },
      { title: '컴퓨터 무통 마취 하 무절개 핀홀 식립', desc: '잇몸 절개 없이 작은 홀을 통해 정확한 위치에 임플란트를 식립합니다.' },
      { title: '원내 맞춤형 지대주(Custom Abutment) 연결', desc: '환자 고유의 잇몸 형태에 맞춘 지대주로 음식물 끼임을 방지합니다.' },
      { title: '최종 지르코니아 보철물 체결 및 10년 보증서 발급', desc: '자연치아와 같은 강도의 최종 보철물을 완성하고 정품 인증서를 제공합니다.' }
    ],
    precautions: [
      '수술 후 2일간 침을 세게 뱉거나 빨대를 사용하지 마세요 (음압으로 인한 지혈 지연 방지).',
      '성공적인 골유착을 위해 최소 2주간 절대 금연 및 금주하셔야 합니다.',
      '수술 부위로 며칠간 자극적인 음식을 씹지 마시고 처방 약을 끝까지 복용하세요.'
    ],
    aftercare: {
      ko: '임플란트 픽스처 10년, 상부 보철물 5년 무상 보증 및 매년 잇몸뼈 정밀 엑스레이 체크',
      en: '10-year fixture warranty and 5-year prosthesis warranty with annual bone review'
    },
    warrantyYears: 10,
    highlightTag: '건보 혜택 가능',
    image: CLINIC_IMAGES.hero,
  },
  {
    id: 'microscopic-endodontics',
    category: 'restorative',
    categoryLabel: { ko: '자연치아 살리기·신경치료', en: 'Microscopic Endodontics' },
    name: { ko: '자연치아 보존 미세현미경 신경치료', en: 'Microscopic Endodontic Preservation' },
    subname: 'Microscopic Root Canal Therapy',
    tagline: {
      ko: '25배 확대 미세현미경으로 보이지 않는 숨은 근관까지 찾아내 발치 없이 보존',
      en: 'Saving your natural teeth through 25x Carl Zeiss dental operating microscope precision'
    },
    shortDesc: {
      ko: '통증이 심하거나 재신경치료가 필요한 치아도 쉽게 뽑지 않고 미세현미경으로 감염 신경만 깨끗이 제거합니다.',
      en: 'Advanced microscopic root canal therapy designed to preserve your natural tooth instead of extracting.'
    },
    fullDesc: {
      ko: '독일 칼자이스(Carl Zeiss) 첨단 치과용 미세현미경을 활용하여 육안으로는 보이지 않는 C형 근관, 미세 파절선, 잔여 신경 조직까지 꼼꼼히 찾아냅니다. 발치 전 자연치아를 살리는 마지막 방어선 역할을 수행합니다.',
      en: 'Utilizes high-magnification optics to clean intricate canal systems, treating difficult teeth with high success rates.'
    },
    priceKrw: '국민건강보험 적용 본인부담금 약 ₩15,000 ~ ₩35,000 (회당)',
    priceJpy: '¥1,700 ~ ¥3,900',
    insuranceBadge: { ko: '국민건강보험 100% 급여 적용', en: '100% NHIS Insurance Covered' },
    isInsurance: true,
    duration: { ko: '약 1~2주 (2~3회 내원)', en: '1-2 Weeks (2-3 Visits)' },
    visits: { ko: '2~3회 내원', en: '2-3 Visits' },
    steps: [
      { title: '무통 마취 및 러버댐(방습포) 완벽 격리', desc: '침 속 구강 세균이 신경관 내부로 침투하지 못하도록 철저한 무균 환경을 조성합니다.' },
      { title: '25배 칼자이스 미세현미경 하 근관 탐색', desc: '육안으로 놓치기 쉬운 미세 부근관과 석회화된 신경관 입구를 정확히 확보합니다.' },
      { title: '첨단 무통 Ni-Ti 로터리 파일 근관 소독 및 성형', desc: '유연한 티타늄 기구로 굴곡진 신경관 내부의 염증 조직을 정밀 세척합니다.' },
      { title: '친환경 바이오세라믹 생체친화적 근관 밀폐', desc: '신경관 내부를 무균 상태로 채워 재감염을 완벽히 차단합니다.' },
      { title: '치아 파절 방지 코어 축조 및 보철물 연결', desc: '약해진 치아를 보호하기 위해 단단한 코어를 보강하고 크라운을 씌웁니다.' }
    ],
    precautions: [
      '신경치료가 진행되는 동안에는 해당 치아로 절대 단단한 음식을 씹지 마세요 (치아 파절 위험).',
      '임시 약제가 빠졌을 경우 세균 감염 우려가 있으니 즉시 치과로 연락 후 내원하세요.',
      '치료 초기 며칠간 욱신거리는 통증이 있을 수 있으며 처방된 진통소염제를 복용하세요.'
    ],
    aftercare: {
      ko: '치료 완료 3개월, 6개월, 1년 차 치근단 엑스레이 무상 추적 관찰',
      en: 'Complimentary follow-up X-rays at 3, 6, and 12 months post-treatment'
    },
    warrantyYears: 3,
    highlightTag: '자연치아 살리기',
    image: CLINIC_IMAGES.treatmentRoom,
  },
  {
    id: 'gentle-hygiene-scaling',
    category: 'hygiene',
    categoryLabel: { ko: '무통 스케일링·예방관리', en: 'Gentle Scaling & Hygiene' },
    name: { ko: '가온수 무통 스케일링 & 에어플로우 케어', en: 'Gentle Scaling & Biofilm Airflow Therapy' },
    subname: 'Ultrasonic Scaling & Airflow Polish',
    tagline: {
      ko: '체온에 맞춘 미온수 분사와 아미노산 파우더로 시림 없는 편안한 딥클리닝',
      en: 'Warm-water ultrasonic scaling and amino acid airflow polishing with zero dental anxiety'
    },
    shortDesc: {
      ko: '금속 기구로 긁어내는 통증 없이 미온수와 미세 파우더로 치석과 착색 바이오필름을 부드럽게 세정합니다.',
      en: 'Gentle, pain-free hygiene treatment removing hardened calculus and stubborn tea/coffee stains.'
    },
    fullDesc: {
      ko: '치과 공포증의 주원인이었던 스케일링 통증과 시림을 해소하기 위해 도포 가글 마취와 36도 가온수 초음파 스케일러를 사용합니다. 스위스 EMS 정품 에어플로우 파우더로 치아 표면의 니코틴, 커피 착색을 상처 없이 말끔히 씻어냅니다.',
      en: 'Combines topical numbing rinse, body-temperature water stream, and fine erythritol powder to deep clean without damaging enamel.'
    },
    priceKrw: '만 19세 이상 건강보험 적용 시 약 ₩16,000대 (비급여 착색제거 ₩50,000~)',
    priceJpy: '¥1,800 ~ ¥5,500',
    insuranceBadge: { ko: '만 19세 이상 국민건강보험 연 1회 적용', en: 'Annual NHIS Insurance Covered' },
    isInsurance: true,
    duration: { ko: '약 35~40분 소요', en: 'Approx. 35-40 Minutes' },
    visits: { ko: '1회 내원 (연 1~2회 정기 관리)', en: '1 Visit (Recommended twice yearly)' },
    steps: [
      { title: '구강 카메라 고해상도 치석 및 잇몸 염증 진단', desc: '환자가 직접 모니터로 치석 분포와 잇몸 붓기 정도를 확인합니다.' },
      { title: '시림 방지 딸기향 가글 국소 도포 마취', desc: '잇몸 표면 감각을 부드럽게 둔화시켜 스케일링 시 찌릿한 느낌을 차단합니다.' },
      { title: '가온수(36도) 초음파 미세 팁 치석 제거', desc: '차가운 물로 인한 이 시림 없이 잇몸선 위아래 치석을 깨끗이 박리합니다.' },
      { title: '에어플로우 아미노산 파우더 미세 착색 세정', desc: '치아 표면에 달라붙은 커피, 와인, 담배 찌꺼기 바이오필름을 연마합니다.' },
      { title: '전담 치과의사 구강 검진 & 1:1 맞춤 구강위생 코칭', desc: '대표원장의 최종 충치/잇몸 검진과 환자 치열에 맞는 치간칫솔 사이즈를 처방합니다.' }
    ],
    precautions: [
      '스케일링 당일은 너무 뜨겁거나 차가운 음식, 맵고 짠 자극성 음식을 피해주세요.',
      '잇몸 염증이 심했던 부위는 1~2일간 칫솔질 시 피가 살짝 날 수 있으나 곧 가라앉습니다.',
      '치석이 제거된 공간으로 일시적인 시림이 발생할 수 있으며 1주일 내 완화됩니다.'
    ],
    aftercare: {
      ko: '6개월 단위 정기 스케일링 및 구강 검진 무료 알림톡 발송',
      en: 'Automatic 6-month preventive hygiene recall notification'
    },
    warrantyYears: 1,
    highlightTag: '건보 연 1회 혜택',
    image: CLINIC_IMAGES.treatmentSuite,
  },
  {
    id: 'direct-composite-bonding',
    category: 'cosmetic',
    categoryLabel: { ko: '자연치아 보존·레진', en: 'Composite Bonding' },
    name: { ko: '무삭제 다이렉트 레진 심미 본딩', en: 'Minimal-Invasive Composite Bonding' },
    subname: 'Direct Resin Artistry & Repair',
    tagline: {
      ko: '치아를 깎지 않고 깨진 앞니와 치간 틈새를 당일 40분 만에 자연스럽게 복원',
      en: 'Repair chipped edges and gaps in a single 40-minute appointment with zero tooth drilling'
    },
    shortDesc: {
      ko: '앞니가 살짝 깨지거나 벌어졌을 때, 비싼 라미네이트 없이 자연치아 색조 레진으로 당일 정교하게 메꿉니다.',
      en: 'Conservative aesthetic bonding sculpts nano-hybrid resin directly onto teeth for instant results.'
    },
    fullDesc: {
      ko: '치아를 깎아내는 시술이 부담스러운 환자분들을 위한 가장 보존적인 심미 치료입니다. 고광택 나노 하이브리드 레진을 3단계 쉐이드로 적층 축조하여 빛 반사와 투명도를 원래 치아와 구분하기 어렵게 복원합니다.',
      en: 'Ideal for small chips, gaps, or contour irregularities, preserving every millimeter of healthy tooth structure.'
    },
    priceKrw: '₩120,000 ~ ₩180,000 / 부위당 (정찰제)',
    priceJpy: '¥13,000 ~ ¥20,000',
    insuranceBadge: { ko: '비급여 정찰제 (12세 이하 충치 건보 적용)', en: 'Transparent Fixed Fee' },
    isInsurance: false,
    duration: { ko: '약 30~45분 (당일 1회 완성)', en: '30-45 Minutes (Single Visit)' },
    visits: { ko: '당일 1회 방문으로 즉시 일상 복귀', en: '1 Visit (Same-day completion)' },
    steps: [
      { title: '치아 색조 및 투명도 3D 디지털 분석', desc: '에나멜층과 덴틴층의 서로 다른 빛 굴절률을 측정합니다.' },
      { title: '치아 삭제 없는 표면 에칭 및 프라이밍', desc: '치아를 깎지 않고 표면에 미세 결합 공간만을 형성합니다.' },
      { title: '다층 나노 복합 레진 핸드메이드 축조', desc: '층층이 색조를 쌓아 올려 자연치아와 경계선이 드러나지 않도록 성형합니다.' },
      { title: '특수 파장 광중합 및 다이아몬드 버 폴리싱', desc: '단단하게 굳힌 후 에나멜과 동일한 자연스러운 유리 광택을 냅니다.' },
      { title: '정밀 교합 테스트 및 저작 체크', desc: '식사 시 앞니에 무리가 가지 않도록 교합면을 미세 조정합니다.' }
    ],
    precautions: [
      '시술 당일은 앞니로 단단한 사과나 고기 뼈를 강하게 베어 물지 마세요.',
      '초기 24시간 동안은 착색 음료(콜라, 커피) 섭취 후 물로 가볍게 입안을 헹구어 주세요.',
      '정기 스케일링 시 레진 부위는 부드러운 팁으로 폴리싱 관리해 드립니다.'
    ],
    aftercare: {
      ko: '1년간 파절 및 변색 발생 시 무상 리터치 및 연마 제공',
      en: '1-year complimentary touch-up and repolishing guarantee'
    },
    warrantyYears: 1,
    highlightTag: '당일 30분 완성',
    image: CLINIC_IMAGES.patientSmile,
  },
];

export const DOCTORS: DoctorProfile[] = [
  {
    name: { ko: '김태훈 대표원장', en: 'Dr. Tae-hoon Kim, D.D.S., Ph.D.' },
    title: { ko: '보건복지부 인증 전문의 · 치의학 박사', en: 'Board Certified Specialist · Ph.D.' },
    role: { ko: '덴트아트 치과의원 대표원장 (1:1 책임 진료)', en: 'Clinic Director & Lead Dentist' },
    badge: { ko: '대표원장 전담제', en: 'Lead Dentist' },
    image: CLINIC_IMAGES.doctorLead,
    credentials: [
      '보건복지부 인증 통합치의학과 전문의',
      '서울대학교 치과대학 졸업 및 동 대학원 치의학 박사',
      '미국치과의사협회(ADA) 국제회원',
      '대한심미치과학회(KAED) 정회원 & 인정의',
      '대한치과보철학회 / 보존학회 평생회원',
      '인비절라인(Invisalign®) 글로벌 공인 인증의',
      '오스템 & 덴티움 임플란트 수석 연구 자문의',
    ],
    philosophy: {
      ko: '“치아는 한 번 깎아내면 다시 자라지 않습니다. 환자분의 자연치아를 한 개라도 더 살리고, 과잉 진료 없이 10년 후에도 편안한 미소를 유지할 수 있도록 첫 상담부터 마지막 진료까지 제 이름을 걸고 직접 진료합니다.”',
      en: '"Natural teeth never regrow once ground down. I treat every patient directly from consultation to post-care, upholding the minimal-invasive philosophy for long-lasting health."'
    }
  }
];

export const CLINICAL_STAFF: StaffMember[] = [
  {
    name: { ko: '이지영 수석 실장', en: 'Ji-young Lee' },
    title: { ko: '수석 진료상담 코디네이터', en: 'Head Patient Concierge' },
    role: { ko: '환자 접수 & 1:1 맞춤 상담 (1명)', en: 'Reception & Treatment Planning' },
    badge: { ko: '경력 12년', en: '12 Yrs Exp' },
    description: {
      ko: '처음 내원하신 환자분의 치과 공포증을 덜어드리고, 과잉 진료 없는 정직한 치료 계획과 건강보험 혜택을 꼼꼼하게 사전 체크해 드립니다.',
      en: 'Dedicated to calming patient anxiety and explaining transparent insurance benefits without unwanted sales pressure.'
    },
    duties: ['진료 접수 및 1:1 진료 계획 상담', '건강보험 급여 항목 사전 조회', '환자 맞춤형 일정 조율 및 안심 케어']
  },
  {
    name: { ko: '박수현 책임 치위생사', en: 'Su-hyun Park, RDH' },
    title: { ko: '책임 치과위생사 (국가면허)', en: 'Senior Dental Hygienist' },
    role: { ko: '임상 진료 어시스트 & 무통 스케일링 (전담 1)', en: 'Clinical Care & Hygiene' },
    badge: { ko: '국가면허 보유', en: 'Certified RDH' },
    description: {
      ko: '보건복지부 면허를 보유한 전문 치과위생사로, 대표원장님과의 정밀 진료 호흡과 통증 없는 가온수 스케일링을 전담합니다.',
      en: 'Licensed professional hygienist specializing in gentle warm-water ultrasonic scaling and clinical assistance.'
    },
    duties: ['보건복지부 면허 치과위생사', '미온수 무통 스케일링 전담', '치료 전 도포 마취 및 진료 보조']
  },
  {
    name: { ko: '정민주 임상 치위생사', en: 'Min-ju Jung, RDH' },
    title: { ko: '임상 치과위생사 (국가면허)', en: 'Infection Control Hygienist' },
    role: { ko: '대학병원급 감염관리 & 멸균 (전담 2)', en: 'Sterilization & Patient Care' },
    badge: { ko: '국가면허 보유', en: 'Certified RDH' },
    description: {
      ko: '1인 1기구 원칙을 철저히 준수하며 고온고압 멸균 소독과 3D 구강 스캐너 세팅 등 안전한 치료 환경을 책임집니다.',
      en: 'Strictly executes 1-patient-1-instrument autoclave sterilization and 3D digital scanner calibration.'
    },
    duties: ['보건복지부 면허 치과위생사', '대학병원급 1인 1기구 멸균 시스템 전담', '디지털 장비 및 체어 감염관리']
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 'case-1',
    category: 'Veneers',
    categoryLabel: '최소삭제 라미네이트',
    title: '앞니 벌어짐 & 왜소치 무삭제 라미네이트',
    desc: '치아 삭제 없이 0.1mm 초박막 세라믹으로 앞니 사이 틈새를 닫고 자연스러운 반투명 광택을 복원한 사례입니다.',
    period: '2회 내원 (5일 완성)',
    beforeImage: CLINIC_IMAGES.treatmentRoom,
    afterImage: CLINIC_IMAGES.patientSmile,
    metrics: ['치아 삭제량: 0.1mm 미만', '내원 횟수: 2회', '보증기간: 5년 정품보증']
  },
  {
    id: 'case-2',
    category: 'Invisalign',
    categoryLabel: '인비절라인 투명교정',
    title: '덧니 및 불규칙한 앞니 비발치 투명교정',
    desc: '발치 없이 3D ClinCheck 시뮬레이션으로 어금니를 후방 이동시켜 9개월 만에 고른 치열과 스마일 라인을 완성했습니다.',
    period: '치료 기간 9개월 (7주 간격 내원)',
    beforeImage: CLINIC_IMAGES.treatmentSuite,
    afterImage: CLINIC_IMAGES.patientSmile,
    metrics: ['발치 여부: 비발치 진행', '치료 기간: 9개월', '유지장치: 비베라 정품']
  },
  {
    id: 'case-3',
    category: 'Restorative',
    categoryLabel: '지르코니아 심미보철',
    title: '변색된 노후 PFM 크라운의 풀 지르코니아 교체',
    desc: '잇몸선에 어둡게 드러나던 금속 경계선을 제거하고 자연치아와 똑같은 투명도의 지르코니아로 교체하였습니다.',
    period: '2회 내원 (원데이 가능)',
    beforeImage: CLINIC_IMAGES.treatmentRoom,
    afterImage: CLINIC_IMAGES.hero,
    metrics: ['소재: 100% 풀 지르코니아', '잇몸 블랙라인 개선', '보증기간: 5년']
  }
];

export const CLINIC_PROCESS = [
  {
    step: '01',
    title: { ko: '3D 정밀 디지털 스캔 & 안모 분석', en: '3D Digital Scan & Smile Design' },
    desc: {
      ko: '구역질 나는 고무 본뜨기 없이 3Shape TRIOS 5 구강 스캐너로 1분 만에 치아와 잇몸을 정밀 스캔하고, 3차원 안모 비율을 정밀 분석합니다.',
      en: 'Comfortable 3D optical scanning replaces goopy impressions, capturing exact digital anatomy in minutes.'
    },
    badge: '1분 초정밀 스캔',
    highlight: '대학병원급 3Shape TRIOS 5 구강스캐너'
  },
  {
    step: '02',
    title: { ko: '1:1 맞춤 계획 수립 & 무통 마취 진료', en: 'Bespoke Plan & Gentle Anesthesia' },
    desc: {
      ko: '대표원장이 직접 3D 화면을 환자분과 함께 보며 꼭 필요한 치료만 설명합니다. 체온 감응형 컴퓨터 무통 마취기로 통증 없는 편안한 치료를 진행합니다.',
      en: 'The lead dentist walks you through transparent options with computer-controlled painless injection.'
    },
    badge: '통증 최소화 시스템',
    highlight: '컴퓨터 제어 자동 무통 마취기 & 25배 미세현미경'
  },
  {
    step: '03',
    title: { ko: '정품 품질보증서 발급 & 1:1 평생 안심 관리', en: 'Certificate of Authenticity & Aftercare' },
    desc: {
      ko: '시술 완료 즉시 정품 인증서와 품질 보증서를 발행합니다. 6개월 정기 검진 알림과 교합 상태 무상 체크로 10년 후에도 건강한 치아를 약속합니다.',
      en: 'Receive certified warranties and ongoing recall checks for lasting peace of mind.'
    },
    badge: '최장 10년 책임 보증',
    highlight: '정품 바코드 보증서 발급 & 6개월 정기 리콜'
  }
];

export const PRICING_SCHEDULE = {
  insurance: [
    { name: '스케일링 (치석 제거)', coverage: '국민건강보험 만 19세 이상 연 1회', copay: '약 ₩16,000 내외', note: '초·재진 및 야간/토요일 가산에 따라 변동' },
    { name: '자연치아 신경치료 (근관치료)', coverage: '국민건강보험 100% 급여 적용', copay: '회당 약 ₩15,000 ~ ₩30,000', note: '치아 부위(앞니/어금니) 및 내원 횟수에 따라 산정' },
    { name: '사랑니 발치 (단순/매복/복잡)', coverage: '국민건강보험 급여 적용', copay: '약 ₩15,000 ~ ₩45,000', note: '저선량 3D CT 정밀 진단비 포함' },
    { name: '만 65세 이상 어르신 임플란트', coverage: '평생 2개 국민건강보험 70% 지원', copay: '본인부담 30% (약 ₩380,000 ~ ₩420,000)', note: '정품 오스템 픽스처 & 맞춤 지르코니아 기준' },
    { name: '만 18세 이하 제1·2대구치 실란트', coverage: '충치 예방 홈메우기 건보 90% 지원', copay: '치아 1치당 약 ₩10,000 내외', note: '총 8개 영구치 적용 가능' },
    { name: '만 12세 이하 영구치 광중합 레진', coverage: '충치 치료 건강보험 70% 지원', copay: '치아 1치당 약 ₩25,000 ~ ₩30,000', note: '유치 제외, 영구치 충치에 한함' },
  ],
  nonInsurance: [
    { name: '최소삭제 세라믹 라미네이트', desc: '스위스 e.max 정품 블록, 0.1mm 에나멜 정돈', price: '₩650,000 ~ ₩800,000', warranty: '5년 무상 보증' },
    { name: '인비절라인® 투명교정 (부분/전체)', desc: '미국 정품 스마트트랙, 3D ClinCheck 포함', price: '부분 ₩350만~ / 전체 ₩550만~', warranty: '3년 무상 보증 (비베라 유지장치 포함)' },
    { name: '지르코니아 인레이 / 온레이', desc: '금속 없는 고강도 세라믹 충치 수복', price: '₩280,000 ~ ₩350,000', warranty: '3년 무상 보증' },
    { name: '지르코니아 올세라믹 크라운', desc: '자연치아 색조 맞춤, 생체친화적 무금속', price: '₩550,000 ~ ₩650,000', warranty: '5년 무상 보증' },
    { name: '원데이 네비게이션 임플란트', desc: '3D 컴퓨터 가이드 무절개 식립, 지르코니아 포함', price: '₩1,100,000 ~ ₩1,400,000', warranty: '픽스처 10년 / 보철 5년 보증' },
    { name: '원데이 프리미엄 줌 치아미백', desc: '필립스 줌 앤젤 정품 광선조사 3회 풀패키지', price: '₩350,000 (부가세 포함)', warranty: '3개월 내 리터치 40% 우대' },
    { name: '무삭제 다이렉트 레진 심미 본딩', desc: '깨진 앞니 및 치간 틈새 당일 복원', price: '₩120,000 ~ ₩180,000 / 치아당', warranty: '1년 무상 리터치' },
  ]
};

export const CLINIC_FAQS = [
  {
    q: '치과 공포증이 매우 심한데, 정말 아프지 않게 치료받을 수 있나요?',
    a: '네, 안심하셔도 됩니다. 덴트아트에서는 바늘 통증을 줄여주는 잇몸 표면 도포 가글 마취 후, 체온(36.5도)과 동일한 온도로 마취액을 컴퓨터 미세 압력으로 주입하는 무통 마취 시스템을 가동합니다. 마취 침이 들어가는 순간의 따끔함과 뻐근함을 현저히 줄여 많은 환자분들이 편안하게 치료받고 계십니다.'
  },
  {
    q: '라미네이트를 하면 치아를 많이 깎아서 시리지 않나요?',
    a: '기존의 과도한 치아 삭제(0.5~1.0mm)와 달리, 덴트아트의 최소삭제 라미네이트는 치아 표면의 에나멜층만 0.1~0.2mm 다듬거나 아예 깎지 않는 무삭제(Zero-prep) 기법을 원칙으로 합니다. 치아 신경과 멀리 떨어진 표면만 정리하므로 시림 증상이 거의 없으며 자연치아 수명을 안전하게 보존합니다.'
  },
  {
    q: '치료 도중에 의사가 바뀌거나 과잉 진료가 발생하지는 않나요?',
    a: '덴트아트 치과는 페이닥터나 상담 실장이 무리하게 고가의 치료를 강요하지 않습니다. 보건복지부 인증 전문의 김태훈 대표원장이 첫 검진부터 3D 스캔 결과 설명, 시술, 그리고 치료 후 정기검진까지 1:1로 직접 책임 진료합니다.'
  },
  {
    q: '국민건강보험이 적용되는 진료는 어떤 것들이 있나요?',
    a: '만 19세 이상 대한민국 국민이라면 매년 1회 스케일링이 약 1.6만원에 건강보험 혜택이 적용됩니다. 또한 자연치아를 살리는 신경치료, 사랑니 발치, 잇몸 치료는 100% 건강보험이 적용되며, 만 65세 이상 어르신은 평생 2개의 임플란트를 70% 국가 지원으로 시술받으실 수 있습니다.'
  },
  {
    q: '예약은 어떻게 진행되며 당일 진료도 가능한가요?',
    a: '홈페이지 온라인 간편 예약 또는 대표전화(02-882-2875)를 통해 원하시는 날짜와 시간을 지정하실 수 있습니다. 급성 통증이나 앞니 파절 등 응급 환자분의 경우 당일 내원 시에도 우선 응급 처치가 가능하오니 내원 전 전화 주시면 친절히 안내해 드립니다.'
  }
];
