import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import SvgComponent from '../components/Icons/Github'
import SvgGoogle from '../components/Icons/Google'
import {loginWithGitHub, onAuthStateChanged } from '../firebase/client'
import { getAdditionalUserInfo } from 'firebase/auth'
import Avatar from '../components/Avatar'
import{useRouter} from 'next/router'
import useUser from '../hooks/useUser'
import { USER_STATES } from '../hooks/useUser'

export default function Home() {
  const user = useUser()
const router =useRouter()
  
 

  useEffect (() => {
user && router.replace('/home')

  }, [user])
  console.log(user)


   const handleClick = () =>{
    loginWithGitHub ().catch(err =>{
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
          {

           user === USER_STATES.NOT_LOGGED &&  
          <Button onClick={handleClick}>
          <SvgComponent fill='white' width={24} height={24}/>
          Login with Github
          </Button>

          }
          {
            user === USER_STATES.NOT_KNOWN && <img width={100} src='/spinner.gif'/>
          }
        
        </div>        
        </section>
        </AppLayout>

        <style jsx>{`
          span{
            font-size:12px;
          }
          section{
            display:grid;
            height:100%;
            place-items:center;
            place-content:center;

          }

          div{
            margin-top:16px;
            font-size:4rem;
          }

        div2{
            margin-top:10px;
          }

          
        h1 {
          font-size:28px;
          color:${colors.black};
          margin-bottom:8px;

        }
        h2{
          font-size:16px;
          font-weight:250;
          margin:0;
          color:${colors.black}
        }
        

          `}


        </style>
</div>
  )
}
