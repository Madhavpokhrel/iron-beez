import { Box, Flex, Img } from '@chakra-ui/react'

import Equipment1 from 'src/Image/Equip1.png'
import Equipment2 from 'src/Image/Equipment2.png'
import Equipment3 from 'src/Image/Equipment3.png'
import Equipment4 from 'src/Image/Equipment4.png'
import Equipment5 from 'src/Image/Equipment5.png'
//test1
const EquipmentImages = () => {
  return (
    <div style={{ width: '100%' }}>
      <Flex
        flexWrap={'wrap'}
        flexDirection={'row'}
        ml={{ base: '4rem', sm: '6rem', md: '7.5rem', lg: '7.5rem' }}
        mr={{ base: '3rem', sm: '4rem', md: '6rem', lg: '6rem' }}
      >
        <Box width={'220px'} display={'flex'} flexGrow={1}>
          <Img
            src={Equipment1}
            alt={'nothing to show'}
            // boxSize={{ base: '300px' }}
          ></Img>
        </Box>
        <Box width={'220px'} display={'flex'} flexGrow={1}>
          <Img src={Equipment2} alt={'nothing to show'}></Img>
        </Box>
        <Box width={'220px'} display={'flex'} flexGrow={1}>
          <Img src={Equipment3} alt={'nothing to show'}></Img>
        </Box>
        <Box width={'220px'} display={'flex'} flexGrow={1}>
          <Img src={Equipment4} alt={'nothing to show'}></Img>
        </Box>
        <Box width={'220px'} display={'flex'} flexGrow={1}>
          <Img src={Equipment5} alt={'nothing to show'}></Img>
        </Box>
      </Flex>
    </div>
  )
}

export default EquipmentImages
