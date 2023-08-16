import { MdOutlinePhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// measurements
const mobile = 768;
const pageWidth = 738;
const minPageWidth = 390;
const pageSplit = '31%';

// colors
const chakraBlueGray = '#2B3549';
const dark = '#333';
const light = '#F0F0F0';

const tc1 = '#cc917c';
const tc2 = '#3B4358';
const bg1 = '#FFF';
const bg2 = '#DFE0E0';
const fc1 = '#333';
const fc2 = tc1;

// fonts
const ff1 = `'Montserrat', sans-serif`;
const ff2 = `'Nunito', sans-serif`;
const fs1 = 11;
const fs2 = 14;

export const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: true },
  settings: { pageWidth, minPageWidth, pageSplit, mobile },
  colors: { chakraBlueGray, light, dark, tc1, tc2, bg1, bg2, fc1, fc2 },
  fonts: { ff1, ff2, fs1, fs2 },
  breakpoints: { sm: '320px', md: '768px', lg: '960px', xl: '1200px', '2xl': '1536px' },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode(light, dark)(props), // light mode, dark mode
        color: mode(dark, light)(props), // light mode, dark mode
      },
    }),
  },
});

export const data = {
  profile: {
    title: 'SENIOR SOFTWARE ENGINEER',
    name: 'NATHAN DUNN',
    photoFile: 'profile.png',
  },
  contacts: [
    {
      icon: <MdLocationOn />,
      text: `Weatherford, Texas`,
    },
    {
      icon: <MdOutlinePhoneIphone />,
      text: `(562) 234-2532`,
    },
    {
      icon: <MdEmail />,
      text: `nathan.dunn.aml@gmail.com`,
      link: `mailto:nathan.dunn.aml@gmail.com`,
    },
    {
      icon: <AiFillLinkedin />,
      text: `linkedin.com/in/nathan-dunn-aml`,
      link: `https://linkedin.com/in/nathan-dunn-aml`,
    },
    // {
    //   icon: <AiFillGithub />,
    //   text: `github.com/nathan-dunn`,
    //   link: `https://github.com/nathan-dunn`,
    // },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'Next.js',
    'HTML',
    'CSS/Sass',
    'Jest',
    'Elasticsearch',
    'Algolia',
    'XCode / Android Studio',

    'iOS / Android',
    'Node.js',
    'Express',
    `MSSQL / PostgreSQL`,
    'MongoDb',
    'REST',
    'SignalR',
    'Docker',
    'AWS',
    'Git / Git Hub',
  ],
  education: [
    'Hack Reactor Software Engineering Bootcamp, Los Angeles 2017',
    'CSU Long Beach - M.S. Kinesiology',
    'CSU Long Beach - B.S. Kinesiology',
  ],

  personal: [
    `I learned to code in 2015 while recovering from a work-related injury,
    and in 2017 I left my job as a Police Officer to pursue my new career.`,

    `My professional experience has been mostly frontend development, however, I really enjoy working both sides of the stack.
    I get a great amount of satisfaction out of what some call the daily grind. 💻  + ☕ = 🤩`,

    `I live outside Fort Worth, TX with my wife, three young children, and our German Shepherd, Luna. 
    When I'm not spending time with my family I enjoy reading, working out, and traveling.`,
  ],

  experience: [
    {
      project: 'MARKETPLACE WEB',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      overview: `Our Marketplace product is where wholesale auto dealers can buy and sell vehicles online. 
      As leader developer since 2022 I created and maintained individual Marketplace web apps for our 12+ customers, was responsible for all bug fixes & features including
      implementing real-time bidding during live auctions, 
      significantly improving performance and initial load time by code splitting, reducing bundle size, and bringing codebase from circa 2016 to 2023.`,
      tech: `React, Redux, Redux-Persist, React-Router, Elasticsearch, webpack, Bootstrap, Semantic-UI, Node.js, Express, REST, SignalR, Firebase, 
      GA4, Github Actions, Docker, Kubernetes, Google Cloud, AWS S3, AWS Fargate`,
    },
    {
      project: 'MARKETPLACE MOBILE',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      overview: `Our Marketplace product is where wholesale auto dealers can buy and sell vehicles online. 
      As leader developer since 2022 I created and maintained individual iOS and Android apps for our 12+ customers, was responsible for all bug fixes & features including
      incorporated our CORE product into Marketplace Mobile, and setting up Fastlane for switching customer configurations, creating builds, and pushing betas`,
      tech: 'iOS, Android, React-Native, Redux, React-Router-Native-Flux, Algolia, REST, SignalR, Firebase, GA4, Fastlane, Gradle, Expo',
    },
    {
      project: 'CORE',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      overview: `CoRe was originally a mobile only app used to add inventory, photos, and vehicle condition reports but  
      later incorporated into our Marketplace Web and Marketplace Mobile projects. 
      As lead developer since 2022 I was responsible for for all bug fixes & features including 
      batch photo uploads, an interactive photo gallery (SpinCar, Black Widow), and incorporating third-party AI condition reports`,
      tech: 'iOS, React-Native, Redux, React-Router-Native-Flux, REST, Fastlane',
    },
    {
      project: 'IAS CONNECT',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      overview: `IAS Connect is our custom authorization and authentication system for our Marketplace product.
        As lead developer since 2022 I was responsible for for all bug fixes & features including 
        a joint task with our dev ops engineer to migrate our builds from Kubernetes and Google Cloud to AWS Fargate
        `,
      tech: `Nextjs, React, Redux, Redux-Persist, Sass, Semantic-UI, Node.js, Express, PostgreSQL, MSSQL, Keycloak, Twilio, REST, 
      JWTs, Github Actions, Docker, Kubernetes, Google Cloud, AWS Fargate`,
    },

    {
      project: 'TIEMPO',
      employer: 'Moove-It',
      title: 'Fullstack Developer',
      dates: 'May 2018 - Aug 2018',
      tech: 'React, Redux, React-Router, Passport, Jest, Enzyme, Tachyons, Node.js, Express, MongoDB, Mongoose, ',
      overview: `This was a paid internship at a software development company in Austin, TX. 
      I worked on an internal time-tracking app used for managing hours spent on client projects `,
    },
  ],
};
