import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {config} from 'dotenv';
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


app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

async function createEvent() {
  const eventData = {
    eventName: "Hackathon",
    eventDesc: "An event showcasing solution of real-world problems by students from all over the region. Requires understanding of Web Development, UI/UX Design, AI.",
    registrationLink: "https://instagram.com/",
    collidingEvents: "Fish Tank, ESports, Open Mic",
    eventDate: "Monday, 13 May 2024 & Tuesday, 14 May 2024",
    eventVenue: "HSST Ground Floor Labs",
    eventMap: "http://google.com",
    festIdentifier: 'F',
    participants: [
      {
      participant_name: "Random Name",
      organisation_name: "XYZ Organisation",
      mobile: "9898989898",
      email: "example@gmail.com",
      isVolunteer: false
    },
      {
      participant_name: "Random Name2",
      organisation_name: "XYZ2 Organisation",
      mobile: "9898989899",
      email: "example2@gmail.com",
      isVolunteer: true
    },
  ],
  guidelines: [
    {
      guideline: "Guideline 1"
    },
    {
      guideline: "Guideline 2"
    },
    {
      guideline: "Guideline 3"
    },
    {
      guideline: "Guideline 4"
    },
    {
      guideline: "Guideline 5"
    },
  ],
  tcs: [
    {
      tc: "Term 1"
    },
    {
      tc: "Term 2"
    },
    {
      tc: "Term 3"
    },
    {
      tc: "Term 4"
    },
  ]
  }
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
      event_map: eventData.eventMap,
      fest_identifier: eventData.festIdentifier,

      participants: {
        create: eventData.participants
      },
      guidelines: {
        create: eventData.guidelines
      },
      tc: {
        create: eventData.tcs
      }
      // participants: {
      //   create: eventData.participants.map((participant) => {
          
      //     participant_name: participant.participant_name;
      //     organisation_name: participant.organisation_name;
      //     mobile: participant.mobile;
      //     email: participant.email;
      //     isVolunteer: true;
      //   })
      // },
      // guidelines: {
      //   create: eventData.guidelines.map((guideline) => {
      //     guideline: guideline.guideline;
      //   })
      // },
      // tc: {
      //   create: eventData.tcs.map((tc) => {
      //     tc: tc.tc;
      //   })
      // }
    }
  });
  console.log(event);
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
// createEvent();
// fetchEvents();

app.use('/api/', eventsRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
