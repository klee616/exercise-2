import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div>&copy; Create by KamShing Lee</div>
                <div>Test</div>
            </footer>
        </>
    );
}