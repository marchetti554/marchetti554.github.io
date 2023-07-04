// gitprofile.config.js

const config = {
  github: {
    username: 'marchetti554', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['dsiQuintaEntrega','react-js-blog','fiscal-nysman'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'marco-marchetti-371388140',
    stackoverflow: '9727284/marco-marchetti', // format: userid/username
    email: 'marchetti554@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1xETq6dL_xybV9Tq4ZNIK069AAjRySKmm/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Golang',
    'Java',
    'Rust',
    'Spring', 
    'Spring Boot',
    'Relational DB',
    'MySQL',
    'SQLServer',
    'Non-relational DB',
    'DynamoDB',
    'Redis',
    'Terraform',
    'AWS SNS',
    'AWS SQS',
    'AWS Lambda',
    'AWS Cloudwatch',
    'AWS ECS',
    'AWS S3',
    'Git',
    'Github Actions',
    'Docker',
    'Agile Methodologies',
  ],
  experiences: [
    {
      company: 'Monta',
      position: 'Software Engineer',
      from: 'June 2023',
      to: 'present',
      companyLink: 'https://www.monta.com/',
    },
    {
      company: 'Ualá',
      position: 'Software Engineer',
      from: 'November 2020',
      to: 'June 2023',
      companyLink: 'https://www.uala.com.ar/',
    },
    {
      company: 'Globant',
      position: 'Java Developer',
      from: 'March 2018',
      to: 'November 2020',
      companyLink: 'https://www.globant.com/',
    },
  ],
  education: [
    {
      institution: 'National Technological University - Argentina',
      degree: 'Information Systems Engineering',
      from: '2014',
      to: 'currently enrolled',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'business',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
