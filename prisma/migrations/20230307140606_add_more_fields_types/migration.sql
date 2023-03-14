/*
  Warnings:

  - The values [DATE,RADIO] on the enum `FieldsType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FieldsType_new" AS ENUM ('TEXT', 'TEXTAREA', 'NUMBER', 'CURRENCY', 'DATETIME', 'SELECT', 'MULTI_SELECT', 'CHECKBOX', 'CONTACT_LINK', 'SEGMENTED_CONTROL', 'EMAIL', 'PHONE', 'URL', 'FILE', 'COUNTRY', 'RATING');
ALTER TABLE "Fields" ALTER COLUMN "type" TYPE "FieldsType_new" USING ("type"::text::"FieldsType_new");
ALTER TYPE "FieldsType" RENAME TO "FieldsType_old";
ALTER TYPE "FieldsType_new" RENAME TO "FieldsType";
DROP TYPE "FieldsType_old";
COMMIT;
