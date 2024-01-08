import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <ul className={styles.nav}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                </ul>
            </header>
        </>
    );
}