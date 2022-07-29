import { MetaTags } from '@redwoodjs/web'

import DealerInfo from 'src/components/DealerInfo/DealerInfo'
import Details from 'src/components/Details/Details'
import Enquiry from 'src/components/Enquiry/Enquiry'
import EquipmentImages from 'src/components/EquipmentImages/EquipmentImages'
import FeaturedItemsCell from 'src/components/FeaturedItemsCell'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header'
import SocialLink from 'src/components/SocialLink/SocialLink'

const ProductsDetailPage = () => {
  return (
    <>
      <MetaTags title="ProductsDetail" description="ProductsDetail page" />
      <Header />
      <Details />
      <EquipmentImages />
      <DealerInfo />

      <FeaturedItemsCell />
      <SocialLink />
      <Enquiry />
      <Footer />
    </>
  )
}

export default ProductsDetailPage
