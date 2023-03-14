-- CreateEnum
CREATE TYPE "FieldsType" AS ENUM ('TEXT', 'TEXTAREA', 'NUMBER', 'CURRENCY', 'DATE', 'SELECT', 'CHECKBOX', 'CONTACT_LINK', 'RADIO', 'EMAIL', 'PHONE', 'URL', 'FILE');

-- CreateTable
CREATE TABLE "Fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "FieldsType" NOT NULL,
    "required" BOOLEAN NOT NULL,
    "order" INTEGER NOT NULL,
    "options" TEXT[],
    "organization_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fields_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fields" ADD CONSTRAINT "Fields_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
