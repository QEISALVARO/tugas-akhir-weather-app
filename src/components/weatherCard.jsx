import { useNavigate } from 'react-router-dom'

function WeatherCard({ data }) {

  
  const navigate = useNavigate()

  
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (

  
    <div
      onClick={() => navigate(`/detail/${data.name}`)}
      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-all"
    >

      
      <div>
        <h2 className="text-lg font-semibold text-white">{data.name}, {data.sys.country}</h2>
        <p className="text-sm text-white/70 capitalize">{data.weather[0].description}</p>
        <p className="text-3xl font-bold text-white mt-1">{Math.round(data.main.temp)}°C</p>
      </div>

    
      <img src={iconUrl} alt="weather icon" className="w-16 h-16" />

    </div>
  )
}

export default WeatherCard