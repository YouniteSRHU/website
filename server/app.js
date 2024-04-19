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
    {
      eventName: "Fish Tank",
      eventDesc: "From Pitch to Rich! Welcoming all innovators/startups, stand a chance to win exciting prizes and also get help for incubation! Register now!",
      registrationLink: "https://instagram.com/",
      brochureLink: "arisnetrsie",
      collidingEvents: "Hackathon, Brainwave, Chitrakala",
      eventDate: "Tuesday, 14 May 2024",
      eventVenue: "Adi Kailash Auditorium",
      eventMap: "http://google.com",
      eventContact: "Ujjwal Tyagi - 7060563932, Deevanshu Bishriya - 8126243347",
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
          guideline: "Open for all students."
        },
        {
          guideline: "The color code associated with this event is Light Blue."
        },
        {
          guideline: "The plan to be presented is to be well detailed."
        },
        {
          guideline: "Prepare a concise presentation, not exceeding 10 minutes, followed by a 5-minute Q&A session with the judges."
        },
        {
          guideline: "If applicable, bring a prototype or demo to support your pitch. Virtual demonstrations are also appreciated."
        },
        {
          guideline: "Professionalism must be maintained while interacting with the judges and fellow participants."
        },
        {
          guideline: "The confidentiality of other participants' plans/ideas should be respected."
        },

      ],
      tcs: [
        {
          tc: "The event team is only concerned with providing directions, space and medium for presentation only."
        },
        {
          tc: "The descision made by the judges is final."
        },
        {
          tc: "We reserve the right to publish media content related to the event."
        },
        {
          tc: "The idea must not be duplicated i.e. should not violate any already existing abstract, paper, patent etc."
        },
      ]
    }
    //    {
    //      eventName: "Hackathon",
    //      eventDesc: "An event showcasing solution of real-world problems by students from all over the region. Requires understanding of Web Development, UI/UX Design, AI.",
    //      registrationLink: "https://instagram.com/",
    //      brochureLink: "to be added",
    //      collidingEvents: "Fish Tank, ESports, Open Mic",
    //      eventDate: "Monday, 13 May 2024 & Tuesday, 14 May 2024",
    //      eventVenue: "HSST Ground Floor Labs",
    //      eventMap: "http://google.com",
    //      eventContact: "Shivansh Kothari - 8755533876, Another contact - 9999999999",
    //      festIdentifier: 'F',
    //
    //      images: [
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //
    //      ],
    //      guidelines: [
    //        {
    //          guideline: "Total 16 hours of coding and collaboration."
    //        },
    //        {
    //          guideline: "Colour associated to this event is purple."
    //        },
    //        {
    //          guideline: "problem statement would be directed before the competition starts."
    //        },
    //        {
    //          guideline: "The codes presented by the teams must not be copied."
    //        },
    //        {
    //          guideline: "The decision of made by the organizers and the judges will be final"
    //        },
    //      ],
    //      tcs: [
    //        {
    //          tc: "Winner will be based on Pre-defined criteria."
    //        },
    //        {
    //          tc: "We deserve the right to prevent any team from participating at any time."
    //        },
    //        {
    //          tc: "Organizers have all the rights over the guidelines and can alter them as per need."
    //        },
    //        {
    //          tc: "Any foul practice or misbehaviour of any kind may lead to disqualification of the team "
    //        },
    //        {
    //          tc: "Team leader will be held responsible for the act of the team members"
    //        },
    //      ]
    //    },   
    //    {
    //      eventName: "RANBHOOMI",
    //      eventDesc: " Welcome to our Swami Rama Himalyan University's Mobile Gaming Event! Get ready to dive into a world where excitement never stops and champions are made . Join us for thrilling battles, intense competition, and endless fun as we celebrate the best in mobile gaming.",
    //      registrationLink: "https://instagram.com/",
    //      brochureLink: "to be decided",
    //      collidingEvents: ", Hackathon , ESPORTS",
    //      eventDate: "Tuesday,14 May 2024",
    //      eventVenue: "HSST building third floor",
    //      eventMap: "http://google.com",
    //      eventContact: "Tanmay Madan - 9084147463, Sarthak Painuly- 9027695807",
    //      festIdentifier: 'F',
    //
    //      images: [
    //      {
    //        image_src: ""
    //      },
    //      {
    //        image_src: ""
    //      },
    //      {
    //        image_src: ""
    //      },
    //    ],
    //
    //      guidelines: [
    //        {
    //          guideline: "Registrations will be done through a google form which will be provided shortly."
    //        },
    //        {
    //          guideline: "Information about the event will be shared to the registered participants via a WhatsApp group."
    //        },
    //        {
    //          guideline: "Any registrations after the due date will be fined accordingly."
    //        },
    //        {
    //          guideline: "Only students currently studying in participating colleges can enroll."
    //        },
    //        {
    //          guideline: "Match duration will be upto 30 minutes per match (full map). Only mobile phones are allowed."
    //        },
    //      ],
    //      tcs: [
    //        {
    //          tc: "Registration fees is ₹400 per team. This registration fee is only for one event."
    //        },
    //        {
    //          tc: "To register for other events, you must pay  per person per game. The registration fee is non-refundable."
    //        },
    //        {
    //          tc: "Team members must carry ID cards for identification."
    //        },
    //        {
    //          tc: "The team will not be changed later  in any circumstances i.e. addition/change of team members is not supported."
    //        },
    //      ]
    //    },
    //    {
    //      eventName: "Tech Quiz",
    //      eventDesc: "A tech quiz tests your knowledge of computer science, programming, gadgets, and emerging tech in a fun and competitive setting. From basic concepts to cutting-edge innovations, it's a chance to challenge yourself and stay updated in the ever-evolving world of technology.",
    //      registrationLink: "https://instagram.com/",
    //      brochureLink: "to be done",
    //      collidingEvents: "None",
    //      eventDate: "Monday, 13 May 2024",
    //      eventVenue: "HSST Auditorium",
    //      eventMap: "http://google.com",
    //      eventContact: "Rohit Gautam - 9761692536, Another contact - 9999999999",
    //      festIdentifier: 'F',
    //
    //      images: [
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //      ],
    //      guidelines: [
    //        {
    //          guideline: "Tech Requirements: Participants should ensure they have access to a stable internet connection and a compatible device with a web browser to participate in the quiz."
    //        },
    //        {
    //          guideline: "Fair Play: Encourage fair play and sportsmanship among participants, refraining from cheating or attempting to gain an unfair advantage."
    //        },
    //        {
    //          guideline: "Respectful Behavior: Treat each other, organizers, and staff with respect and courtesy at all times, refraining from using offensive language or behavior."
    //        },
    //        {
    //          guideline: "Feedback: We value your feedback on the quiz experience, including suggestions for improvement, to help us enhance future events.4"
    //        },
    //        {
    //          guideline: "Technical Support: Resources or assistance for participants encountering technical difficulties during the quiz are available. Please refer to our troubleshooting guides or contact our helpdesk for assistance."
    //        },
    //
    //        {
    //          guideline: "Enjoyment: Have fun and enjoy the quiz experience, regardless of the outcome. Celebrate your knowledge and achievements!"
    //        },
    //      ],
    //      tcs: [
    //        {
    //          tc: "Participant Eligibility: By participating in our tech quiz, you agree to meet any specified eligibility criteria, such as age or affiliation with a particular organization or institution."
    //        },
    //        {
    //          tc: "Registration: Participants may be required to register or sign up for the quiz using their valid email addresses or other identifying information."
    //        },
    //        {
    //          tc: "Fair Play: Participants must agree to abide by the rules of the quiz and refrain from any form of cheating, including using unauthorized materials or assistance during the quiz."
    //        },
    //        {
    //          tc: "Liability: We are not responsible for any technical issues, disruptions, or other problems that may affect a participant's ability to participate in the quiz."
    //        },
    //        {
    //          tc: "Termination: We reserve the right to terminate or suspend the quiz at any time, for any reason, without prior notice."
    //        },
    //
    //      ]
    //    },
    //
    //    {
    //      eventName: "Brainwave",
    //      eventDesc: "An event to engage the guest schools into a fascinating fun session to create an engaging fun environment for the participants.",
    //      registrationLink: "https://instagram.com/",
    //      brochureLink: "to be decided",
    //      collidingEvents: "Fish tank, Freestyle art",
    //      eventDate: "Tuesday, 14 May 2024",
    //      eventVenue: "HSST auditorium",
    //      eventMap: "http://google.com",
    //      eventContact: "Pranchal talwar- 9319113558, Another contact - 8368500959",
    //      festIdentifier: 'F',
    //      images: [
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //      ],
    //      guidelines: [
    //        {
    //          guideline: "Participants must register themselves through the Google form provided to them."
    //        },
    //        {
    //          guideline: "Participants will be given an online pin to enter the quiz"
    //        },
    //        {
    //          guideline: "Questions will be related to entertainment and general knowledge. And might be in the form of MCQ, true/false etc "
    //        },
    //        {
    //          guideline: "Participants will be given 45 seconds to answer each question."
    //        },
    //        {
    //          guideline: "Participants will be felicitated with certificates at the end of the quiz."
    //        },
    //      ],
    //      tcs: [
    //        {
    //          tc: "This event is exclusively for school students"
    //        },
    //        {
    //          tc: "No group participation is allowed."
    //        },
    //        {
    //          tc: "Bringing mobile phones is compulsory for students who wish to participate in this quiz."
    //        },
    //        {
    //          tc: "Participants engaging in foul practices will be disqualified from the game."
    //        },
    //      ]
    //    },
    //    {
    //      eventName: "Open Stage",
    //      eventDesc: " Join us for an evening of poetry, music, shayari, freestyle dance and much more, UI/UX Design, AI.",
    //      registrationLink: "https://instagram.com/",
    //      collidingEvents: "Hackathon, Esports",
    //      brochureLink: "to be driseenteir",
    //      eventDate: "Monday, 13 May 2024 & Tuesday, 14 May 2024",
    //      eventVenue: "HSMS Parking",
    //      eventMap: "http://google.com",
    //      eventContact: "Aman Nautiyal, Mohit Yadav - 8077025407,7505245887, Another contact - 8126243347",
    //      festIdentifier: 'B',
    //      images: [
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //        {
    //          image_src: ""
    //        },
    //      ],     
    //      guidelines: [
    //        {
    //          guideline: "Keep content appropriate and inclusive"
    //        },
    //        {
    //          guideline: "Maintain audience etiquette"
    //        },
    //        {
    //          guideline: "Offer constructive feedback respectfully"
    //        },
    //        {
    //          guideline: "No alcohol or substance use."
    //        },
    //        {
    //          guideline: "In case of any queries, participants are encouraged to contact the team"
    //        },
    //      ],
    //      tcs: [
    //        {
    //          tc: "Event organizers have final say"
    //        },
    //        {
    //          tc: "Organisers has the rights over the guidelines and can alter them as per the requirements"
    //        },
    //        {
    //          tc: "Rules may change without prior notice."
    //        },
    //        {
    //          tc: "Latest information will always be updated on the website."
    //              },
    //          ]
    //        }

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
