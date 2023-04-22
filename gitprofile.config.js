// gitprofile.config.js

const config = {
  github: {
    username: 'marchetti554', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'marco-marchetti',
    stackoverflow: '9727284/marco-marchetti', // format: userid/username
    email: 'marchetti554@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1xETq6dL_xybV9Tq4ZNIK069AAjRySKmm/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Golang',
    'Rust',
    'Java',
    'Spring/SpringBoot',
    'MySQL',
    'DynamoDB',
    'Redis',
    'Terraform',
    'AWS',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Ualá',
      position: 'Software Engineer',
      from: 'November 2020',
      to: 'Present',
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
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
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
