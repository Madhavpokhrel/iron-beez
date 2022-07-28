import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EquipmentCreateArgs>({
  equipment: {
    one: {
      data: {
        heading: 'String',
        price: 1193115,
        image_url: 'String',
        location: 'String',
        time: 'String',
      },
    },
    two: {
      data: {
        heading: 'String',
        price: 3339878,
        image_url: 'String',
        location: 'String',
        time: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
