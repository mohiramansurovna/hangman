/*
  Warnings:

  - You are about to drop the column `answer` on the `Questions` table. All the data in the column will be lost.
  - Added the required column `asker` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "answer",
ADD COLUMN     "asker" TEXT NOT NULL;
