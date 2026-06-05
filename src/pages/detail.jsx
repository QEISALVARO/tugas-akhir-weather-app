import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import WeatherDetail from '../components/weatherDetail'

// ambil API key dari file .env
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function Detail() {

  // ambil nama kota dari URL, contoh: /detail/Jakarta → city = "Jakarta"
  const { city } = useParams()

  const navigate = useNavigate()

  // state untuk menyimpan data detail cuaca
  const [data, setData] = useState(null)

  // state untuk status loading
  const [loading, setLoading] = useState(true)

  // state untuk pesan error
  const [error, setError] = useState('')

  // useEffect untuk fetch data saat halaman detail dibuka
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
        )
        if (!res.ok) throw new Error('Kota tidak ditemukan')
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetail()
  }, [city])

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-white bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-lg hover:bg-white/30 transition-all mb-6 inline-block"
      >
        ← Kembali
      </button>

      {/* tampilkan loading saat data belum datang */}
      {loading && <p className="text-sm text-white/80">Memuat detail...</p>}

      {/* tampilkan error kalau kota tidak ditemukan */}
      {error && <p className="text-sm text-red-300">{error}</p>}

      {/* tampilkan detail cuaca kalau data sudah ada */}
      {data && <WeatherDetail data={data} />}

    </main>
  )
}

export default Detail