import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';
// import FeaturedItemsCell from 'src/components/FeaturedItemsCell'
// import Footer from 'src/components/Footer/Footer'
import SocialLink from '../../components/SocialLink/SocialLink';
import Enquiry from '../../components/Enquiry/Enquiry';
import DealerInfo from '../../components/DealerInfo/DealerInfo';
import Details from '../../components/Details/Details';
import EquipmentImages from '../../components/EquipmentImages/EquipmentImages';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const ProductsDetailPage = () => {
  const [productsDetail, setProductsDetail] = useState([]);
  const MARKETPLACE_API_KEY = process.env.REACT_APP_MARKETPLACE_API_KEY;
  useEffect(() => {
    const fetchProductsDetailApi = async id => {
      const result = await axios.get(
        `http://marketcheck-prod.apigee.net/v2/search/heavy-equipment/active?api_key=${MARKETPLACE_API_KEY}&search_text=turbo&zip=74116${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setProductsDetail(result.data.listings);
    };
    fetchProductsDetailApi();
  }, []);

  return (
    <>
      <Header />
      <Flex
        px={{ base: '10', sm: '20', md: '20', lg: '20' }}
        mt={{ base: '5', sm: '9', md: '10', lg: '10' }}
        mb={7}
      >
        {productsDetail.map(item => {
          return <Details item={item.id} />;
        })}
      </Flex>

      <Flex>
        <EquipmentImages />
      </Flex>
      <Box
        width={{ base: '90%', sm: '90%', md: '90%', lg: '90%' }}
        ml={{ base: '5', sm: '10', md: '16', lg: '16' }}
        mt={{ base: '5', sm: '10', md: '10', lg: '10' }}
        mb={'5rem'}
      >
        <DealerInfo />
      </Box>

      {/* <FeaturedItemsCell /> */}
      <Box marginTop={10}>
        <SocialLink />
      </Box>
      <Flex justifyContent="center" mt={'5rem'} mb={'4rem'}>
        <Enquiry />
      </Flex>
      <Footer />
    </>
  );
};

export default ProductsDetailPage;
