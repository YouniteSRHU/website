-- CreateTable
CREATE TABLE "News" (
    "news_id" SERIAL NOT NULL,
    "news_heading" TEXT,
    "news_text" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("news_id")
);
