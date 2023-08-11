import Link from 'next/link';
import { SuccessContainer, ImageContainer, ImagesBody } from '../styles/pages/success';
import { GetServerSideProps } from 'next';
import { stripe } from '../lib/stripe';
import Stripe from 'stripe';
import Image from 'next/image';
import Head from 'next/head';
import { uuid } from 'uuidv4';

interface SuccessProps {
  customerName: string
  products: string[]
}

export default function Sucess({ customerName, products }: SuccessProps) {
  console.log('Testando', customerName, products)
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <ImagesBody>
          {products.map(item => (
            <ImageContainer key={uuid()}>
              <Image src={item} width={120} height={110} alt='' />
            </ImageContainer>
          ))}
        </ImagesBody>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length}</strong> {products.length < 1 ? 'camisa já está' : 'camisas já estão'}  a caminho de sua casa.
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items', 'line_items.data.price.product'] })
  if (!session.line_items) throw new Error('')
  
  const customerName = session.customer_details?.name
  const products = session.line_items.data.map(item => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      products
    }
  }
}