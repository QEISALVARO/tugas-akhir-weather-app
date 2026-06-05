import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white/20 backdrop-blur-md border-b border-white/30 px-6 py-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">

        {/* ===== LOGO ===== */}
        <Link to="/" className="text-xl font-semibold text-white tracking-tight">
          weather app
        </Link>

        {/* ===== KETERANGAN ==== */}
        <span className="text-sm text-white/70">made by qeis alvaro</span>

      </div>
    </nav>
  )
}

export default Navbar