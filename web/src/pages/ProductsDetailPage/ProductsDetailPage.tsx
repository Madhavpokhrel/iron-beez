import { Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

// import DealerInfo from 'src/components/DealerInfo/DealerInfo'
import Details from 'src/components/Details/Details'
// import Enquiry from 'src/components/Enquiry/Enquiry'
import EquipmentImages from 'src/components/EquipmentImages/EquipmentImages'
// import FeaturedItemsCell from 'src/components/FeaturedItemsCell'
// import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header'
// import SocialLink from 'src/components/SocialLink/SocialLink'

//test
//test1
const ProductsDetailPage = () => {
  return (
    <>
      <MetaTags title="ProductsDetail" description="ProductsDetail page" />
      <Header />
      <Flex
        px={{ base: '10', sm: '20', md: '20', lg: '20' }}
        mt={{ base: '5', sm: '9', md: '10', lg: '10' }}
        mb={7}
      >
        <Details />
      </Flex>

      <Flex>
        <EquipmentImages />
      </Flex>
      {/* <DealerInfo /> */}

      {/* <FeaturedItemsCell />
      <SocialLink />
      <Enquiry />
      <Footer />   */}
    </>
  )
}

export default ProductsDetailPage
