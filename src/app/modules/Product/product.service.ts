import randomGenerator from '../../utils/randomGenerator'
import skuGenerator from '../../utils/skuGenerator'
import { TProductCreatePayload, TQueryPayload } from './product.interface'
import Product from './product.model'

const createProduct = async (payload: TProductCreatePayload) => {
  const productData = {
    ...payload,
    id: randomGenerator(),
    code: skuGenerator(),
    price: parseFloat(payload.price.toFixed(2)),
    prevPrice: parseFloat(payload.prevPrice.toFixed(2)),
  }
  await Product.create(productData)
  return { message: 'product created' }
}

const getAllProduct = async (
  category?: string,
  rating?: number,
  minPrice?: number,
  maxPrice?: number,
  isFeatured?: boolean,
  limit?: number,
) => {
  // const query = { ...(payload || {}) }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {}

  if (category) {
    query.category = category
  }
  if (isFeatured) {
    query.isFeatured = isFeatured
  }
  if (rating) {
    query.rating = rating // Assuming you want products with a rating greater than or equal to the specified rating
  }
  if ((minPrice && minPrice > 1) || (maxPrice && maxPrice > 1)) {
    query.price = {}
    if (minPrice && minPrice > 1) {
      query.price.$gte = minPrice
    }
    if (maxPrice && maxPrice > 1) {
      query.price.$lte = maxPrice
    }
  }

  const products = await Product.find(query).limit(limit || 0)
  return products
}

const getSingleProduct = async (productId: string) => {
  const product = await Product.findOne({ id: productId })
  return product
}
const updateProduct = async (productId: string, payload: TQueryPayload) => {
  const updateDoc = { ...payload }
  const product = await Product.findOneAndUpdate({ id: productId }, updateDoc, {
    new: true,
  })
  return product
}
const deleteProduct = async (productId: string) => {
  await Product.findOneAndDelete({ id: productId })
  return { message: 'deleted' }
}
//
const makeFlash = async (productId: string) => {
  await Product.findOneAndUpdate({ id: productId }, { isFlash: true })
  return { message: 'make flash' }
}
const removeFlash = async (productId: string) => {
  await Product.findOneAndUpdate({ id: productId }, { isFlash: false })
  return { message: 'remove flash' }
}
const getFlashSaleProduct = async (limit: number) => {
  const products = await Product.find({ isFlash: true }).limit(limit || 0)
  return products
}

const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  makeFlash,
  removeFlash,
  getFlashSaleProduct,
}
export default ProductServices
