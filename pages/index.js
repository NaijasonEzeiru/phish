import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p>This site was created by Chibuike Ezeiru (Naijason) as a portfolio and for eductaional purpose.</p>

        <p>please do not use it for evil intents</p>
      </div>
</div>
      
  )
}
