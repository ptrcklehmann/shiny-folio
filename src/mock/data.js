import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Patrick Lehmann | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Patrick Lehmann',
  subtitle: `I'm a Full Stack Developer ready to join your team.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'snapshot.jpg',
  paragraphOne: 'Solution-driven Full Stack Developer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction. Proven experience developing consumer-focused websites using HTML, CSS, React.js and JavaScript. Built products for desktop and mobile app users over 2+ years, meeting highest standards for web design, user experience, best practices and speed. Designed and developed web applications across multiple APIs, third-party integrations and databases.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/ptrcklehmann/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAzU7_4BidFY8RQlzjpHtFROQ-5C4LBXNII,1635451630893)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ORA-ARTS.png',
    title: 'ORA ARTS prototype',
    info: 'ORA in the only platform connecting artists, curators, institutions, galleries and collectors around a cooperative system.',
    info2: 'Built with Reaact.js, Node.js, Express.js, MongoDB',
    url: 'https://ora-art-prototype.herokuapp.com/',
    repo: 'https://github.com/ORA-Arts/ora-prototype', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lavva.png',
    title: 'LAVVA',
    info: 'Relaxing in-browser Javascript game using canvas html element and DOM manipulation',
    info2: '',
    url: 'https://ptrcklehmann.github.io/lavva/',
    repo: 'https://github.com/ptrcklehmann/lavva', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ptrcklehmann@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/ptrcklehmann',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ptrcklehmann',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ptrcklehmann',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
