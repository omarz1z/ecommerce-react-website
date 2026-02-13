

import { getProducts } from "../data/products";
import ProductCard from "../components/productsCard";

export default function Home() {
const products = getProducts()
    return (
        <div className="page">
           <div className="home-hero">
            <h1 className="home-hero-title">Welcome to ShopHub</h1>
            <p className="home-subtitle">Your one-stop shop for all your needs.</p>
           </div>

   <div className="container">
        <h2 className="container-title">Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />  
        
          ))}
        </div>
      </div>
    </div>
  )
}