import { useState } from 'react'

function SearchBar({ onSearch }) {

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    onSearch(input.trim())
    setInput('')
  }

  return (
    
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">

      {/* ===== INPUT ===== */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cari kota... contoh: Jakarta"
        className="flex-1 bg-white/20 backdrop-blur-md border border-white/40 rounded-lg px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
      />

      
      <button
        type="submit"
        className="bg-white/30 hover:bg-white/50 backdrop-blur-md border border-white/40 text-white px-5 py-2 rounded-lg text-sm transition-all"
      >
        Cari
      </button>

    </form>
  )
}

export default SearchBar