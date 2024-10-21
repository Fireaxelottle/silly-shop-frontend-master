import React from 'react'

const ProductCard = ({ item }) => {
  const { id, name, price, image } = item

  const handler = () => {
    console.log(id);
  };
  return (
     <div className='product-card'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <span>${price}</span>
  
        <div>
          <button onClick={handler}>
          <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    
  )
}

export default ProductCard
