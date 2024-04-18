-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
