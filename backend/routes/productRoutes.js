import { Router } from 'express'
import Product from '../models/Product.js'

const router = Router()

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })
    res.json(products)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id)
    if (!p) return res.status(404).json({ message: 'Not found' })
    res.json(p)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

// Create product
router.post('/', async (req, res) => {
  try {
    const p = await Product.create(req.body)
    res.json(p)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// Update product
router.put('/:id', async (req, res) => {
  try {
    const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(p)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// Delete product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

export default router
