import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error('API not available, using local data')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        const local = await fetch('/products.json').then(r => r.json())
        setProducts(local)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="container py-10">Loading products...</div>

  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p._id || p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
