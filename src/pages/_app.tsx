import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import logo from '../assets/logo.svg'
import { Cart, Container, CountCircle, Header } from '../styles/pages/app'
import Image from 'next/image'
import { Handbag } from '@phosphor-icons/react'
import { useState } from 'react'
import { ProductContext } from '../context/ProductContext'
import { Bag } from '../components/Bag'
globalStyles()

export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

export default function App({ Component, pageProps }: AppProps) {
  const [productState, setProductState] = useState<Product[]>([])
  const [navOpen, setNavOpen] = useState(false)
  const [totalValue, setTotalValue] = useState(0)

  function openNav() {
    setNavOpen(true)
  }

  function closeNav() {
    setNavOpen(false);
  }

  function addProductToBag(product: Product) {
    setProductState([...productState, product])
  }

  function removeProductToBag(product: Product) {
    const updateProduct = productState.filter(item => item.id !== product.id)
    const updatePrice = totalValue - Number(product.price.replace(/[^0-9,]/g, "").replace(",", "."))
    setProductState(updateProduct)
    setTotalValue(updatePrice)
  }

  function sum(price: string) {
    const value = price.replace(/[^0-9,]/g, "").replace(",", ".")
    setTotalValue(totalValue + Number(value))
  }

  return (
    <Container>
      <ProductContext.Provider value={{ productState, addProductToBag, removeProductToBag, totalValue, sum }}>
        <Header>
          <Image src={logo} alt='' />
          <Cart onClick={openNav}>
            <Handbag size={24} />
            {productState.length > 0 && <CountCircle>{productState.length}</CountCircle>}
          </Cart>
        </Header>
        <Component {...pageProps} />
        <Bag closeNav={closeNav} navOpen={navOpen} />
      </ProductContext.Provider>
    </Container>
  )
}
