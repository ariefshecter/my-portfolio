// src/data/experience.js

export const experience = [
  {
    id: "e1",
    type: "project",
    role: "Front-end Developer — Portfolio Website",
    organization: "Personal Project",
    start: "2024-10",
    end: "Present",
    location: "Remote",
    description:
      "Membangun website portofolio pribadi dengan React dan Tailwind CSS terinspirasi dari UI Arknights: Endfield. Fokus pada desain futuristik, dark/light mode, dan struktur komponen yang rapi.",
    highlights: [
      "Mengimplementasikan layout custom dengan navigasi samping, hero section, dan carousel project",
      "Menerapkan tema warna konsisten (kuning–hitam–putih) dengan dukungan dark mode berbasis CSS variables",
      "Menyusun data portofolio (projects, skills, experience) sebagai konfigurasi yang mudah diperbarui"
    ]
  },

  {
    id: "e2",
    type: "research",
    role: "Research & Implementation — CNN untuk Klasifikasi Gambar Hewan",
    organization: "Personal / Academic Project",
    start: "2023-03",
    end: "2023-10",
    location: "Remote",
    description:
      "Mendesain dan mengimplementasikan model Convolutional Neural Network (CNN) untuk klasifikasi gambar hewan. Mencakup preprocessing data, training, evaluasi, dan analisis hasil.",
    highlights: [
      "Membangun pipeline training menggunakan TensorFlow/Keras dengan teknik transfer learning",
      "Menerapkan augmentasi data dan mengevaluasi metrik seperti akurasi, precision, dan recall",
      "Mendokumentasikan arsitektur model, hasil eksperimen, dan insight dalam repository GitHub"
    ]
  },

  {
    id: "e3",
    type: "research",
    role: "Comparative Analysis — InceptionV3, ResNet152V2, Xception",
    organization: "Personal / Academic Project",
    start: "2023-10",
    end: "2024-02",
    location: "Remote",
    description:
      "Melakukan analisis komparatif beberapa arsitektur CNN (InceptionV3, ResNet152V2, dan Xception) untuk tugas klasifikasi gambar hewan. Fokus pada perbandingan performa, kompleksitas, dan waktu training.",
    highlights: [
      "Menyusun eksperimen terstruktur untuk membandingkan beberapa model deep learning pada dataset yang sama",
      "Menganalisis trade-off antara akurasi, ukuran model, dan waktu inferensi",
      "Menyusun laporan dan ringkasan hasil eksperimen dalam bentuk dokumentasi dan README di GitHub"
    ]
  },

  {
    id: "e4",
    type: "project",
    role: "Developer — Game Labirin (Browser Game)",
    organization: "Personal Project",
    start: "2022-08",
    end: "2022-10",
    location: "Remote",
    description:
      "Membuat game labirin berbasis browser menggunakan HTML, CSS, dan JavaScript. Pemain menavigasi maze untuk mencapai titik finish dengan mekanik sederhana namun fungsional.",
    highlights: [
      "Mengimplementasikan mekanik pergerakan pemain dan deteksi tabrakan menggunakan JavaScript vanilla",
      "Mendesain layout labirin dan UI sederhana yang responsif di browser",
      "Mempublikasikan source code di GitHub lengkap dengan instruksi cara bermain"
    ]
  },

  {
    id: "e5",
    type: "project",
    role: "Developer — Koleksi Mini Apps Python",
    organization: "Personal Project",
    start: "2022-11",
    end: "2023-03",
    location: "Remote",
    description:
      "Mengembangkan berbagai mini project berbasis Python sebagai latihan mandiri, mulai dari otomasi sederhana, manipulasi data, hingga eksperimen fitur aplikasi.",
    highlights: [
      "Membangun beberapa script Python untuk tugas otomatisasi dan pengolahan data dasar",
      "Mencoba berbagai library Python dan pola penulisan kode yang lebih terstruktur",
      "Mengorganisir kumpulan mini project ke dalam satu repository GitHub agar mudah dipelajari kembali"
    ]
  }
];

export default experience;
