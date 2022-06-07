import {useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import SvgComponent from '../components/Icons/Github'
import SvgGoogle from '../components/Icons/Google'
import {loginWithGitHub, onAuthStateChanged, loginWithGoogle } from '../firebase/client'
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
  })}

    const Google = () =>{
      loginWithGoogle ().catch(err =>{
      console.log(err)
    })}
  
  return (
    
    <div className={styles.container}>
      <Head styles="text-align:left">
        <title>Tweetbeer: Tweets & Beers</title>
        <meta name="description" content="Tweetbeer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
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
          user === USER_STATES.NOT_LOGGED &&
          <div>   
          <button className="google" onClick={Google}>
          <SvgGoogle fill='white' width={24} height={24}/>
          Login with Google
          </button>
          </div>
}
          {
            user === USER_STATES.NOT_KNOWN && <img width={100} src='/spinner.gif'/>
          }
        
        </div>        
        </section>

        <style jsx>{`
          
          span{
            font-size:12px;
          }
          section{
            display:grid;
            height:100%;
            place-items:center;
            place-content:center;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%); 
          }
          
          .google {
            align-items:center;
        background-color: #DB4437aa;
        border:0;
        color:${colors.white};
        display:flex;
        border-radius: 9999px;
        padding: 8px 24px;
        font-size:16px;
        cursor:pointer;
        transition: opacity .3s ease;
          }
        button > :global(svg){
            margin-right:12px;

        }

        .google[disabled] {
            opacity:0.2;
            pointer-events:none;

        }

        .google:hover{
        opacity: .7;

        }

          div{
            margin-top:16px;
            font-size:4rem;
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
