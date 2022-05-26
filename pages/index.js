import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import SvgComponent from '../components/Icons/Github'
import {loginWithGitHub} from '../firebase/client'

export default function Home() {

  const handleClick = () =>{
    loginWithGitHub ().then (user =>{
    console.log(user)
  }).catch(err =>{
    console.log(err)

  })
}
  return (
    <div className={styles.container}>
      <Head styles="text-align:left">
        <title>Tweetbeer: Tweets & Beers</title>
        <meta name="description" content="Tweetbeer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
       
        <section>
        <h1 className={styles.title}>
        <a>Tweetbeer</a>
        </h1>
        <h2>The place to tweet, while drinking a 🍺</h2>

        <div>
        <Button onClick={handleClick}>
          <SvgComponent fill='white' width={24} height={24}/>
          Login with Github
        </Button>
        </div>

        </section>
        </AppLayout>

        <style jsx>{`
          
          section{
            display:grid;
            height:100%;
            place-items:center;
            place-content:center;
          }

          div{
            margin-top:16px;
          }
        h1 {
          font-size:28px;
          color:${colors.white};
          margin-bottom:8px;

        }
        h2{
          font-size:16px;
          font-weight:100;
          margin:0;
          color:${colors.white}
        }

          `}


        </style>
</div>
  )
}
