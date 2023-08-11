import { ProductProps } from './Products'

export type BagProps = {
  navOpen: boolean
  closeNav: () => void
  // product: { id: string, name: string, imageUrl: string, price: string, description: string, defaultPriceId: string } 
}