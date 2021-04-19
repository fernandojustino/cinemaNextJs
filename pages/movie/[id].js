import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { imageBase } from '../../lib/tmdb'
import Link from 'next/link'

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>
        <p>Nota: {info.vote_average}</p>
        <p>{info.overview}</p>
        <img src={`${imageBase}${info.backdrop_path}`} width="400"/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json() ; 

  return {
    props: {
      info: json.info
    }
  }
}