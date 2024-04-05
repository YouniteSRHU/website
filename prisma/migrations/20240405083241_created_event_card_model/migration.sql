-- CreateTable
CREATE TABLE "EventCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "desc" TEXT,
    "eventURL" TEXT,
    "urlImage" TEXT,

    CONSTRAINT "EventCard_pkey" PRIMARY KEY ("id")
);
