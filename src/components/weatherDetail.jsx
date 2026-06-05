function WeatherDetail({ data }) {

  
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (
  
    <div className="bg-white border border-gray-200 rounded-xl p-6">

     
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{data.name}, {data.sys.country}</h1>
          <p className="text-gray-500 capitalize">{data.weather[0].description}</p>
        </div>
        <img src={iconUrl} alt="icon" className="w-20 h-20" />
      </div>

     
      <p className="text-5xl font-bold text-gray-900 mb-6">{Math.round(data.main.temp)}°C</p>

      
      <div className="grid grid-cols-2 gap-4 text-sm">

        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-gray-400">Terasa seperti</p>
          <p className="font-semibold text-gray-700">{Math.round(data.main.feels_like)}°C</p>
        </div>

        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-gray-400">Kelembaban</p>
          <p className="font-semibold text-gray-700">{data.main.humidity}%</p>
        </div>

    
        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-gray-400">Kecepatan Angin</p>
          <p className="font-semibold text-gray-700">{data.wind.speed} m/s</p>
        </div>

        <div className="bg-slate-50 rounded-lg p-3">
          <p className="text-gray-400">Tekanan Udara</p>
          <p className="font-semibold text-gray-700">{data.main.pressure} hPa</p>
        </div>

      </div>
    </div>
  )
}

export default WeatherDetail