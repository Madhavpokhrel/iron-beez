import { HStack, Img } from '@chakra-ui/react'

import Equipment1 from 'src/Image/Equip1.png'
import Equipment2 from 'src/Image/Equipment2.png'
import Equipment3 from 'src/Image/Equipment3.png'
import Equipment4 from 'src/Image/Equipment4.png'
import Equipment5 from 'src/Image/Equipment5.png'
const EquipmentImages = () => {
  return (
    <div>
      <HStack spacing={'0%'} ml={'7.5rem'} width={'225px'} height={'175px'}>
        <Img src={Equipment1} alt={'nothing to show'}></Img>
        <Img src={Equipment2} alt={'nothing to show'}></Img>
        <Img src={Equipment3} alt={'nothing to show'}></Img>
        <Img src={Equipment4} alt={'nothing to show'}></Img>
        <Img src={Equipment5} alt={'nothing to show'}></Img>
      </HStack>
    </div>
  )
}

export default EquipmentImages
