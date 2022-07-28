import {
  recentlyAddedEquipments,
  recentlyAddedEquipment,
  createRecentlyAddedEquipment,
  updateRecentlyAddedEquipment,
  deleteRecentlyAddedEquipment,
} from './recentlyAddedEquipments'
import type { StandardScenario } from './recentlyAddedEquipments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recentlyAddedEquipments', () => {
  scenario(
    'returns all recentlyAddedEquipments',
    async (scenario: StandardScenario) => {
      const result = await recentlyAddedEquipments()

      expect(result.length).toEqual(
        Object.keys(scenario.recentlyAddedEquipment).length
      )
    }
  )

  scenario(
    'returns a single recentlyAddedEquipment',
    async (scenario: StandardScenario) => {
      const result = await recentlyAddedEquipment({
        id: scenario.recentlyAddedEquipment.one.id,
      })

      expect(result).toEqual(scenario.recentlyAddedEquipment.one)
    }
  )

  scenario('creates a recentlyAddedEquipment', async () => {
    const result = await createRecentlyAddedEquipment({
      input: {
        heading: 'String',
        price: 3647497,
        image_url: 'String',
        location: 'String',
        time: 'String',
      },
    })

    expect(result.heading).toEqual('String')
    expect(result.price).toEqual(3647497)
    expect(result.image_url).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.time).toEqual('String')
  })

  scenario(
    'updates a recentlyAddedEquipment',
    async (scenario: StandardScenario) => {
      const original = await recentlyAddedEquipment({
        id: scenario.recentlyAddedEquipment.one.id,
      })
      const result = await updateRecentlyAddedEquipment({
        id: original.id,
        input: { heading: 'String2' },
      })

      expect(result.heading).toEqual('String2')
    }
  )

  scenario(
    'deletes a recentlyAddedEquipment',
    async (scenario: StandardScenario) => {
      const original = await deleteRecentlyAddedEquipment({
        id: scenario.recentlyAddedEquipment.one.id,
      })
      const result = await recentlyAddedEquipment({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
