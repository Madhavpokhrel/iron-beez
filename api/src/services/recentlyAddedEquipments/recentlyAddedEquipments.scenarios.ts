import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RecentlyAddedEquipmentCreateArgs>(
  {
    recentlyAddedEquipment: {
      one: {
        data: {
          heading: 'String',
          price: 229245,
          image_url: 'String',
          location: 'String',
          time: 'String',
        },
      },
      two: {
        data: {
          heading: 'String',
          price: 6235648,
          image_url: 'String',
          location: 'String',
          time: 'String',
        },
      },
    },
  }
)

export type StandardScenario = typeof standard
