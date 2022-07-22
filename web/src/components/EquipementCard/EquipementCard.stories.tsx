import EquipementCard from './EquipementCard'

const EQUIPMENT = { id: 42, heading: "2021 Felco 211-50", price: 2000, image_url: "https://relay.marketcheck.com/image/us/heavy_equipments/d1a98ccf65a68fde1e222b792bede850-f90f06b8-6bee/8836ED6E" }

const EQUIPMENT_WITH_LONG_TEXT = { id: 42, heading: "2021 Felco 211-50 qqqqq www  eee e rrrrr rr", price: 2000, image_url: "https://relay.marketcheck.com/image/us/heavy_equipments/d1a98ccf65a68fde1e222b792bede850-f90f06b8-6bee/8836ED6E" }
export const generated = () => {
  return <EquipementCard equipment={EQUIPMENT} />
}

export const anotherStory = () => {
  return <EquipementCard equipment={EQUIPMENT} />
}

export const withLongText = () => {
  return <EquipementCard equipment={EQUIPMENT_WITH_LONG_TEXT} />
}

export const withDarkMode = () => {
  return <EquipementCard equipment={EQUIPMENT_WITH_LONG_TEXT} />
}

export default { title: 'Components/EquipementCard' }
