import AppLayout from "../../components/AppLayout";
import { useEffect, useState } from "react";
import Bweet from "../../components/Bweet";
import useUser from "../../hooks/useUser";
import { fetchLatestBweets } from "../../firebase/client";
import Link from "next/link"
import Create from "../../components/Icons/Create"
import Home from "../../components/Icons/Home"
import Search from "../../components/Icons/Search"
import { colors } from "../../styles/theme";
import Head from 'next/head'

export default function HomePage (){
    const[timeline, setTimeline] =useState([])
    const user = useUser()
    

    useEffect(() =>{
        user && fetchLatestBweets()
        .then(setTimeline)
    }, [user])
    
return (
    <>
<AppLayout>
<Head>
<title>Your Timeline</title>
</Head>
<header>
<h2>Timeline 🍺 </h2 >
</header>
<section>
{timeline.map(({createdAt, img, id, username, avatar, content: message, email, userId}) => (
     <Bweet
     key={id}
     createdAt = {createdAt}
     email={email}
     avatar={avatar}
     message={message}
     id={id}
     img={img}
     userId = {userId}
     />
    

))}
    <Link href="/compose/tweet">
        <div>
        <a>
        <img className="static" src='/cer.png'/>
        <img className="active" src="create.gif"></img>
        </a>
        </div>
    </Link>

</section>
<nav>
<Link href="/home">
        <a>
        <Home/>
        </a>
    </Link>
    <Link href="/search">
        <a>
        <Search />
        </a>
    </Link>
    
</nav>
</AppLayout>

<style jsx>{`
header {
    background:#F3AF38aa;
    backdrop-filter: blur(5px);
    align-items:center;
    border-bottom: 1px dotted #eee;
    display:flex;
    height:49px;
    position:sticky;
    top:0;
    width:100%;
}
section {
    flex:1;

}

.static {
  position:absolute;
  width:80%;
  top:14px;
  opacity:1;
}

.static:hover {
    position:absolute;
    opacity:0;
}
.active {
  position:absolute;
  width:80%;
  top:14px;
  opacity:0;
}

.active:hover {
    opacity:1;
    background:white;
    animation-iteration-count: 1;
}

div{
    position:sticky;
    left:490px;
    bottom:50px;
    opacity:.85;
    width:85px;
    height:85px;
    cursor:pointer;
}

div:hover{
    opacity:.6;
}
nav {
    background:#F3AF38aa;
    backdrop-filter: blur(5px);
    bottom:0;
    border-top: 1px solid #eee;
    min-height:35px;
    position: sticky;
    width:100%;
    display:flex;

}

nav a{
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height:100%;
    justify-content:center;
}

nav a:hover{
    background: radial-gradient(#BABABAaa 1%,
    transparent 16%);
    background-size: 180px 180px;
    background-position:center;
}

nav a:hover > global(svg){
    stroke: ${colors.primary}
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