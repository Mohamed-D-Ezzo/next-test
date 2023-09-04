import ItemsAccordion from '../components/Accordion'
import styles from './why.module.css'

const  reaasonToUseNext = [
    {
      summary: '1) Server-Side Rendering (SSR)',
      details: 'Next.js makes it easy to implement server-side rendering, which means that pages are generated on the server and then sent to the client. This leads to faster initial page loads and better SEO, making it ideal for content-rich websites.',
      id: '1',
    },
    {
      summary: '2) SEO Optimization',
      details: 'Because of its SSR capabilities, Next.js is highly SEO-friendly. Search engines can easily crawl and index the content, resulting in improved search engine rankings.',
      id: '2',
    },
    {
      summary: '3) Performance',
      details: 'Next.js offers features like automatic code splitting and lazy loading, which enhance the performance of web applications. This results in faster load times and a smoother user experience.',
      id: '3',
    },
    {
      summary: '4) Routing',
      details: 'Next.js includes a built-in routing system, simplifying the creation and management of complex client-side routing.',
      id: '4',
    },
    {
      summary: '5) Developer Experience',
      details: 'npx cypress open',
      id: '5',
    },

   {
    summary: '6) Static Site Generation (SSG)',
    details: " In addition to SSR, Next.js supports static site generation. This means you can pre-render pages at build time, making it suitable for websites that don't require real-time data and can be served as static files, resulting in even faster load times.",
    id: '6',
  },
  {
    summary: '7) API Routes',
    details: 'Next.js includes a built-in API routing system, making it easy to create serverless functions or build RESTful APIs within your application.',
    id: '7',
  },
  {
    summary: '8) Performance',
    details: 'Next.js includes a built-in routing system, simplifying the creation and management of complex client-side routing.',
    id: '8',
  },
  {
    summary: '9) Authentication',
    details: ' Implementing user authentication in Next.js is straightforward. It integrates well with various authentication providers and libraries.',
    id: '9',
  },
  {
    summary: '10) Community and Ecosystem',
    details: 'Next.js has a large and active community, which means you can find plenty of documentation, tutorials, and packages to help you get started and solve common problems.',
    id: '10',
  },

  {
    summary: '11) Versatile Deployment Options',
    details: 'You can deploy Next.js applications to various hosting platforms, including Vercel, Netlify, AWS, and more, making it flexible in terms of hosting options.',
    id: '11',
  },

  {
    summary: '12) TypeScript Support',
    details: 'Next.js has excellent support for TypeScript, making it a great choice for projects that benefit from static typing.',
    id: '12',
  },
  ]

const reaasonToUseCypress = [
    {
      summary: '1) Realistic Testing',
      details: 'Cypress allows you to simulate how a real user interacts with your web application. It can interact with elements, click buttons, fill out forms, and perform a wide range of user interactions, making it ideal for simulating real user scenarios.',
      id: '13',
    },
    {
      summary: '2) Fast and Reliable',
      details: 'Cypress is designed to be fast and reliable. It provides automatic waiting, retries, and timeouts, ensuring that your tests run smoothly even when dealing with asynchronous actions, such as network requests.',
      id: '14',
    },
    {
      summary: '3) Live Reloading',
      details: "Cypress offers live reloading, which means you can see the changes in your tests and application in real-time as you develop. This significantly improves the developer's feedback loop, making it easier to debug and fix issues.",
      id: '15',
    },
    {
      summary: '4) Debugging Tools',
      details: "Cypress provides a robust set of debugging tools that help you troubleshoot test failures. You can watch test commands as they are executed, view snapshots of the application's state at each step, and use browser's developer tools for debugging.",
      id: '16',
    },
    {
      summary: '5) Automatic Waiting',
      details: 'Cypress automatically waits for elements to appear and actions to complete, reducing the need for explicit waits and timeouts in your test code.',
      id: '17',
    },

   {
    summary: '6) Easy Setup',
    details: " Setting up Cypress is relatively simple. It comes with its own test runner and doesn't require additional drivers or dependencies like Selenium. Cypress also provides a CLI tool to help you get started quickly.",
    id: '18',
  },
  {
    summary: '7) Integrated End-to-End Testing',
    details: "Cypress combines both unit and end-to-end testing. You can write unit-like tests using JavaScript or TypeScript and then integrate them into your end-to-end tests, providing a unified testing solution.",
    id: '19',
  },
  {
    summary: '8) Cross-Browser Testing',
    details: 'Cypress supports running tests on multiple browsers, including Chrome, Firefox, and Edge. This allows you to ensure that your application works correctly across different browser environments.',
    id: '20',
  },
  {
    summary: '9) Network Stubbing and Spying',
    details: ' Cypress enables you to stub or intercept network requests, making it possible to control and verify interactions with external services and APIs during testing.',
    id: '21',
  },
  {
    summary: '10) Community and Plugins',
    details: 'Cypress has an active community and a wide range of plugins and extensions that enhance its functionality. You can find plugins for everything from visual testing to integration with CI/CD pipelines.',
    id: '22',
  },

  {
    summary: '11) Continuous Integration (CI) Integration',
    details: 'Cypress can easily be integrated into CI/CD pipelines, allowing you to automate the execution of tests whenever changes are pushed to the codebase.',
    id: '23',
  },

  {
    summary: '12) Open Source',
    details: 'Cypress is open source and has a strong community of contributors and users. This means you can benefit from ongoing updates, improvements, and community support.',
    id: '24',
  },
  ]

export default function Overview(){
    return (
        <main className={styles.main}>
            <h1 data-test="next-header" className={styles.header}>
                Why Next.js ?
            </h1>
            <ItemsAccordion items={reaasonToUseNext} />
            <br />
            <br />
            <h1 data-test="cypress-header" className={styles.header}>
                Why Cypress ?
            </h1>
            <ItemsAccordion items={reaasonToUseCypress} />
        </main>
    )
}