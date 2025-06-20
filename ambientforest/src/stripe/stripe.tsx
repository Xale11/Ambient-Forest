import Stripe from "stripe";
import { LineItem } from "../types/clientTypes";
import { ShippingRate } from "../types/types";
// import axios from "axios"; uncomment when in prdouction

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET); // remove this line in production

const domain = import.meta.env.PROD ? import.meta.env.VITE_DOMAIN :  "http://localhost:5173"

// const endpointUrl = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL add back when production is set up correctly

// export const goToCheckout = async (lineItems: LineItem[], shipping: ShippingRate[]) => {
//   const res = await axios.post(`${endpointUrl}/stripe`, {
//     lineItems: lineItems,
//     shipping: shipping,
//     domain: domain
//   })

//   console.log(res)

//   return res.data as string;

// }

// deprecated - Do not use the function below on production. Use above function. 
// Exposes stripe key on frontend
// only use for testing logic locally

export const goToCheckout = async (lineItems: LineItem[], shipping: ShippingRate[]) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems.map((lineItem) => ({
        price_data: {
          currency: lineItem.price_data.currency,
          product_data: {
            name: lineItem.price_data.product_data.name,
            images: lineItem.price_data.product_data.images,
            description: lineItem.price_data.product_data.description,
          },
          unit_amount: lineItem.price_data.unit_amount,
        },
        quantity: lineItem.quantity
      })),
      mode: "payment",
      success_url: `${domain}/success`,
      cancel_url: `${domain}/cancel`,
      shipping_options: shipping.map((rate) => ({
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: rate.price * 100,
            currency: "gbp",
          },
          display_name: rate.name,
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: rate.shipMin,
            },
            maximum: {
              unit: "business_day",
              value: rate.shipMax,
            },
          },
        },
      })),
      shipping_address_collection: {
        allowed_countries: [
          "US", // United States
          "CA", // Canada
          "GB", // United Kingdom
          "AU", // Australia
          "FR", // France
          "DE", // Germany
          "IT", // Italy
          "ES", // Spain
          "JP", // Japan
          "CN", // China
          "IN", // India
          "BR", // Brazil
          "MX", // Mexico
          "RU", // Russia
          "ZA", // South Africa
          "NG", // Nigeria
          "EG", // Egypt
          "AR", // Argentina
          "NZ", // New Zealand
          "BE", // Belgium
          "NL", // Netherlands
          "SE", // Sweden
          "NO", // Norway
          "DK", // Denmark
          "FI", // Finland
          "AT", // Austria
          "CH", // Switzerland
          "PT", // Portugal
          "GR", // Greece
          "PL", // Poland
          "CZ", // Czech Republic
          "HU", // Hungary
          "RO", // Romania
          "BG", // Bulgaria
          "SK", // Slovakia
          "SI", // Slovenia
          "HR", // Croatia
          "RS", // Serbia
          "UA", // Ukraine
          "TR", // Turkey
          "IE", // Ireland
          "LU", // Luxembourg
          "CY", // Cyprus
          "EE", // Estonia
          "LV", // Latvia
          "LT", // Lithuania
          "MT", // Malta
          "IS", // Iceland
          "MC", // Monaco
          "LI", // Liechtenstein
          // Add more country codes as needed
        ],
      },
    });
    
    return session.url as string
}

