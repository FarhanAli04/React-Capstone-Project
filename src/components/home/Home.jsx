import React from 'react'
import Category from './category-bar/Category'
import HeroSection from './hero-section/Hero-Section'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import Product from './product/Product'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'

import ProductSection from './productSectionT/ProductSection'
import LatestMobiles from './LatestMobiles/LatestMobiles'

import ShopByBrand from './CustomerReviews/CustomerReview'

const Home = () => {
  return (
    <>
    <Box className="!bg-slate-100">
    
      <Category/>
      <HeroSection/>
      <EarbudGallery/>
      <Product/>
      <BestSellers/>
    </Box>
   
    <ProductSection/>
    <LatestMobiles/>
    <ShopByBrand/>
    </>
  )
}

export default Home