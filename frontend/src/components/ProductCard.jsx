import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{(product.description || '').slice(0, 70)}{(product.description || '').length > 70 ? '...' : ''}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">₹{product.price}</span>
          <Link to={`/products/${product._id || product.id}`} className="text-blue-600 hover:underline">View</Link>
        </div>
      </div>
    </div>
  )
}
