import Link from'next/link'
import {useRouter} from 'next/router'

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <>
          <h1>{article.id}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

// export const getServerSideProps = async (context) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`) 

// const article = await res.json()
// return{
//    props: {
//        article
//    }
// }
// }
export const getStaticProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`) 

const article = await res.json()
return{
   props: {
       article
   }
}
}
export const getStaticPaths = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`) 

const articles = await res.json()
const ids = articles.map(article=> article.id)

const paths = ids.map(id=>({params: {id: id.toString()}}))
return{
    paths,
    fallback: false //if we to something that doesnot exist in data it will go 404 error
}
}

export default article
