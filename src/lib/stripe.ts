import Stripe from 'stripe'

const STRIPE_SECREC_KEY = process.env.STRIPE_SECREC_KEY
if (!STRIPE_SECREC_KEY) throw new Error()

export const stripe = new Stripe(STRIPE_SECREC_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  }
})