-- CreateTable
CREATE TABLE "FeaturedItemsEquipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "heading" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "time" TEXT NOT NULL
);
