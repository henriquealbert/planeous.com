-- CreateTable
CREATE TABLE "ContactFields" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "contact_id" TEXT NOT NULL,
    "field_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactFields_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContactFields" ADD CONSTRAINT "ContactFields_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactFields" ADD CONSTRAINT "ContactFields_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "Fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
