import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { imageBase } from '../lib/tmdb'
import Link from 'next/link'

export default function Home({lista}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaques 
        </h1>

        <Link href="/busca">Ir para busca</Link>  

        <ul>
          {lista.map(item=>(
            <li>
              <a href={`/movie/${item.id}`}>
                <img src={`${imageBase}${item.poster_path}`} width="150" /> <br/>
                {item.title}
              </a>
            </li>
          ))}  
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json() ; 

  return {
    props: {
      lista: json.list
    }
  }
}