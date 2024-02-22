import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Product = () => {
    let [query, setQuery] = useSearchParams()
    console.log(query.get('q'));
    const navigate = useNavigate()
    const goToHomepage = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>Product</h1>
        <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  )
}

export default Product