export interface Appointment {
  id: string;
  bookingCode: string;
  patientName: string;
  phone: string;
  email: string;
  countryCode: string;
  language: 'ko' | 'en';
  treatmentId: string;
  treatmentName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  symptoms: string;
  estimatedPriceKrw?: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
}

const STORAGE_KEY = 'dentart_appointments_v3';

const SEED_APPOINTMENTS: Appointment[] = [];

export function getStoredAppointments(): Appointment[] {
  if (typeof window === 'undefined') return SEED_APPOINTMENTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_APPOINTMENTS));
      return SEED_APPOINTMENTS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse appointments', e);
    return SEED_APPOINTMENTS;
  }
}

export function saveAppointment(
  data: Omit<Appointment, 'id' | 'bookingCode' | 'createdAt' | 'status'>
): Appointment {
  const current = getStoredAppointments();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const bookingCode = `DENT-${new Date().getFullYear()}-${randomNum}`;
  
  const newAppt: Appointment = {
    ...data,
    id: `appt-${Date.now()}`,
    bookingCode,
    createdAt: new Date().toISOString(),
    status: 'confirmed',
  };

  const updated = [newAppt, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newAppt;
}

export function cancelAppointment(bookingCode: string): boolean {
  const current = getStoredAppointments();
  const target = current.find((a) => a.bookingCode === bookingCode);
  if (!target) return false;

  const updated = current.map((a) =>
    a.bookingCode === bookingCode ? { ...a, status: 'cancelled' as const } : a
  );
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return true;
}

export function findAppointmentByCode(bookingCode: string): Appointment | undefined {
  const current = getStoredAppointments();
  return current.find(
    (a) => a.bookingCode.trim().toUpperCase() === bookingCode.trim().toUpperCase()
  );
}

export function generateGoogleCalendarLink(appt: Appointment): string {
  const title = encodeURIComponent(`[덴트아트 치과] ${appt.treatmentName} 진료`);
  const details = encodeURIComponent(
    `덴트아트 치과의원 (02-882-2875)\n환자명: ${appt.patientName}\n담당: ${appt.doctorName}\n예약번호: ${appt.bookingCode}\n메모: ${appt.symptoms || '없음'}`
  );
  const location = encodeURIComponent('서울 강남구 테헤란로 152 강남타워 4층 덴트아트 치과의원');
  
  const dateStr = appt.date.replace(/-/g, '');
  const timeClean = (appt.time || '10:00').replace(':', '');
  const start = `${dateStr}T${timeClean}00`;
  const endHour = String(parseInt(timeClean.slice(0, 2), 10) + 1).padStart(2, '0');
  const end = `${dateStr}T${endHour}${timeClean.slice(2)}00`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}
