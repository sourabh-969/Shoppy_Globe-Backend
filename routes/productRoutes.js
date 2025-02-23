import express from 'express';
import { addProduct, getAllProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/addproduct', addProduct);

export default router;