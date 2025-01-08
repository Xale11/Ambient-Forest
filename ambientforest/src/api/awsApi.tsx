import axios from "axios"

const endpointUrl = import.meta.env.PROD ? import.meta.env.VITE_PROD_API_URL : import.meta.env.VITE_DEV_API_URL


export async function fetchFromDynamoDB(endpoint: string) {
  try {
    const res = await axios.get(`${endpointUrl}${endpoint}`)
    if (res.data.statusCode === 200){
      return typeof res.data.body === "string" ? JSON.parse(res.data.body) : res.data.body
    } else {
      throw new Error(`${res.data.body}`)
    }
  } catch (error) {
    console.error(error)
    throw new Error(`${error}`)
  }
}

export const getProductsByTypeFromDynamoDB = async (type: string) => {
  try {
    const res = await axios.get(`${endpointUrl}/products/item/${type}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error(`${error}`)
  }
} 

export const getProductByTypeAndIdFromDynamoDB = async (type: string, id: string) => {
  try {
    const res = await axios.get(`${endpointUrl}/products/item/${type}/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
    throw new Error(`${error}`)
  }
} 