import styles from './skills.module.css'
import SkillList from '../components/SkillList'


export default function ExamplesPage(){ 
    return (
        <main className={styles.main}>
            <h1 data-test="skills-header" className={styles.header}>
            Write down the skills you master
            </h1>
            <div className={styles.postButton}>
            </div>
            <SkillList />
        </main>
    )
}