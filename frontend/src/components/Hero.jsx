import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transforming Spaces with Precision</h1>
        <p className="text-lg mb-8">Modular furniture, home interiors and commercial projects—delivered with quality and speed.</p>
        <Link to="/products" className="inline-block px-6 py-3 rounded-2xl bg-white text-gray-900 font-semibold shadow">
          Explore Products
        </Link>
      </div>
    </div>
  )
}
