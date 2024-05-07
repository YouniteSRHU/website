import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';

import indexRouter from './routes/index.js';
import eventsRouter from './routes/events.js';
// import usersRouter from './routes/users.js';
import prisma from './DB/db.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// if (process.env.NODE_ENV !== "production") {
//   const envPath = path.resolve(__dirname, ".env");
//   config({ path: envPath });
// }

const app = express();
const port = 3000;


app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

async function createEvent() {
  const eventDatas = [
    {
      eventName: "Envisage",
      eventDesc: "Engage in stimulating debates, develop critical thinking skills, and broaden your understanding of global issues. Open to students from all backgrounds, this event promises to be a platform for meaningful dialogue and collaboration. Don't miss out on this opportunity to make your voice heard and shape the future!",
      registrationLink: "https://instagram.com/",
      brochureLink: "to bheri",
      collidingEvents: "Hackathon, Brainwave, Fish Tank",
      eventDate: "April 13th -15th, 2024",
      eventVenue: "B C Roy Auditorium, HIMS",
      eventMap: "http://google.com",
      eventContact: "+917302307099-Aditya, +917617645979 -  Anmol",
      festIdentifier: 'F',

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
          guideline: "Registrations will be done through a form which will be provided shortly."
        },
        {
          guideline: "Information about the event will be shared to the registered participants via a WhatsApp group "
        },
        {
          guideline: "The MUN will begin after the inaugural on Day 1 and continue till 6 in the evening. The participants are requested to manage their travel arrangements accordingly."
        },
        {
          guideline: "The MUN debates will be conducted on Day 1 & 2, day 3 will be observed for free speech and prize distribution."
        },
        {
          guideline: "Each participant is requested to choose and prepare as a delegate of a country from the designated list available during registration."
        },
      ],
      tcs: [
        {
          tc: "Registration fees is ₹250 per delegate. This registration fee is only for one event which is of three days. The registration fee is non-refundable."
        },
        {
          tc: "Every delegate must carry ID cards of their respective college / school for identification."
        },
        {
          tc: "The delegate country will not be changed later in any circumstances."
        },
        {
          tc: "Each delegate has to submit a position paper"
        },
        {
          tc: "Dress code: Western Formals"
        },
        {
          tc: "Language of Discussion: English"
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
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use('/', indexRouter);
app.use('/api/', eventsRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   res.send(404);
//   next();
// });

// error handler


