import { MdOutlinePhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// measurements
const mobile = 768;
const pageWidth = 738;
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
  settings: { pageWidth, pageSplit, mobile },
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
    {
      icon: <AiFillGithub />,
      text: `github.com/nathan-dunn`,
      link: `https://github.com/nathan-dunn`,
    },
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
    ' CSU Long Beach - M.S. Kinesiology',
    ' CSU Long Beach - B.S. Kinesiology',
  ],

  personal: [
    'I live outside Fort Worth with my wife, three young children, and our German Shepherd.',
    "When I'm not spending time with my family I enjoy reading, working out, and traveling.",
    'I was a Police Officer for 13 years before making a career change in 2017.',
  ],
  experience: [
    {
      project: 'MARKETPLACE WEB',
      description:
        ' The web version of our Marketplace product where wholesale auto dealers can buy and sell vehicles online',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      tech: `React, Redux, Redux-Persist, React-Router, Elasticsearch, webpack, Bootstrap, Semantic-UI, Node.js, Express, REST, SignalR, Firebase, 
      GA4, Github Actions, Docker, Kubernetes, Google Cloud, AWS S3, AWS Fargate`,
      highlights: [
        `Created and maintained individual Marketplace web apps for our 12+ customers`,
        `Implemented real-time bidding during live auctions using signalR`,
        `Significantly improved performance and initial load time by code splitting, reducing bundle size, and bringing codebase from circa 2016 to 2023`,
      ],
    },
    {
      project: 'MARKETPLACE MOBILE',
      description: 'The mobile version of our Marketplace product',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      tech: 'iOS, Android, React-Native, Redux, React-Router-Native-Flux, Algolia, REST, SignalR, Firebase, GA4, Fastlane, Gradle, Expo',
      highlights: [
        `Created and maintained individual iOS and Android apps for our 12+ customers with highly customizable configurations, logos, and colors, but sharing a common codebase`,
        `Incorporated our CORE product into Marketplace Mobile`,
        `Set up Fastlane for switching customer configurations, creating builds, and pushing betas`,
      ],
    },
    {
      project: 'CORE',
      description: `Originally a mobile app used to add inventory, photos, and vehicle condition reports -- 
      later the functionality was embedded into Marketplace Web and Marketplace Mobile`,
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      tech: 'iOS, React-Native, Redux, React-Router-Native-Flux, REST, Fastlane',
      highlights: [
        'Batch photo uploads, interactive photo gallery (SpinCar, Black Widow), and AI condition reports (Ravin AI)',
      ],
    },
    {
      project: 'IAS CONNECT',
      description:
        'Custom authorization and authentication system for use with our Marketplace product',
      employer: 'Integrated Auction Solutions',
      title: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      tech: `Nextjs, React, Redux, Redux-Persist, Sass, Semantic-UI, Node.js, Express, PostgreSQL, MSSQL, Keycloak, Twilio, REST, 
      JWTs, Github Actions, Docker, Kubernetes, Google Cloud, AWS Fargate`,
      highlights: [
        `Worked with our dev ops engineer to switch our builds from Kubernetes and Google Cloud to AWS Fargate`,
      ],
    },

    {
      project: 'TIEMPO',
      tech: 'React, Redux, React-Router, Passport, Jest, Enzyme, Tachyons, Node.js, Express, MongoDB, Mongoose, ',
      description: 'Paid internship at a software development company in Austin, TX',
      employer: 'Moove-It',
      title: 'Fullstack Developer',
      dates: 'May 2018 - Aug 2018',
      highlights: [
        'Worked on developing an internal time tracking app used for managing hours spent on different client projects',
      ],
    },
  ],
};
