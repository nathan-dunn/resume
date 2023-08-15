import { MdOutlinePhoneIphone, MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const data = {
  profile: {
    title: 'SENIOR SOFTWARE ENGINEER',
    name: 'NATHAN DUNN',
    photos: '',
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
      employer: 'Integrated Auction Solutions',
      jobTitle: 'Senior Frontend Engineer',
      dates: 'Nov 2018 - Present',
      projects: [
        {
          projectName: 'MARKETPLACE WEB',
          details: [
            'Project Description: The web version of our Marketplace product where wholesale auto dealers can buy and sell vehicles online',
            `Tech: React, Redux, Redux-Persist, React-Router, Elasticsearch, webpack, Bootstrap, Semantic-UI, Node.js, Express, REST, SignalR, Firebase, 
             GA4, Github Actions, Docker, Kubernetes, Google Cloud, AWS S3, AWS Fargate`,
            `Created and maintained individual Marketplace web apps for our 12+ customers`,
            `Implemented real-time bidding during live auctions using signalR`,
            `Significantly improved performance and initial load time by code splitting, reducing bundle size, and bringing codebase from circa 2016 to 2023`,
          ],
        },
        {
          projectName: 'MARKETPLACE MOBILE',
          details: [
            'Project Description: The mobile version of our Marketplace product',
            'Tech: iOS, Android, React-Native, Redux, React-Router-Native-Flux, Algolia, REST, SignalR, Firebase, GA4, Fastlane, Gradle, Expo',
            `Created and maintained individual iOS and Android apps for our 12+ customers with highly customizable configurations, logos, and colors, but sharing a common codebase`,
            `Incorporated our CORE product into Marketplace Mobile`,
            `Set up Fastlane for switching customer configurations, creating builds, and pushing betas`,
          ],
        },
        {
          projectName: 'CORE',
          details: [
            `Project Description: Originally a mobile app used to add inventory, photos, and vehicle condition reports -- 
            later the functionality was embedded into Marketplace Web and Marketplace Mobile`,
            `Tech: iOS, React-Native, Redux, React-Router-Native-Flux, REST, Fastlane`,
            'Batch photo uploads, interactive photo gallery (SpinCar, Black Widow), and AI condition reports (Ravin AI)',
          ],
        },
        {
          projectName: 'IAS CONNECT',
          details: [
            `Project Description: Custom authorization and authentication system for use with our Marketplace product`,
            `Tech: Nextjs, React, Redux, Redux-Persist, sass, styled-components, Semantic-UI, Node.js, Express, PostgreSQL, MSSQL, Keycloak, Twilio, REST, 
            JWTs, Github Actions, Docker, Kubernetes, Google Cloud, AWS Fargate`,
            `Worked with our dev ops engineer to switch our builds from Kubernetes and Google Cloud to AWS Fargate`,
          ],
        },
      ],
    },

    {
      employer: 'Moove-It',
      jobTitle: 'Fullstack Developer',
      dates: 'May 2018 - Aug 2018',
      projects: [
        {
          projectName: '',
          details: [
            'Paid internship at a software development company in Austin, TX',
            'Worked on developing an internal time tracking app used for managing hours spent on different client projects',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          ],
        },
      ],
    },
  ],
};

export default data;
