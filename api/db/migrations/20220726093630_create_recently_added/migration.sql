/*
  Warnings:

  - You are about to drop the column `location` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Equipment` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "RecentlyAddedEquipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "heading" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Equipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "heading" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_Equipment" ("heading", "id", "image_url", "price") SELECT "heading", "id", "image_url", "price" FROM "Equipment";
DROP TABLE "Equipment";
ALTER TABLE "new_Equipment" RENAME TO "Equipment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
