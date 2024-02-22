import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const goProductPage = () => {
    navigate('/product?q=pants')
  }
  return (
    <div>
        <h1>Home</h1>
        <Link to='/about'>Go to about tag</Link>
        <Link to='/product'>Go to product</Link>
        <button onClick={goProductPage}>Go to product</button>
    </div>
  )
}

export default Home