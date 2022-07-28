import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const recentlyAddedEquipments: QueryResolvers['recentlyAddedEquipments'] =
  () => {
    return db.recentlyAddedEquipment.findMany()
  }

export const recentlyAddedEquipment: QueryResolvers['recentlyAddedEquipment'] =
  ({ id }) => {
    return db.recentlyAddedEquipment.findUnique({
      where: { id },
    })
  }

export const createRecentlyAddedEquipment: MutationResolvers['createRecentlyAddedEquipment'] =
  ({ input }) => {
    return db.recentlyAddedEquipment.create({
      data: input,
    })
  }

export const updateRecentlyAddedEquipment: MutationResolvers['updateRecentlyAddedEquipment'] =
  ({ id, input }) => {
    return db.recentlyAddedEquipment.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecentlyAddedEquipment: MutationResolvers['deleteRecentlyAddedEquipment'] =
  ({ id }) => {
    return db.recentlyAddedEquipment.delete({
      where: { id },
    })
  }
