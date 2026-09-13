import React, { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductList = () => {

  const [selectedCategory, setSelectedCategory] = useState();
  const { products } = useCart();

  return (
    <>

      <SearchFilter />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className='text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4 text-white m-auto max-w-7xl pb-4'>
        <h2>Featured Gear  ( {products.length} Items )</h2>
      </div>

      <div className='mt-5 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
       gap-8 justify-center items-center max-w-7xl m-auto'>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />
        })}
      </div>

    </>
  )
}

export default ProductList

