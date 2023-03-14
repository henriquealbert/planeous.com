/*
  Warnings:

  - You are about to drop the `Fields` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContactField" DROP CONSTRAINT "ContactField_field_id_fkey";

-- DropForeignKey
ALTER TABLE "Fields" DROP CONSTRAINT "Fields_organization_id_fkey";

-- DropTable
DROP TABLE "Fields";

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FieldsType" NOT NULL,
    "required" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "options" JSONB NOT NULL,
    "organization_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactField" ADD CONSTRAINT "ContactField_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
