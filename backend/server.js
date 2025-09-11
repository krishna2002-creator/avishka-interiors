import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// 🔑 Ab sirf Atlas URI use karo (local fallback hata do)
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Atlas connected'))
.catch(err => console.error('❌ MongoDB error:', err))

app.get('/', (req, res) => res.send('Avishka Interiors API running ✅'))
app.use('/api/products', productRoutes)

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
