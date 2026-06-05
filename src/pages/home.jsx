import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'

// ambil API key dari file .env
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function Home() {

  // state untuk menyimpan data cuaca dari API
  const [weatherData, setWeatherData] = useState(null)

  // state untuk status loading saat fetch data
  const [loading, setLoading] = useState(false)

  // state untuk menyimpan pesan error
  const [error, setError] = useState('')

  // state untuk menyimpan waktu sekarang
  const [waktu, setWaktu] = useState(new Date())

  // useEffect untuk update jam setiap 1 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date()) // update waktu tiap detik
    }, 1000)
    return () => clearInterval(timer) // bersihkan timer saat component dilepas
  }, [])

  // useEffect untuk fetch cuaca Jakarta otomatis saat halaman pertama dibuka
  useEffect(() => {
    fetchWeather('Jakarta')
  }, []) // [] artinya hanya jalan sekali saat pertama load

  // fungsi untuk fetch data cuaca dari OpenWeatherMap API
  const fetchWeather = async (city) => {
    setLoading(true) // tampilkan loading
    setError('') // reset pesan error
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
      )
      if (!res.ok) throw new Error('Kota tidak ditemukan')
      const data = await res.json()
      setWeatherData(data) // simpan data cuaca ke state
    } catch (err) {
      setError(err.message) // simpan pesan error ke state
      setWeatherData(null)
    } finally {
      setLoading(false) // sembunyikan loading
    }
  }

  // format jam menjadi HH:MM:SS
  const jam = waktu.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  // format tanggal menjadi "5 Juni 2026"
  const tanggal = waktu.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })

  // format hari menjadi "Kamis"
  const hari = waktu.toLocaleDateString('id-ID', { weekday: 'long' })
  

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* bagian jam realtime - update tiap detik */}
      <div className="mb-6 text-center">
        <p className="text-white/80 text-sm">{hari}, {tanggal}</p>
        <p className="text-white text-5xl font-bold tracking-widest drop-shadow-lg">{jam}</p>
      </div>

      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">Cek Cuaca</h1>
        <p className="text-sm text-white/80 mb-4 drop-shadow">Masukkan nama kota untuk melihat kondisi cuaca saat ini.</p>

        
        <SearchBar onSearch={fetchWeather} />
      </div>

      
      {loading && <p className="text-sm text-white/80">Memuat data...</p>}

      
      {error && <p className="text-sm text-red-300">{error}</p>}

      
      {weatherData && <WeatherCard data={weatherData} />}

    </main>
  )
}

export default Home