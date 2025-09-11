import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "px-3 py-2 rounded-xl hover:text-blue-600 " + (isActive ? "text-blue-700 font-semibold" : "text-gray-700")

  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">Avishka Interiors</Link>
        <div className="space-x-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/clients" className={linkClass}>Clients</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
