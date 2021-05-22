import Head from 'next/head'
import ArticleList from '../components/Articlelist'

export default function Home({articles}) {
  return (
    <div >
      <Head>
        <title>WebDev News</title>
        <meta name='keyword' content='web development , programming'/>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles =await res.json()

  return {
    props: {
      articles
    }
  }
}