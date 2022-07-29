import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FeaturedItemsEquipmentCreateArgs>(
  {
    featuredItemsEquipment: {
      one: {
        data: {
          heading: 'String',
          price: 3689469,
          image_url: 'String',
          location: 'String',
          time: 'String',
        },
      },
      two: {
        data: {
          heading: 'String',
          price: 9378564,
          image_url: 'String',
          location: 'String',
          time: 'String',
        },
      },
    },
  }
)

export type StandardScenario = typeof standard
