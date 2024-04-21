-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_eventId_fkey";

-- AlterTable
ALTER TABLE "EventGuideline" ADD COLUMN     "festId" INTEGER;

-- AlterTable
ALTER TABLE "EventTC" ADD COLUMN     "festId" INTEGER;

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "eventId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("event_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventGuideline" ADD CONSTRAINT "EventGuideline_festId_fkey" FOREIGN KEY ("festId") REFERENCES "Fest"("fest_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTC" ADD CONSTRAINT "EventTC_festId_fkey" FOREIGN KEY ("festId") REFERENCES "Fest"("fest_id") ON DELETE SET NULL ON UPDATE CASCADE;
