const { goToCheckout } = require("./stripeLambda")

exports.handler = async (event) => {

  const data = JSON.parse(event.body);

  const lineItems = data.lineItems 
  const shipping = data.shipping
  const domain = data.domain 
  try {
    const sessionUrl = await goToCheckout(lineItems, shipping, domain)
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS", 
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
     },
      body: JSON.stringify(sessionUrl),
    };
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS", 
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify('There was an error fetching the stripe payment link.'),
    };
  }
};