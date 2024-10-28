/*
  Warnings:

  - Made the column `correct` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wrong` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "correct" SET NOT NULL,
ALTER COLUMN "correct" SET DEFAULT 0,
ALTER COLUMN "wrong" SET NOT NULL,
ALTER COLUMN "wrong" SET DEFAULT 0;
