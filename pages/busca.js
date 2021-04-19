import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { imageBase } from '../lib/tmdb'
import { useState } from 'react'

export default function Busca() {

  const [searchText, setSearchText] = useState('') ;
  const [movieList, setMovieList] = useState([]); 

  const handleSearch = async () => { 
    if(searchText != '') {
      const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
      const json = await result.json();

      setMovieList(json.list);
      console.log(json); 
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>
        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)}/>
        <button onClick={handleSearch}>Buscar</button>
        <hr/>

        <ul>
          {movieList.map(item=>(
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
