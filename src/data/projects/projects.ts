import typingapp from '../../assets/projects/typingapp.png'
import cards from '../../assets/projects/cards.png'
import todolist from '../../assets/projects/todolist.png'
import socialnetwork from '../../assets/projects/socialnetwork.png'
import { StackTitle } from "../stack/stack";

export type ProjectType = {
  id: string
  title: string
  projectType: string
  projectStack: StackTitle[]
  goals: string
  stack: string
  problems: string
  final: string
  githubLink: string
  deployLink: string
  coverLogo: string
  descriptionShort: string
  descriptionLong: string
  color: string
}

export const projects: ProjectType[] = [
  {
    id: '1',
    title: 'Cards',
    projectType: 'Commercial Project',
    goals:
      'This project was created in a team as a commercial one. The work plan included:\n 1. Development of a full cycle of authentication, account creation, password recovery through a mail token and login. \n 2. Development of an interface for tables of cards, decks and users with search, sorting and pagination.\n 3. Development of the process of learning cards according to the principle of spaced repetition. \n 4. Development of modal windows, with support for adding images. And many other related tasks.',
    stack:
      'To manage the state of the application, the redux toolkit was used as the most modern solution with great DX. React tables were used to render tables as one of the most advanced lightweight solutions. For UI library, we used Material UI, to get the application development started faster. Also, for processing forms, we used the react hook form as the most modern and performant. To improve the user experience, a framer motion was also added to the application.',
    problems:
      'The most difficult part of the project was working with the correct URI parameters, synchronizing it with the table control block and minimizing the number of requests to the backend. Experience was gained in structuring a complex application, with a large number of pages, states, and components. It was also necessary to distribute tasks in the team, monitor their status and implement the developed features.',
    final:
      'This project has taught me how to work in a team and be responsible for carry out the development process. Using libraries new to me during product development showed the importance of doing research before estimating.\n I learned a lot about code structure and organization, many hours were spent on refactoring & reorganization. The front end of the application is ready to use, has nice UI and animations, and the interface encourages user to explore the cards library of other users.',
    githubLink: 'https://github.com/dspopravko/friday-project',
    deployLink: 'https://cards-lovat-eight.vercel.app/',
    coverLogo: cards,
    projectStack: ['React', 'Redux Toolkit', 'React-tables', 'Material UI', 'Framer Motion', 'React-hook-form'],
    descriptionShort:
      'Cards is full-fledged frontend app, developed in a team, with full authentication cycle. Cards use spaced repetition technique for you to quickly memorize things.',
    descriptionLong:
      'Cards is full-fledged frontend app, developed in a team, with full authentication cycle. Cards use spaced repetition technique for you to quickly memorize things. In the app, you can create packs of cards, fill them with cards with text or pictures, learn them, as well as search and study packs of other users.',
    color: '#219ebc',
  },
  {
    id: '2',
    title: 'Todolist',
    projectType: 'Learning Project',
    goals:
      'The project was created to explore modern stack for writing SPA applications. The goals included writing state management from classic redux to redux toolkit using unit tests, connecting a storybook to track component states, as well as for snapshot testing.',
    stack:
      'For a deep understanding of state management, the project was started on the classic redux. To ensure that the visual elements of the frontend project are consistent and match the expected output snapshot tests were used, and the use of a Storybook allows for easy testing and documenting of the different components and states of the frontend.',
    problems:
      'During development, there were difficulties with the synchronization of the states of the reducers for tasks and for lists of tasks, since it is difficult to be sure that each reducer works correctly. I also had to solve the problem of an excessive number of react renders using hooks.',
    final:
      'First of all, this project taught me how to work with the complex global state of the application, with redux and redux toolkit. This showed me the importance of using unit tests to develop complex stateful SPA. I learned how to connect REST API and process and debug requests, got acquainted with the Material UI and Formik libraries. ',
    githubLink: 'https://github.com/dspopravko/todolist',
    deployLink: 'https://dspopravko.github.io/todolist/',
    coverLogo: todolist,
    projectStack: ['React', 'Redux Thunk', 'Storybook', 'Snapshots', 'Unit-tests', 'Material UI', 'Formik'],
    descriptionShort:
      'Built using React framework, Material UI and Redux. To ensure proper functionality and stability implemented unit-test and snapshot tests.',
    descriptionLong:
      'Built using React framework, Material UI and Redux. To ensure proper functionality and stability implemented unit-test and snapshot tests. It includes features such as authentication, CRUD operations for todolists and tasks. Unit-tests and screenshot tests are crucial in frontend projects to ensure that the implemented features are working correctly, and that there are no visual regression issues.',
    color: '#06d6a0',
  },
  {
    id: '3',
    title: 'Social network',
    projectType: 'Learning Project',
    goals:
      'The goal of this project was to explore React starting with class components, higher order components such as connect, component lifecycle, routing, and classic redux.',
    stack:
      'The main focus of the project was to study the react library and state management, so the web stack itself turned out to be pretty small. In addition to the react and redax libraries, the redux-thunk middleware was added, as well as formik for the login form, and axios for REST API requests.',
    problems:
      'The main problem of the whole project is the legacy code and outdated libraries, so in its current state it will be easier to rewrite the application again than to update it. Many other complexities follow from this, managing the life cycle of a class component is more difficult than a functional component using hooks, container components introduce additional layers, classic redux has a lot of boilerplate code, and so on.',
    final:
      'However, dealing with these problems helps develop programmer skills, clearly abstract entities, isolate code and shorten interfaces.',
    githubLink: 'https://github.com/dspopravko/samurai-way',
    deployLink: 'https://dspopravko.github.io/samurai-way/',
    coverLogo: socialnetwork,
    projectStack: ['React', 'Redux', 'Redux Thunk', 'Formik'],
    descriptionShort:
      'Social Network is an rather complex online platform, with many sections, redirection and state managing.',
    descriptionLong:
      'Social Network is an rather complex online platform, with many sections, redirection and state managing. This app was written in react class components.',
    color: '#ffd166',
  },
  {
    id: '4',
    title: 'Typing App',
    projectType: 'Self Project',
    goals:
      'The idea for this project came to me on my own as I decided to learn touch typing and wanted to have my own learning app. In other applications, I lacked support for different keyboard layouts, and displaying error statistics, so these are the two main features that I wanted to implement.',
    stack:
      'Since I was creating an app in parallel with education, I decided to choose a state manager with which I am already familiar in order to solidify knowledge. To speed up development, I switched to Vite instead of the CRA.',
    problems:
      'The most difficult part was writing the logic for tracking the current position of the text cursor, along with displaying errors that were made, as well as maintaining the ability to correct them.',
    final:
      'I completed the features that I set for myself, but this project is more of a draft, for it to work, it needs a full-fledged backend with saving progress, routing, animations and much more. But I would love to go back and make it more usable and ready for production.',
    githubLink: 'https://github.com/dspopravko/typingapp',
    deployLink: 'https://dspopravko.github.io/typingapp/',
    coverLogo: typingapp,
    projectStack: ['Vite', 'React', 'Redux'],
    descriptionShort: 'Typing app helps to learn touch typing. Build with redux, supports multiple layouts.',
    descriptionLong:
      'Typing app helps to learn touch typing. Build with redux, supports multiple layouts and display of keyboard miss statistics.',
    color: '#ef476f',
  },
]
