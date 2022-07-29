import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const featuredItemsEquipments: QueryResolvers['featuredItemsEquipments'] =
  () => {
    return db.featuredItemsEquipment.findMany()
  }

export const featuredItemsEquipment: QueryResolvers['featuredItemsEquipment'] =
  ({ id }) => {
    return db.featuredItemsEquipment.findUnique({
      where: { id },
    })
  }

export const createFeaturedItemsEquipment: MutationResolvers['createFeaturedItemsEquipment'] =
  ({ input }) => {
    return db.featuredItemsEquipment.create({
      data: input,
    })
  }

export const updateFeaturedItemsEquipment: MutationResolvers['updateFeaturedItemsEquipment'] =
  ({ id, input }) => {
    return db.featuredItemsEquipment.update({
      data: input,
      where: { id },
    })
  }

export const deleteFeaturedItemsEquipment: MutationResolvers['deleteFeaturedItemsEquipment'] =
  ({ id }) => {
    return db.featuredItemsEquipment.delete({
      where: { id },
    })
  }
