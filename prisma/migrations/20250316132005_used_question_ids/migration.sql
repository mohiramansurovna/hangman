/*
  Warnings:

  - You are about to drop the column `questionsId` on the `Question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_questionsId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "questionsId";

-- AlterTable
ALTER TABLE "Questions" ADD COLUMN     "questions" TEXT[];
