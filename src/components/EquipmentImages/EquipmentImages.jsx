import { Box, Flex, Img } from '@chakra-ui/react'

import Equipment1 from '../../assets/Image/Equip1.png'
import Equipment2 from '../../assets/Image/Equipment2.png'
import Equipment3 from '../../assets/Image/Equipment3.png'
import Equipment4 from '../../assets/Image/Equipment4.png'
import Equipment5 from '../../assets/Image/Equipment5.png'

const EquipmentImages = () => {
  return (
    <div style={{ width: '100%' }}>
      <Flex
        flexWrap={'wrap'}
        flexDirection={'row'}
        ml={{ base: '2rem', sm: '4rem', md: '7.5rem', lg: '7rem' }}
        mr={{ base: '2rem', sm: '4rem', md: '6rem', lg: '7rem' }}
      >
        <Box
          display={'flex'}
          flexGrow={1}
          boxSize={{ base: '280px', sm: '300px', md: '180px', lg: '180px' }}
        >
          <Img
            src={Equipment1}
            alt={'nothing to show'}
            // boxSize={{ base: '300px' }}
          ></Img>
        </Box>
        <Box
          display={'flex'}
          flexGrow={1}
          boxSize={{ base: '280px', sm: '300px', md: '180px', lg: '180px' }}
        >
          <Img src={Equipment2} alt={'nothing to show'}></Img>
        </Box>
        <Box
          display={'flex'}
          flexGrow={1}
          boxSize={{ base: '280px', sm: '300px', md: '180px', lg: '180px' }}
        >
          <Img src={Equipment3} alt={'nothing to show'}></Img>
        </Box>
        <Box
          display={'flex'}
          flexGrow={1}
          boxSize={{ base: '280px', sm: '300px', md: '180px', lg: '180px' }}
        >
          <Img src={Equipment4} alt={'nothing to show'}></Img>
        </Box>
        <Box
          display={'flex'}
          flexGrow={1}
          boxSize={{ base: '280px', sm: '300px', md: '180px', lg: '180px' }}
        >
          <Img src={Equipment5} alt={'nothing to show'}></Img>
        </Box>
      </Flex>
    </div>
  )
}

export default EquipmentImages
