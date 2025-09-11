import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/products/${id}`)
        if (!res.ok) throw new Error('API not available, using local data')
        const data = await res.json()
        setProduct(data)
      } catch (e) {
        const localList = await fetch('/products.json').then(r => r.json())
        const found = localList.find(p => (p._id || String(p.id)) === String(id))
        setProduct(found || null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="container py-10">Loading...</div>
  if (!product) return <div className="container py-10">Product not found.</div>

  return (
    <div className="container py-10 grid md:grid-cols-2 gap-8">
      <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover rounded-2xl border" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">₹{product.price}</p>
        <div className="space-x-3">
          <a href="tel:9029804944" className="px-5 py-2 rounded-xl border">Call Us</a>
          <a href="mailto:avishkainteriors@gmail.com" className="px-5 py-2 rounded-xl bg-gray-900 text-white">Email</a>
          <Link to="/products" className="px-5 py-2 rounded-xl underline">Back to Products</Link>
        </div>
      </div>
    </div>
  )
}
