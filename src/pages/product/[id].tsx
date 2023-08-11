import { Bag } from '@/src/components/Bag'
import { ProductContext } from '@/src/context/ProductContext'
import { stripe } from '@/src/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/product'
import { ProductProps } from '@/src/types/Products'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import Stripe from 'stripe'

export default function Products({ product }: ProductProps) {
  const [navOpen, setNavOpen] = useState(false)
  const { addProductToBag, sum } = useContext(ProductContext)

  function openNav() {
    addProductToBag(product)
    sum(product.price)
    setNavOpen(true)
  }

  function closeNav() {
    setNavOpen(false);
  }

  if (!product) return <></>

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop </title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>

          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={openNav}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
      <Bag closeNav={closeNav} navOpen={navOpen} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id
  if (!productId) throw new Error()

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount ? new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100) : 0,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}