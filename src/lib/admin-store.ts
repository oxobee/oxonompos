"use client";

export type DemoStatus = "yeni" | "gorusuldu" | "demo_yapildi" | "satisa_dondu" | "iptal";
export type DemoPriority = "yuksek" | "orta" | "normal";

export interface DemoNote {
  id: string;
  text: string;
  date: string;
  author: string;
}

export interface DemoRequest {
  id: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  branchCount: string;
  city: string;
  message: string;
  status: DemoStatus;
  priority: DemoPriority;
  createdAt: string;
  notes: DemoNote[];
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface ClientBusiness {
  id: string;
  name: string;
  owner: string;
  city: string;
  type: string;
  branches: number;
  plan: "Başlangıç" | "Büyüme" | "Enterprise AI";
  status: "Aktif" | "Kurulum Aşamasında" | "Süresi Doldu";
  monthlyRevenueEst: string;
  registeredDate: string;
}

const STORAGE_DEMO_KEY = "oxonom_admin_demos_v1";
const STORAGE_MESSAGES_KEY = "oxonom_admin_messages_v1";

const INITIAL_DEMO_REQUESTS: DemoRequest[] = [
  {
    id: "demo-101",
    fullName: "Mehmet Demir",
    businessName: "Közde Döner & Izgara Sarayı",
    phone: "0532 456 78 90",
    email: "mehmet@kozdedoner.com",
    businessType: "Restoran",
    branchCount: "3",
    city: "İstanbul (Kadıköy)",
    message: "Şu an eski bir masaüstü POS kullanıyoruz. 3 şubemiz için bulut tabanlı POS, Mutfak KDS ve QR sipariş sistemine geçmek istiyoruz.",
    status: "yeni",
    priority: "yuksek",
    createdAt: "2026-09-07T07:45:00Z",
    notes: [
      {
        id: "n-1",
        text: "Online başvuru formu üzerinden oluşturuldu. Şube sayısı 3 olduğu için çoklu şube paketi önerilecek.",
        date: "07.09.2026 10:45",
        author: "Sistem",
      },
    ],
  },
  {
    id: "demo-102",
    fullName: "Selin Çelik",
    businessName: "Mola Specialty Coffee & Bakery",
    phone: "0544 321 65 43",
    email: "selin@molacoffee.co",
    businessType: "Kafe",
    branchCount: "2",
    city: "İzmir (Alsancak)",
    message: "Kahve dükkanımız için hızlı dokunmatik POS ve Yapay Zekalı Dijital Menü Panosu (TV ekranı) özelliklerini özellikle görmek istiyoruz.",
    status: "gorusuldu",
    priority: "orta",
    createdAt: "2026-09-06T15:20:00Z",
    notes: [
      {
        id: "n-2",
        text: "Selin Hanım ile telefonla ön görüşme yapıldı. Salı günü saat 14:00 için online Google Meet demo planlandı.",
        date: "06.09.2026 16:30",
        author: "Uğur Uğurlu",
      },
    ],
  },
  {
    id: "demo-103",
    fullName: "Burak Yılmaz",
    businessName: "Venedik Pizza & Trattoria",
    phone: "0555 789 12 34",
    email: "burak@venedikpizza.com",
    businessType: "Restoran",
    branchCount: "1",
    city: "Ankara (Çankaya)",
    message: "Masalara QR menü entegrasyonu ve mutfak ekranı (KDS) arasındaki gecikmesiz haberleşmeyi canlı test etmek istiyoruz.",
    status: "demo_yapildi",
    priority: "yuksek",
    createdAt: "2026-09-05T11:15:00Z",
    notes: [
      {
        id: "n-3",
        text: "Canlı demo sunumu gerçekleştirildi. KDS süre takip sesleri ve QR sipariş onay akışını çok beğendiler.",
        date: "05.09.2026 14:00",
        author: "Uğur Uğurlu",
      },
      {
        id: "n-4",
        text: "Teklif iletildi. Hafta içi sözleşme onayı bekleniyor.",
        date: "06.09.2026 09:30",
        author: "Satış Ekibi",
      },
    ],
  },
  {
    id: "demo-104",
    fullName: "Ayşe Karaca",
    businessName: "Chef's Prime Steakhouse",
    phone: "0505 654 32 10",
    email: "ayse@chefsprime.com",
    businessType: "Restoran",
    branchCount: "1",
    city: "Antalya (Muratpaşa)",
    message: "Reçete maliyet takibi, 7 bölümlü Z raporu ve müşteri sadakat CRM modülü için sözleşme imzaladık.",
    status: "satisa_dondu",
    priority: "yuksek",
    createdAt: "2026-09-03T09:00:00Z",
    notes: [
      {
        id: "n-5",
        text: "Yıllık Enterprise AI paketi satın alındı. Kurulum ve garson eğitimleri tamamlandı, sistem canlıda.",
        date: "04.09.2026 17:00",
        author: "Uğur Uğurlu",
      },
    ],
  },
  {
    id: "demo-105",
    fullName: "Emre Aksoy",
    businessName: "Burger Hub Express",
    phone: "0533 112 23 34",
    email: "emre@burgerhub.net",
    businessType: "Fast Food",
    branchCount: "4",
    city: "Bursa (Nilüfer)",
    message: "Hızlı sipariş POS ve Self-Order Kiosk çözümleri hakkında detaylı demo talep ediyoruz.",
    status: "yeni",
    priority: "yuksek",
    createdAt: "2026-09-07T06:10:00Z",
    notes: [
      {
        id: "n-6",
        text: "Yeni başvuru. 4 şubeli zincir franchise adayı. Öncelikli aranacak.",
        date: "07.09.2026 09:15",
        author: "Sistem",
      },
    ],
  },
  {
    id: "demo-106",
    fullName: "Kemal Öztürk",
    businessName: "Ege Balıkçısı & Meze",
    phone: "0542 998 87 76",
    email: "kemal@egebalikcisi.com",
    businessType: "Restoran",
    branchCount: "1",
    city: "Muğla (Bodrum)",
    message: "Şu an sezon kapandı, gelecek sezon için bütçe planlaması yapıyoruz.",
    status: "iptal",
    priority: "normal",
    createdAt: "2026-09-02T13:40:00Z",
    notes: [
      {
        id: "n-7",
        text: "Görüşüldü. Sezonluk çalıştıkları için Mart 2027'de tekrar aranmak üzere not düşüldü.",
        date: "03.09.2026 11:00",
        author: "Uğur Uğurlu",
      },
    ],
  },
  {
    id: "demo-107",
    fullName: "Zeynep Doğan",
    businessName: "Sunset Beach Club & Lounge",
    phone: "0530 876 54 32",
    email: "zeynep@sunsetlounge.com",
    businessType: "Otel & Resort",
    branchCount: "2",
    city: "Antalya (Kaş)",
    message: "Şezlong ve masa adisyon takibi, QR mobil menü ve el terminali entegrasyonu talep ediyoruz.",
    status: "gorusuldu",
    priority: "orta",
    createdAt: "2026-09-04T16:05:00Z",
    notes: [
      {
        id: "n-8",
        text: "Teknik gereksinimler dinlendi. Sahil alanında Wi-Fi/4G el terminalleriyle demo yapılacak.",
        date: "05.09.2026 10:00",
        author: "Uğur Uğurlu",
      },
    ],
  },
  {
    id: "demo-108",
    fullName: "Tarık Aydın",
    businessName: "Aydınlar Fırın & Pastane",
    phone: "0543 210 98 76",
    email: "tarik@aydinlarfirin.com",
    businessType: "Pastane / Fırın",
    branchCount: "3",
    city: "Eskişehir (Tepebaşı)",
    message: "Gramajlı terazi entegrasyonu ve paketli ürün barkodlu satışı için demo talep ediyorum.",
    status: "demo_yapildi",
    priority: "orta",
    createdAt: "2026-09-03T14:30:00Z",
    notes: [
      {
        id: "n-9",
        text: "Terazi entegrasyonu ve barkod okuma testi online gösterildi. Fiyat teklifi hazırlandı.",
        date: "04.09.2026 15:30",
        author: "Satış Ekibi",
      },
    ],
  },
];

const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: "msg-1",
    fullName: "Ali Vural",
    email: "ali.vural@gmail.com",
    subject: "Yazarkasa POS Entegrasyonu",
    message: "Hugin ve Beko yazarkasalar ile tam entegrasyonunuz var mı? Donanım maliyetleri hakkında bilgi alabilir miyim?",
    date: "07.09.2026 09:30",
    isRead: false,
  },
  {
    id: "msg-2",
    fullName: "Gülşen Erdem",
    email: "gulsen@erdemcafe.com",
    subject: "Bayilik ve İş Ortaklığı",
    message: "İzmir bölgesinde restoranlara POS kurulum ve teknik destek hizmeti sunuyoruz. Oxonom çözüm ortağı olmak istiyoruz.",
    date: "06.09.2026 14:10",
    isRead: true,
  },
  {
    id: "msg-3",
    fullName: "Murat Şen",
    email: "murat@senlezzetleri.com",
    subject: "Mevcut Verileri Aktarma",
    message: "Eski POS sistemimizdeki 800 adet reçete ve ürün listesini Excel veya yapay zeka ile otomatik içeri aktarabilir miyiz?",
    date: "05.09.2026 18:00",
    isRead: true,
  },
];

export const CLIENT_BUSINESSES: ClientBusiness[] = [
  {
    id: "biz-1",
    name: "Chef's Prime Steakhouse",
    owner: "Ayşe Karaca",
    city: "Antalya",
    type: "Restoran",
    branches: 1,
    plan: "Enterprise AI",
    status: "Aktif",
    monthlyRevenueEst: "₺420.000",
    registeredDate: "04.09.2026",
  },
  {
    id: "biz-2",
    name: "Kahve Atölyesi Zinciri",
    owner: "Onur Taner",
    city: "İstanbul",
    type: "Kafe",
    branches: 5,
    plan: "Enterprise AI",
    status: "Aktif",
    monthlyRevenueEst: "₺1.150.000",
    registeredDate: "15.08.2026",
  },
  {
    id: "biz-3",
    name: "Tarihi Boğaz İskelesi Balık",
    owner: "Hasan Kaptan",
    city: "İstanbul",
    type: "Restoran",
    branches: 2,
    plan: "Büyüme",
    status: "Aktif",
    monthlyRevenueEst: "₺780.000",
    registeredDate: "22.08.2026",
  },
  {
    id: "biz-4",
    name: "Crispy Chicken & Waffle",
    owner: "Deniz Yıldız",
    city: "İzmir",
    type: "Fast Food",
    branches: 3,
    plan: "Büyüme",
    status: "Kurulum Aşamasında",
    monthlyRevenueEst: "₺350.000",
    registeredDate: "01.09.2026",
  },
];

// Helper to get demo requests from localStorage
export function getDemoRequests(): DemoRequest[] {
  if (typeof window === "undefined") return INITIAL_DEMO_REQUESTS;
  try {
    const raw = localStorage.getItem(STORAGE_DEMO_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_DEMO_KEY, JSON.stringify(INITIAL_DEMO_REQUESTS));
      return INITIAL_DEMO_REQUESTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_DEMO_REQUESTS;
  } catch {
    return INITIAL_DEMO_REQUESTS;
  }
}

export function saveDemoRequests(items: DemoRequest[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_DEMO_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("oxonom_demo_updated"));
  } catch (err) {
    console.error("Save error:", err);
  }
}

export function addDemoRequest(data: Omit<DemoRequest, "id" | "createdAt" | "notes"> & { notes?: DemoNote[] }): DemoRequest {
  const all = getDemoRequests();
  const newReq: DemoRequest = {
    ...data,
    id: `demo-${Date.now()}`,
    createdAt: new Date().toISOString(),
    notes: data.notes || [
      {
        id: `n-${Date.now()}`,
        text: "Web sitesi formu üzerinden yeni demo talebi alındı.",
        date: new Date().toLocaleDateString("tr-TR") + " " + new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        author: "Sistem",
      },
    ],
  };
  const updated = [newReq, ...all];
  saveDemoRequests(updated);
  return newReq;
}

export function updateDemoStatus(id: string, status: DemoStatus): void {
  const all = getDemoRequests();
  const updated = all.map((item) => {
    if (item.id === id) {
      const statusLabels: Record<DemoStatus, string> = {
        yeni: "Yeni",
        gorusuldu: "Görüşüldü",
        demo_yapildi: "Demo Yapıldı",
        satisa_dondu: "Satışa Döndü",
        iptal: "İptal Edildi",
      };
      const newNote: DemoNote = {
        id: `n-${Date.now()}`,
        text: `Talep durumu "${statusLabels[status]}" olarak güncellendi.`,
        date: new Date().toLocaleDateString("tr-TR") + " " + new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        author: "Uğur Uğurlu",
      };
      return {
        ...item,
        status,
        notes: [newNote, ...item.notes],
      };
    }
    return item;
  });
  saveDemoRequests(updated);
}

export function addDemoNote(id: string, noteText: string, author = "Uğur Uğurlu"): void {
  const all = getDemoRequests();
  const updated = all.map((item) => {
    if (item.id === id) {
      const newNote: DemoNote = {
        id: `n-${Date.now()}`,
        text: noteText,
        date: new Date().toLocaleDateString("tr-TR") + " " + new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
        author,
      };
      return {
        ...item,
        notes: [newNote, ...item.notes],
      };
    }
    return item;
  });
  saveDemoRequests(updated);
}

export function deleteDemoRequest(id: string): void {
  const all = getDemoRequests();
  const updated = all.filter((item) => item.id !== id);
  saveDemoRequests(updated);
}

// Contact messages helpers
export function getContactMessages(): ContactMessage[] {
  if (typeof window === "undefined") return INITIAL_MESSAGES;
  try {
    const raw = localStorage.getItem(STORAGE_MESSAGES_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(INITIAL_MESSAGES));
      return INITIAL_MESSAGES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_MESSAGES;
  } catch {
    return INITIAL_MESSAGES;
  }
}

export function saveContactMessages(items: ContactMessage[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("oxonom_messages_updated"));
  } catch (err) {
    console.error("Messages save error:", err);
  }
}

export function addContactMessage(data: Omit<ContactMessage, "id" | "date" | "isRead">): ContactMessage {
  const all = getContactMessages();
  const newMsg: ContactMessage = {
    ...data,
    id: `msg-${Date.now()}`,
    date: new Date().toLocaleDateString("tr-TR") + " " + new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }),
    isRead: false,
  };
  saveContactMessages([newMsg, ...all]);
  return newMsg;
}

export function markMessageAsRead(id: string): void {
  const all = getContactMessages();
  const updated = all.map((m) => (m.id === id ? { ...m, isRead: true } : m));
  saveContactMessages(updated);
}

export function deleteContactMessage(id: string): void {
  const all = getContactMessages();
  saveContactMessages(all.filter((m) => m.id !== id));
}
