import Accordion from './components/Accordion'
import styles from './page.module.css'

const overviewreason = [
  {
    summary: 'Why we use Next.js?',
    details: "Next.js is an open-source JavaScript framework used for building web applications and websites. It is specifically designed for React applications but adds a layer of features and capabilities to enhance the development experience and optimize performance",
    id: '1'
  },
  {
    summary: 'What is Cypress?',
    details: "Cypress is a popular end-to-end testing framework for web applications. It's used for a variety of reasons, primarily focused on improving the quality and reliability of web applications. ",
    id: '2'
  }
  
]

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 data-test="Overview-header" className={styles.header}>Overview</h1>
        
           <br/>
        <ul>
          <Accordion items={overviewreason} />
        </ul>


    </main>
  )
}
