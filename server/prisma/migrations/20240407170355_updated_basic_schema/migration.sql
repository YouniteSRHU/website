/*
  Warnings:

  - You are about to drop the column `tc_src` on the `EventTC` table. All the data in the column will be lost.
  - Added the required column `tc` to the `EventTC` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventTC" DROP COLUMN "tc_src",
ADD COLUMN     "tc" TEXT NOT NULL;
