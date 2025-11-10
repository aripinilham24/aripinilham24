import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Search, Package, Award, Users,
  CheckCircle, ArrowRight, Smartphone, Map,
  Clock, TrendingUp, Heart, Star, Gift,
  UserPlus, LogIn, MousePointer, Navigation,
  Truck, Coins, Leaf, BarChart, ChevronRight
} from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-600">Eco-Peta</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              Tentang
            </Link>
            <Link href="/how-it-works" className="text-green-600 font-semibold">
              Cara Kerja
            </Link>
          </nav>

          <Link
            href="/register"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
          >
            Mulai Sekarang
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 font-medium">
            <Map className="w-4 h-4" />
            <span>Panduan Lengkap Penggunaan Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cara Kerja <span className="text-green-600">Eco-Peta</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Ikuti langkah-langkah mudah untuk mulai berkontribusi dalam pengelolaan
            sampah daur ulang dan dapatkan reward dari setiap kontribusi Anda!
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
            <button
              onClick={() => setActiveTab('user')}
              className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'user'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5 inline-block mr-2" />
              Untuk Pengguna
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'partner'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Truck className="w-5 h-5 inline-block mr-2" />
              Untuk Mitra
            </button>
          </div>
        </div>
      </section>

      {/* Content untuk Pengguna */}
      {activeTab === 'user' && (
        <>
          {/* Main Steps */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Langkah-Langkah untuk Pengguna
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <UserPlus className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Daftar & Buat Akun</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Klik tombol "Daftar" dan isi formulir registrasi dengan data diri Anda.
                      Pilih tipe akun sebagai "Pengguna/Rumah Tangga". Verifikasi email Anda
                      untuk mengaktifkan akun.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        📧 Email
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        📱 Nomor HP
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        📍 Alamat
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Search className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Jelajahi Peta</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Gunakan peta interaktif untuk menemukan bank sampah, pengepul, atau tempat
                      daur ulang terdekat. Filter berdasarkan jenis layanan, jarak, atau rating.
                      Lihat detail lengkap setiap lokasi termasuk jam operasional dan jenis sampah yang diterima.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                      <p className="text-sm text-blue-800 font-medium">
                        💡 Tips: Aktifkan lokasi GPS untuk hasil pencarian yang lebih akurat!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Package className="w-6 h-6 text-purple-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Pilih Metode Penyetoran</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Anda dapat memilih untuk langsung datang ke lokasi (Drop-off) atau
                      request penjemputan sampah (Pick-up). Untuk pick-up, pilih jadwal
                      yang tersedia dan tentukan jenis serta estimasi berat sampah.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Navigation className="w-5 h-5 text-purple-600" />
                          <h4 className="font-bold text-gray-900">Drop-off</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Bawa sendiri sampah ke lokasi pilihan Anda
                        </p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Truck className="w-5 h-5 text-purple-600" />
                          <h4 className="font-bold text-gray-900">Pick-up</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Jadwalkan penjemputan di rumah Anda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-6 h-6 text-orange-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Dapatkan Poin & Reward</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Setiap kali Anda menyetorkan sampah daur ulang, Anda akan mendapatkan
                      poin berdasarkan jenis dan berat sampah. Kumpulkan poin dan tukarkan
                      dengan berbagai reward menarik seperti voucher, produk ramah lingkungan,
                      atau donasi untuk program lingkungan.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold">
                        ⭐ Poin Otomatis
                      </span>
                      <span className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold">
                        🎁 Reward Menarik
                      </span>
                      <span className="px-3 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold">
                        🏆 Badge Achievement
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Pantau Kontribusi Anda</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Dashboard pribadi Anda menampilkan statistik lengkap: total sampah yang
                      telah didaur ulang, poin yang terkumpul, dampak lingkungan yang telah
                      dibuat, dan riwayat transaksi. Lihat juga peringkat Anda di leaderboard
                      komunitas!
                    </p>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Tracking Real-time</h4>
                          <p className="text-sm text-gray-600">
                            Pantau dampak positif Anda terhadap lingkungan dengan data visual yang mudah dipahami
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits untuk User */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 my-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                  Keuntungan untuk Anda
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <Coins className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Dapat Penghasilan</h3>
                    <p className="text-green-50">
                      Tukar poin dengan uang tunai atau voucher belanja dari mitra kami
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Bantu Lingkungan</h3>
                    <p className="text-green-50">
                      Kontribusi nyata mengurangi sampah TPA dan emisi karbon
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Bergabung Komunitas</h3>
                    <p className="text-green-50">
                      Terhubung dengan ribuan pengguna peduli lingkungan lainnya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Content untuk Mitra */}
      {activeTab === 'partner' && (
        <>
          {/* Main Steps untuk Mitra */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Langkah-Langkah untuk Mitra
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <UserPlus className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Daftar sebagai Mitra</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Isi formulir pendaftaran mitra dengan data usaha Anda. Pilih kategori:
                      Bank Sampah, Pengepul, atau Tempat Daur Ulang. Lengkapi dokumen yang
                      diperlukan seperti izin usaha dan foto lokasi.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                      <p className="text-sm text-blue-800">
                        <strong>Dokumen yang dibutuhkan:</strong> KTP, NPWP (opsional),
                        Izin Usaha, Foto Lokasi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Verifikasi Akun</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Tim Eco-Peta akan memverifikasi data dan lokasi usaha Anda dalam 1-3 hari
                      kerja. Anda akan menerima notifikasi email setelah akun disetujui. Setelah
                      verifikasi, lokasi Anda akan muncul di peta.
                    </p>
                    <div className="flex items-center gap-2 text-purple-700 font-semibold">
                      <Clock className="w-5 h-5" />
                      <span>Proses verifikasi: 1-3 hari kerja</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Map className="w-6 h-6 text-orange-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Setup Profil Lokasi</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Lengkapi profil lokasi Anda: set jam operasional, jenis sampah yang
                      diterima, harga per kilogram, foto lokasi, dan fasilitas yang tersedia.
                      Semakin lengkap informasi, semakin banyak pengguna yang tertarik!
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span>Jam operasional</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span>Jenis sampah</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span>Daftar harga</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        <span>Foto & galeri</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Package className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Kelola Transaksi</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Terima request pick-up dari pengguna, kelola jadwal penjemputan, catat
                      transaksi penerimaan sampah, dan berikan rating untuk pengguna. Dashboard
                      mitra memberikan semua tools yang Anda butuhkan.
                    </p>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Notifikasi Real-time</h4>
                          <p className="text-sm text-gray-600">
                            Terima notifikasi instant untuk setiap request dan transaksi baru
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Monitor Performa</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Dashboard analytics menampilkan total sampah yang diterima, pendapatan,
                      rating dari pengguna, dan statistik bisnis lainnya. Gunakan data ini
                      untuk mengoptimalkan operasional usaha Anda.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                        📊 Analytics Dashboard
                      </span>
                      <span className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                        💰 Laporan Keuangan
                      </span>
                      <span className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-semibold">
                        ⭐ Rating & Review
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits untuk Mitra */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 my-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                  Keuntungan untuk Mitra
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Jangkauan Lebih Luas</h3>
                    <p className="text-blue-50">
                      Dijangkau ribuan pengguna aktif yang mencari layanan daur ulang
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Tingkatkan Omzet</h3>
                    <p className="text-blue-50">
                      Platform digital yang mempermudah transaksi dan meningkatkan volume usaha
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Manajemen Digital</h3>
                    <p className="text-blue-50">
                      Tools lengkap untuk mengelola operasional dengan lebih efisien
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Video Tutorial Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lihat Tutorial Video
            </h2>
            <p className="text-gray-600 mb-8">
              Pelajari cara menggunakan Eco-Peta dengan lebih mudah melalui video panduan kami
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-green-600 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-700 font-semibold">Video Tutorial Segera Hadir</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Panduan lengkap penggunaan platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pertanyaan Yang Sering Diajukan
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Apakah gratis menggunakan Eco-Peta?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Ya, pendaftaran dan penggunaan platform Eco-Peta sepenuhnya gratis untuk
                    pengguna rumah tangga. Anda bahkan bisa mendapatkan poin dan reward dari
                    setiap sampah yang Anda setorkan!
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jenis sampah apa saja yang bisa didaur ulang?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Eco-Peta menerima berbagai jenis sampah daur ulang, termasuk:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Plastik (botol, kemasan, kantong)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kertas dan kardus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Logam (kaleng, besi, aluminium)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kaca dan botol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Elektronik (sesuai kategori mitra)</span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Bagaimana cara menukar poin dengan reward?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Masuk ke Dashboard Anda, klik menu "Reward", dan pilih reward yang Anda
                    inginkan. Pastikan poin Anda mencukupi. Setelah penukaran, Anda akan
                    menerima kode voucher atau instruksi pengambilan reward via email atau
                    notifikasi aplikasi.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Apakah ada biaya untuk layanan pick-up?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-colors" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Biaya pick-up tergantung kebijakan masing-masing mitra. Beberapa mitra
                    menawarkan layanan pick-up gratis dengan minimum berat tertentu, sementara
                    yang lain mungkin mengenakan biaya kecil. Detail biaya akan ditampilkan
                    saat Anda memilih mitra untuk request pick-up.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Bagaimana cara menjadi mitra Eco-Peta?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Klik tombol "Daftar" dan pilih "Daftar sebagai Mitra". Isi formulir dengan
                    data usaha Anda dan upload dokumen yang diperlukan. Tim kami akan memverifikasi
                    dalam 1-3 hari kerja. Setelah disetujui, Anda dapat langsung mulai menerima
                    pelanggan!
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Apakah data saya aman?
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Ya, kami menggunakan enkripsi tingkat tinggi untuk melindungi semua data
                    pribadi Anda. Data Anda hanya digunakan untuk keperluan platform dan tidak
                    akan dibagikan kepada pihak ketiga tanpa persetujuan Anda.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                <span className="font-medium">Bergabung dengan 10.000+ pengguna</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Siap Memulai Perjalanan Hijau Anda?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Daftar sekarang dan mulai berkontribusi untuk lingkungan yang lebih baik.
                Dapatkan reward dari setiap sampah yang Anda daur ulang!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl hover:bg-green-50 font-bold text-lg transition-colors shadow-lg"
                >
                  Daftar Sebagai Pengguna
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/register?type=partner"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-800 font-bold text-lg transition-colors border-2 border-white/30"
                >
                  Daftar Sebagai Mitra
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Gratis Selamanya</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Tanpa Biaya Tersembunyi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Daftar 2 Menit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Dampak Bersama yang Telah Kami Ciptakan
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
                <p className="text-gray-600">Pengguna Aktif</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
                <p className="text-gray-600">Mitra Terdaftar</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50</div>
                <p className="text-gray-600">Ton Sampah Didaur Ulang</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">25</div>
                <p className="text-gray-600">Ton CO₂ Terhindarkan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Eco-Peta</span>
              </div>
              <p className="text-gray-400 text-sm">
                Platform digital untuk pengelolaan sampah daur ulang berbasis komunitas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-green-400">Beranda</Link></li>
                <li><Link href="/about" className="hover:text-green-400">Tentang</Link></li>
                <li><Link href="/how-it-works" className="hover:text-green-400">Cara Kerja</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/register" className="hover:text-green-400">Daftar</Link></li>
                <li><Link href="/login" className="hover:text-green-400">Masuk</Link></li>
                <li><Link href="/dashboard" className="hover:text-green-400">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Email: info@eco-peta.id</li>
                <li>Wilayah: Bekasi, Jawa Barat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Eco-Peta. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
