import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ArticleCreateArgs>({
  article: {
    one: { data: { imageUrl: 'String', title: 'String', body: 'String' } },
    two: { data: { imageUrl: 'String', title: 'String', body: 'String' } },
  },
})

export type StandardScenario = typeof standard
