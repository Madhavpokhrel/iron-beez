import {
  featuredItemsEquipments,
  featuredItemsEquipment,
  createFeaturedItemsEquipment,
  updateFeaturedItemsEquipment,
  deleteFeaturedItemsEquipment,
} from './featuredItemsEquipments'
import type { StandardScenario } from './featuredItemsEquipments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('featuredItemsEquipments', () => {
  scenario(
    'returns all featuredItemsEquipments',
    async (scenario: StandardScenario) => {
      const result = await featuredItemsEquipments()

      expect(result.length).toEqual(
        Object.keys(scenario.featuredItemsEquipment).length
      )
    }
  )

  scenario(
    'returns a single featuredItemsEquipment',
    async (scenario: StandardScenario) => {
      const result = await featuredItemsEquipment({
        id: scenario.featuredItemsEquipment.one.id,
      })

      expect(result).toEqual(scenario.featuredItemsEquipment.one)
    }
  )

  scenario('creates a featuredItemsEquipment', async () => {
    const result = await createFeaturedItemsEquipment({
      input: {
        heading: 'String',
        price: 7982851,
        image_url: 'String',
        location: 'String',
        time: 'String',
      },
    })

    expect(result.heading).toEqual('String')
    expect(result.price).toEqual(7982851)
    expect(result.image_url).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.time).toEqual('String')
  })

  scenario(
    'updates a featuredItemsEquipment',
    async (scenario: StandardScenario) => {
      const original = await featuredItemsEquipment({
        id: scenario.featuredItemsEquipment.one.id,
      })
      const result = await updateFeaturedItemsEquipment({
        id: original.id,
        input: { heading: 'String2' },
      })

      expect(result.heading).toEqual('String2')
    }
  )

  scenario(
    'deletes a featuredItemsEquipment',
    async (scenario: StandardScenario) => {
      const original = await deleteFeaturedItemsEquipment({
        id: scenario.featuredItemsEquipment.one.id,
      })
      const result = await featuredItemsEquipment({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
