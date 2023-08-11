import { Stripe } from 'stripe';

export const useStripeCheckout = (cartItems: Array<any>) => {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '', {
    apiVersion: '2022-11-15',
  });

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: 'inr',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.imageUrl],
      },
    },
    quantity: item.quantity,
  }))

  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:3000/product-list',
    cancel_url: 'http://localhost:3000/checkout',
  } as any)
    .then((session) => session);
}