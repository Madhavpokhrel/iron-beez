import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EquipmentCreateArgs>({
  equipment: {
    one: { data: { heading: 'String', price: 6949095, image_url: 'String' } },
    two: { data: { heading: 'String', price: 8806903, image_url: 'String' } },
  },
})

export type StandardScenario = typeof standard
