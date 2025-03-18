/*
  Warnings:

  - You are about to drop the column `questions` on the `Questions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "questionsId" TEXT;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "questions";

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_questionsId_fkey" FOREIGN KEY ("questionsId") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
