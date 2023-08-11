import { stripe } from '@/src/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../_app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productState } = req.body as { productState: Product[] }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (productState.length < 1) return res.status(400).json({ error: 'Cart is empty' })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const productItems = productState.map(item => ({
    price: item.defaultPriceId,
    quantity: 1
  }))

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: productItems
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}