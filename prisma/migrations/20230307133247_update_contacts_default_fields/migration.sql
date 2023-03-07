/*
  Warnings:

  - You are about to drop the column `email` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Contact` table. All the data in the column will be lost.
  - Made the column `first_name` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "middle_name" TEXT,
ADD COLUMN     "salutation" TEXT,
ADD COLUMN     "suffix" TEXT,
ALTER COLUMN "first_name" SET NOT NULL;
