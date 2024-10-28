/*
  Warnings:

  - Added the required column `correct` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wrong` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "correct" INTEGER NOT NULL,
ADD COLUMN     "wrong" INTEGER NOT NULL;
