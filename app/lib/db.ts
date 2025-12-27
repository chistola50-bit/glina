import Prisma from '@prisma/client'

type PrismaClientType = InstanceType<typeof Prisma.PrismaClient>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientType | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new Prisma.PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
