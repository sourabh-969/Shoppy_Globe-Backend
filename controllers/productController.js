import Product from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}

// Add a new product
export const addProduct = async (req, res) => {
  const { name, price, description, stockQuantity } = req.body;

  // Input validation
  if (!name || !price || !description || !stockQuantity) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const product = new Product({ name, price, description, stockQuantity });

  try {
    await product.save();
    res.status(201).json(product); // Return the created product
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
}