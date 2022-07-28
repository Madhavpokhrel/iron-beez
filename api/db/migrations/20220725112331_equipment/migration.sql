/*
  Warnings:

  - Added the required column `location` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Equipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "heading" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_Equipment" ("heading", "id", "image_url", "price") SELECT "heading", "id", "image_url", "price" FROM "Equipment";
DROP TABLE "Equipment";
ALTER TABLE "new_Equipment" RENAME TO "Equipment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
