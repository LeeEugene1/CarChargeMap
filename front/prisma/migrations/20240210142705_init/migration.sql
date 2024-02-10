/*
  Warnings:

  - You are about to drop the column `authorId` on the `Store` table. All the data in the column will be lost.
  - Made the column `kakaoAddress` on table `Store` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Store" DROP COLUMN "authorId",
ALTER COLUMN "kakaoAddress" SET NOT NULL,
ALTER COLUMN "kakaoAddress" SET DATA TYPE TEXT;
