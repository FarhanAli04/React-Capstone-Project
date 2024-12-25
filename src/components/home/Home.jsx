import React from 'react'
import Category from './category-bar/Category'
import HeroSection from './hero-section/Hero-Section'
import EarbudGallery from './earbud-gallery/EarbudGallery'
import Product from './product/Product'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
import ProductSection from './productSection2/ProductSection'
import LatestMobiles from './LatestMobiles/LatestMobiles'
import ShopByBrand from './CustomerReviews/CustomerReview'
import ReasonToBuy from './reasonToBuy/reasonToBuy'
import FeaturesSection from './FeaturesSection/FeaturesSection'
import ShopByPrice from './ShopbyPrice/ShopbyPrice'
import LatestTrimmers from './latestTrimmers/latestTrimmers'
import Footer from '../footer/Footer'


const Home = () => {
  return (
    <>
      <Box className="!bg-slate-100">

        <Category />
        <HeroSection />
        <EarbudGallery />
        <Product />
        <BestSellers />
        <ProductSection />
      </Box>


      <LatestMobiles />
      <ShopByPrice />
      <ShopByBrand />
      <ReasonToBuy />
      <LatestTrimmers />
      <FeaturesSection />
<Footer/>
    </>
  )
}

export default Home