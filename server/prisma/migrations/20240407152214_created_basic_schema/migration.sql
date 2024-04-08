-- CreateTable
CREATE TABLE "Fest" (
    "fest_id" SERIAL NOT NULL,
    "fest_name" TEXT NOT NULL,
    "fest_desc" TEXT NOT NULL,
    "fest_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fest_pkey" PRIMARY KEY ("fest_id")
);

-- CreateTable
CREATE TABLE "Event" (
    "event_id" SERIAL NOT NULL,
    "festId" INTEGER,
    "event_name" TEXT NOT NULL,
    "event_desc" TEXT,
    "registration_link" TEXT,
    "colliding_events" TEXT,
    "event_datetime" TEXT,
    "event_venue" TEXT,
    "event_map" TEXT,
    "fest_identifier" CHAR(1),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" SERIAL NOT NULL,
    "image_src" TEXT NOT NULL,
    "eventId" INTEGER NOT NULL,
    "festId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "EventGuideline" (
    "guideline_id" SERIAL NOT NULL,
    "guideline" TEXT NOT NULL,
    "eventId" INTEGER,

    CONSTRAINT "EventGuideline_pkey" PRIMARY KEY ("guideline_id")
);

-- CreateTable
CREATE TABLE "EventTC" (
    "tc_id" SERIAL NOT NULL,
    "tc_src" TEXT NOT NULL,
    "eventId" INTEGER,

    CONSTRAINT "EventTC_pkey" PRIMARY KEY ("tc_id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "participant_id" SERIAL NOT NULL,
    "participant_name" TEXT NOT NULL,
    "organisation_name" TEXT,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isVolunteer" BOOLEAN NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("participant_id")
);

-- CreateTable
CREATE TABLE "_EventToParticipant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToParticipant_AB_unique" ON "_EventToParticipant"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToParticipant_B_index" ON "_EventToParticipant"("B");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_festId_fkey" FOREIGN KEY ("festId") REFERENCES "Fest"("fest_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("event_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_festId_fkey" FOREIGN KEY ("festId") REFERENCES "Fest"("fest_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventGuideline" ADD CONSTRAINT "EventGuideline_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("event_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTC" ADD CONSTRAINT "EventTC_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("event_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToParticipant" ADD CONSTRAINT "_EventToParticipant_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("event_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToParticipant" ADD CONSTRAINT "_EventToParticipant_B_fkey" FOREIGN KEY ("B") REFERENCES "Participant"("participant_id") ON DELETE CASCADE ON UPDATE CASCADE;
