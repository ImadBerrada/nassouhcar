-- CreateTable
CREATE TABLE "public"."price_rules" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "pricePerDay" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "price_rules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "price_rules_carId_startDate_endDate_idx" ON "public"."price_rules"("carId", "startDate", "endDate");

-- AddForeignKey
ALTER TABLE "public"."price_rules" ADD CONSTRAINT "price_rules_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
