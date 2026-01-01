import { Router } from 'express'
import { getItems, addItem } from '../controllers/itemsController.js'

const router = Router()
router.get('/', getItems)
router.post('/', addItem)

export default router
