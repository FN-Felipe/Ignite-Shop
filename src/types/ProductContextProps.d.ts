import { Product } from '../pages/_app';

interface ProductContextProps {
  productState: Product[] | undefined
  addProductToBag: (product: Product) => void
  removeProductToBag: (product: Product) => void
  totalValue: number
  sum: (price: string) => void
}