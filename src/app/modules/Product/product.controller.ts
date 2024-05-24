import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import ProductServices from './product.service'
const createProduct = asyncHandler(async (req, res) => {
  const result = await ProductServices.createProduct(req.body)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product create successfully',
    data: result,
  })
})
const getAllProduct = asyncHandler(async (req, res) => {
  const limit =
    typeof req.query.limit === 'string' ? parseInt(req.query.limit, 10) : 0
  const category = req.query.category as string
  const rating =
    typeof req.query.rating === 'string' ? parseInt(req.query.rating, 10) : 0
  const minPrice =
    typeof req.query.minPrice === 'string'
      ? parseInt(req.query.minPrice, 10)
      : 0
  const maxPrice =
    typeof req.query.maxPrice === 'string'
      ? parseInt(req.query.maxPrice, 10)
      : 0
  const isFeatured = typeof req.query.isFeatured === 'string' ? true : false
  // const query = req.query
  const result = await ProductServices.getAllProduct(
    category,
    rating,
    minPrice,
    maxPrice,
    isFeatured,
    limit,
  )
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieved all products successfully',
    data: result,
  })
})
const getSingleProduct = asyncHandler(async (req, res) => {
  const id = req.params.productId
  const result = await ProductServices.getSingleProduct(id)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieved product successfully',
    data: result,
  })
})
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.productId
  const body = req.body
  const result = await ProductServices.updateProduct(id, body)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product updated successfully',
    data: result,
  })
})
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.productId
  const result = await ProductServices.deleteProduct(id)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product deleted successfully',
    data: result,
  })
})
const makeFlash = asyncHandler(async (req, res) => {
  const id = req.params.productId
  const result = await ProductServices.makeFlash(id)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product flash make successfully',
    data: result,
  })
})
const removeFlash = asyncHandler(async (req, res) => {
  const id = req.params.productId
  const result = await ProductServices.removeFlash(id)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product flash removed successfully',
    data: result,
  })
})

const getFlashSaleProducts = asyncHandler(async (req, res) => {
  const limit =
    typeof req.query.limit === 'string' ? parseInt(req.query.limit, 10) : 0
  const result = await ProductServices.getFlashSaleProduct(limit)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'retrieved all products successfully',
    data: result,
  })
})

const ProductControls = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  makeFlash,
  removeFlash,
  getFlashSaleProducts,
}
export default ProductControls
