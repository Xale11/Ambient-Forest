import Cancel from "./pages/Cancel";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Success from "./pages/Success";
import Terms from "./pages/Terms";

// UPDATE ROBOT.XML & VITE-SITEMAP-PLUGIN WITH ANY CHANGES!!!

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/ourstory",
    element: <OurStory/>
  },
  {
    path: "/shop/:type",
    element: <Shop/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/terms",
    element: <Terms/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/product/:type/:id",
    element: <ProductPage/>
  },
  {
    path: "/success",
    element: <Success/>
  },
  {
    path: "/cancel",
    element: <Cancel/>
  },
]

// UPDATE ROBOT.XML & VITE-SITEMAP-PLUGIN WITH ANY CHANGES!!!