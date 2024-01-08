
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import styles from '@/styles/About.module.css'
import Counter from '@/components/Counter/index'

export default function About() {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>

<Counter></Counter>
            </main>
            <Footer></Footer>
        </>

    )
}