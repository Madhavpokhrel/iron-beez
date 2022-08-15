import React from 'react';
import {
  Center,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Input,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { ProductsListCell } from '../../components/ProductsListCell/ProductsListCell';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductsListingPage = () => {
  return (
    <>
    <Header />
      <Center width="100%" height="12vh">
        <Flex width="90%" justifyContent="space-between">
          <Center>
            <Text color="#949494" fontSize="20px" fontWeight="500">
              Home/Products
            </Text>
          </Center>
          <Center>
            <InputGroup>
              <InputLeftElement
                cursor="pointer"
                color="#D68C45"
                height="100%"
                pl="10px"
              >
                <BiSearch size="1.5rem" />
              </InputLeftElement>
              <Input
                padding="1rem"
                pl="3rem"
                placeholder="Search"
                fontSize="18px"
              ></Input>
            </InputGroup>
          </Center>
        </Flex>
      </Center>
      <ProductsListCell />
      <Footer />
    </>
  );
};

export default ProductsListingPage;
