-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "available" SET DEFAULT false;
