/*
  Warnings:

  - You are about to drop the `ContactFields` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContactFields" DROP CONSTRAINT "ContactFields_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "ContactFields" DROP CONSTRAINT "ContactFields_field_id_fkey";

-- DropTable
DROP TABLE "ContactFields";

-- CreateTable
CREATE TABLE "ContactField" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "contact_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContactField" ADD CONSTRAINT "ContactField_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactField" ADD CONSTRAINT "ContactField_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
