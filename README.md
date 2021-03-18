# gatsby shiny-folio ⚡️ 

## A clean, beautiful and responsive portfolio

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ One Page Layout built with React\
⚡️ Styled with Bootstrap v4.3 + Custom SCSS\
⚡️ Fully Responsive\
⚡️ Configurable color scheme\
⚡️ Image optimization with Gatsby\
⚡️ Easy site customization\
⚡️ Well organized documentation

---

### Hero Section

```javascript
export const heroData = {
  title: '', // Hello, my name is
  name: '', // John
  subtitle: '', // I'm the Unknown Developer.
  cta: '', // Know more
};
```

### About Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const aboutData = {
  img: 'profile.jpg', // put your profile image (recommended aspect radio: square)
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
```

### Projects Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

Put as many projects object you want inside the `array`.

```javascript
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  ...
];
```

### Contact Section

```javascript
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: '', // text inside the button
  email: '',
};
```

### Footer Section

You can remove or add as many you social-media icons you want.\
Just put an object with the corresponding values inside the networks `array` or remove it from there.

```javascript
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '', // your twitter url
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '', // your codepen url
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '', // your linkedin url
    },
    {
      id: nanoid(),
      name: 'github',
      url: '', // your github url
    },
  ],
};
```

### Required - Disable GitHub buttons

Set `isEnabled` to `false` once you finish setup your portfolio.\
By setting to `false` it will hide the GitHub stars/fork buttons

```javascript
export const githubButtons = {
  isEnabled: true, // true is the default value
};
```

### STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Default values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**_Note_**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY


## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language


## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
