export type TProduct = {
  id: string
  name: string
  code: string
  images: Array<string>
  prevPrice: number
  price: number
  discount: number
  category: string
  isFlash: boolean
  description: string
  rating: number
  reviews: number
  quantity: number
  sale: number
  isFeatured: boolean
}

export type TProductCreatePayload = Pick<
  TProduct,
  | 'name'
  | 'images'
  | 'price'
  | 'category'
  | 'quantity'
  | 'description'
  | 'prevPrice'
>

export type TQueryPayload = Partial<Omit<TProduct, 'code'>>
