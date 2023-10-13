import {
  MdOutlinePhoneIphone,
  MdEmail,
  MdLocationOn,
  MdLaptopMac,
} from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { extendTheme } from '@chakra-ui/react';
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools';

// measurements
const maxPageWidth = 738;
const minPageWidth = 390;
const mobileThreshold = 768;
const tabletThreshold = 412;
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
  settings: {
    maxPageWidth,
    minPageWidth,
    pageSplit,
    mobileThreshold,
    tabletThreshold,
  },
  colors: { chakraBlueGray, light, dark, tc1, tc2, bg1, bg2, fc1, fc2 },
  fonts: { ff1, ff2, fs1, fs2 },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode(light, dark)(props), // light mode, dark mode
        color: mode(dark, light)(props), // light mode, dark mode
      },
    }),
  },
});

export interface Contact {
  icon: JSX.Element;
  text: string;
  link?: string;
}

interface ProjectDetail {
  name: string;
  role: string;
  tech: string;
  details: string[];
}

interface Data {
  profile: {
    title: string;
    name: string;
    photoFile: string;
  };
  contacts: Contact[];
  skills: string[];
  education: string[];
  personal: string[];
  experience: {
    employer: string;
    dates: string;
    title: string;
    projects: ProjectDetail[];
  }[];
}

export const data: Data = {
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
    // {
    //   icon: <MdOutlinePhoneIphone />,
    //   text: `(562) 234-2532`,
    // },
    {
      icon: <MdLaptopMac />,
      text: `nathan-dunn.surge.sh`,
      link: `https://nathan-dunn.surge.sh/`,
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
    'HTML5',
    'CSS/Sass',
    'Elasticsearch',
    'Algolia',
    'Xcode',
    'Android Studio',
    'iOS / Android',

    'Node.js',
    `PostgreSQL / MSSQL`,
    'MongoDB',
    'REST',
    'Firebase + GA4',
    'SignalR',
    'Docker',
    'Google Cloud',
    'Amazon AWS',
    'Git / Git Hub',
    'Jira / Monday',
  ],
  education: [
    'Hack Reactor Software Engineering Bootcamp, Los Angeles',
    'CSU Long Beach - M.S. Kinesiology',
    'CSU Long Beach - B.S. Kinesiology',
  ],
  personal: [
    `My professional experience has been mostly frontend development, however, I really enjoy working both sides of the stack.
    I get a great amount of satisfaction out of what some call the daily grind  💻  + ☕ = 🤩`,

    `I always have a personal code project going and my free time is spent with my family, reading, working out, or taking online coding courses.`,

    `I live outside Fort Worth with my wife, three young children, and our German Shepherd, Luna.`,
  ],
  experience: [
    {
      employer: 'Integrated Auction Solutions',
      dates: 'Nov 2018 - Present',
      title: 'Senior Frontend Engineer',
      projects: [
        {
          name: 'MARKETPLACE MOBILE',
          role: 'Lead Developer',
          tech: 'iOS, Android, React-Native, Redux, React-Router-Native-Flux, Algolia, REST, SignalR, Firebase, GA4, Fastlane, Gradle, Expo',
          details: [
            `Online Marketplace / Auction mobile apps for wholesale auto dealers`,
            `Multi-tenant React Native application for iOS and Android`,
            `Used Algolia and InstantSearch for searching inventory with dynamic indexes`,
            `SignalR + REST for realtime bidding and buying + live video streaming`,
            `Setup Firebase with Google Analytics and Messaging`,
            `Recently implemented Fastlane for switching customer configurations and pipeline for app deployments`,
          ],
        },
        {
          name: 'MARKETPLACE WEB',
          role: 'Lead Developer',
          tech: `React, Redux, Redux-Persist, React-Router, Elasticsearch, webpack, Bootstrap, Semantic-UI, Node.js, Express, REST, SignalR, Firebase, GA4, Github Actions, Docker, Kubernetes, Google Cloud, AWS S3, AWS Fargate`,
          details: [
            `Online Marketplace / Auction sites for wholesale auto dealers`,
            `Multi-tenant React application for web using Redux, webpack, Semantic-UI, node.js + Express`,
            `Used Elasticsearch and Searchkit for searching inventory with dynamic indexes`,
            `Built and deployed using GitHub Actions, Docker, and AWS Fargate (previously Kubernetes and Google Cloud)`,
            `Recently improved load times by reducing bundle size 40%, code splitting, and bringing codebase from 2016 to 2023`,
          ],
        },
        {
          name: 'CORE MOBILE',
          role: 'Lead Developer',
          tech: 'iOS, React-Native, Redux, React-Router-Native-Flux, REST, Fastlane',
          details: [
            `React native iOS app used to add vehicle inventory and condition reports`,
            `Helped bring all functionality into Marketplace Web and Marketplace Mobile projects`,
            `Engineered method of batch uploading photos to server`,
            `Integrated third-party AI condition reports`,
            `Recently rebuilt a custom camera view using Expo`,
          ],
        },
        {
          name: 'IAS CONNECT',
          role: 'Lead Developer',
          tech: `Nextjs, React, Redux, Redux-Persist, Sass, Semantic-UI, Node.js, Express, PostgreSQL, MSSQL, Keycloak, Twilio, REST, JWTs, Github Actions, Docker, Kubernetes, Google Cloud, AWS Fargate`,
          details: [
            `Custom authentication / authorization system for Marketplace projects`,
            `Server-side web app built with a Next.js + React frontend and a Node.js + Express server`,
            `Recently implemented custom pool manager to more efficiently connect to Postgres and MSSQL databases and fix memory leak`,
            `Built and deployed using GitHub Actions, Docker, and AWS Fargate`,
          ],
        },
      ],
    },
    {
      employer: 'Moove-It',
      title: 'Fullstack Developer',
      dates: 'May 2018 - Aug 2018',
      projects: [
        {
          name: 'TIEMPO',
          role: 'Intern',
          tech: 'React, Redux, React-Router, Passport, Jest, Enzyme, Tachyons, Node.js, Express, MongoDB, Mongoose',
          details: [
            `Paid internship at a software development company in Austin, TX`,
            `Bootstrapped an internal time-tracking app used for managing hours spent on client projects`,
          ],
        },
      ],
    },
    // {
    //   employer: 'Long Beach Police Department',
    //   title: 'Police Officer',
    //   dates: 'Jun 2004 - Mar 2017',
    //   details: [`Medically retired in 2017`],
    // },
  ],
};
