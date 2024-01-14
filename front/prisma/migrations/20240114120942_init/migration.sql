-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "authorId" INTEGER,
    "addr" VARCHAR(255) NOT NULL,
    "chargeTp" INTEGER NOT NULL,
    "cpId" INTEGER NOT NULL,
    "cpNm" VARCHAR(255) NOT NULL,
    "cpStat" INTEGER NOT NULL,
    "cpTp" INTEGER NOT NULL,
    "csId" INTEGER NOT NULL,
    "csNm" VARCHAR(50) NOT NULL,
    "lat" INTEGER NOT NULL,
    "longi" INTEGER NOT NULL,
    "statUpdateDatetime" VARCHAR(50) NOT NULL,
    "kakaoAddress" JSONB,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
