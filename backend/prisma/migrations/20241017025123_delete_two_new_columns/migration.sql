/*
  Warnings:

  - You are about to drop the column `correct` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `wrong` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "correct",
DROP COLUMN "wrong";
