import { useEffect, useState } from "react"
import Bweet from "../../components/Bweet"
import useUser from "../../hooks/useUser"
import { fetchLatestBweets } from "../../firebase/client";
import Link from "next/link"
import Create from "../../components/Icons/Create"
import Home from "../../components/Icons/Home"
import { colors } from "../../styles/theme"
import Head from 'next/head'
import { auth, getAuth, signOut} from "../../firebase/client"


export default function HomePage (){
    const[timeline, setTimeline] =useState([])
    const user = useUser()
    

    useEffect(() =>{
        user && fetchLatestBweets().then(setTimeline)
    }, [user])

    
return (
    <>
<Head>
<title>Your Timeline</title>
</Head>
<header>
<h2>Timeline 🍺 </h2 >
</header>

<section>
{timeline.map(({createdAt, img, id, username, avatar, content: message, email, userId, domain}) => (
     <Bweet
     key={id}
     createdAt = {createdAt}
     email={email}
     avatar={avatar}
     message={message}
     id={id}
     img={img}
     userId = {userId}
     domain ={domain}
     />
))}

</section>

<nav>
<Link href="/compose/tweet">
        <a>
        <Create/>
        </a>
    </Link>
<Link href="/home">
        <a>
        <Home/>
        </a>
    </Link>

    
</nav>

<style jsx>{`
header {
    background:#F3AF38aa;
    backdrop-filter: blur(5px);
    align-items:center;
    border-bottom: 1px dotted #eee;
    display:flex;
    height:49px;
    position:fixed;
    top:0;
    z-index:9999;
    width:550px;

}

h2 {
    margin-left:15px;
}
section {
    flex:1;

}




div:hover{
    opacity:.6;
}
nav {
    z-index: 999999;
    position: sticky;
    bottom: 0;
    right: 0;
    width: 100%;
    min-height:49px;
    background-color: #fff;
    box-shadow: #F3AF38aa 0 -2px 2px 0;
    display: flex;

}

nav a{
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height:100%;
    justify-content:center;
}

nav a:hover{
    background: radial-gradient(#F3AF38aa 1%,
    transparent 16%);
    background-size: 180px 180px;
    background-position:center;
}

nav a:hover > global(svg){
    stroke: ${colors.primary}
}
h2{
    font-weight: 450;
    font-size:22px;
    padding-left:15px;
}


`}


</style>
</>


)

}