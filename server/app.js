import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';

import eventsRouter from './routes/events.js';
// import usersRouter from './routes/users.js';
import prisma from './DB/db.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV !== "production") {
  const envPath = path.resolve(__dirname, ".env");
  config({ path: envPath });
}

const app = express();
const port = 3000;


app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

async function createEvent() {
  const eventDatas = [
    {
      eventName: "Chitrakala",
      eventDesc: "Chitrakala: Where Young Minds Paint Dreams - From vibrant colors to imaginative strokes, let your artwork speak volumes.Join us in celebrating the spirit of artistic expression and ignite the world with your unique vision.",
      registrationLink: "https://instagram.com/",
      brochureLink: "to bheri",
      collidingEvents: "Hackathon, Brainwave, Fish Tank",
      eventDate: "Tuesday, 14 May 2024",
      eventVenue: "Bioscience Building",
      eventMap: "http://google.com",
      eventContact: "Yashwani Yadav - 6397446249, Another contact - 8126243347 ",
      festIdentifier: 'B',

      images: [
        {
          image_src: ""
        },

        {
          image_src: ""
        },
        {
          image_src: ""
        }
      ],
      guidelines: [
        {
          guideline: "Participation cab be solo and duo."
        },
        {
          guideline: "Open to all student with a valid School ID."
        },
        {
          guideline: "Participants must bring their own art supplies,including pencils, paints and brushes."
        },
        {
          guideline: "A4 sheets will be available for all participation."
        },
        {
          guideline: "Winner will be selected based on judges."
        },
      ],
      tcs: [
        {
          tc: "Content must be respectfull and free from offensive material."
        },
        {
          tc: "Maintain a positive and supportive atmosphere."
        },
        {
          tc: "Submission must be received by the specificed deadline; late entries will not be considred."
        },
        {
          tc: "Judging will be based on creativity, originality, techniques and adherence to any specified theme."
        },
      ]
    },

  ]
  eventDatas.forEach(async eventData => {


    const event = await prisma.event.create({
      data: {
        fest: {
          connect: {
            fest_id: 1
          }
        },
        event_name: eventData.eventName,
        event_desc: eventData.eventDesc,
        registration_link: eventData.registrationLink,
        colliding_events: eventData.collidingEvents,
        event_datetime: eventData.eventDate,
        event_venue: eventData.eventVenue,
        brochure_link: eventData.brochureLink,
        event_map: eventData.eventMap,
        contact_details: eventData.eventContact,
        fest_identifier: eventData.festIdentifier,

        images: {
          create: eventData.images
        },
        participants: {
          create: eventData.participants
        },
        guidelines: {
          create: eventData.guidelines
        },
        tc: {
          create: eventData.tcs
        }
      }
    });
    console.log(event);
  });

}
// createEvent();

async function fetchEvents() {
  console.log(await prisma.event.findMany({
    include: {
      fest: true,
      participants: true,
      guidelines: true,
      tc: true,


    }
  }))
}

async function insertImages() {

  await prisma.image.updateMany({
    data: {
      image_src: "https://hjkolaoavfpnlclfiems.supabase.co/storage/v1/object/public/website/fest/1/images.jpeg"
    }
  })

}

// insertImages();
// createEvent();
// fetchEvents();

app.use('/api/', eventsRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.send(404);
  next();
});

// error handler

app.listen(port, () => console.log(`Listening on port ${port}`));
