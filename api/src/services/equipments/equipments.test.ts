import {
  equipments,
  equipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from './equipments'
import type { StandardScenario } from './equipments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('equipments', () => {
  scenario('returns all equipments', async (scenario: StandardScenario) => {
    const result = await equipments()

    expect(result.length).toEqual(Object.keys(scenario.equipment).length)
  })

  scenario('returns a single equipment', async (scenario: StandardScenario) => {
    const result = await equipment({ id: scenario.equipment.one.id })

    expect(result).toEqual(scenario.equipment.one)
  })

  scenario('creates a equipment', async () => {
    const result = await createEquipment({
      input: {
        heading: 'String',
        price: 7379293,
        image_url: 'String',
        location: 'String',
        time: 'String',
      },
    })

    expect(result.heading).toEqual('String')
    expect(result.price).toEqual(7379293)
    expect(result.image_url).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.time).toEqual('String')
  })

  scenario('updates a equipment', async (scenario: StandardScenario) => {
    const original = await equipment({ id: scenario.equipment.one.id })
    const result = await updateEquipment({
      id: original.id,
      input: { heading: 'String2' },
    })

    expect(result.heading).toEqual('String2')
  })

  scenario('deletes a equipment', async (scenario: StandardScenario) => {
    const original = await deleteEquipment({ id: scenario.equipment.one.id })
    const result = await equipment({ id: original.id })

    expect(result).toEqual(null)
  })
})
