import Avatar from "../../components/Avatar";
import Link from "next/link";
import useTimeAgo from "../../hooks/useTimeAgo"
import { useRouter } from "next/router"
import Create from "../Icons/Create"
import Home from "../Icons/Home"
import { colors } from "../../styles/theme";


export default function Bweet ({avatar, username, email, message, id, img, createdAt, domain}) {

var domain  = email.substring(0, email.lastIndexOf("@"));

const timeago = useTimeAgo(createdAt)   
const router = useRouter()

const handleArticleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

return(
<>
    <article onClick={handleArticleClick}>
    <div>
    <Avatar alt={username} src={avatar}/>
    </div>
    <section>
        <header>
    <strong>{domain}</strong>
    <span>·</span>
    <Link href={`/status/${id}`}>
    <a>
    <time>{timeago}</time>
    </a>
    </Link>
    </header>
     <p>{message}</p>
     {img && <img src={img}/>}
    </section>
</article>  


<style jsx>{`

    article{
    border-bottom: 1px solid #eee;
    display:flex;
    padding: 10px 15px;
    
    }
    img {
    border-radius: 10px;
    height: auto;
    width: 50%;
    position:relative;
    left:25%;
    margin-top:10px;
        }
    div{
    padding-right:10px;
    
    }

    article:hover {
    background: #f5f8fa;
    cursor:pointer;

    }
    p{
        line-height:1.3125;
        margin:0;
    }
    time {
        color: #555;
        font-size:12px;
    }
    a:hover{
        text-decoration:underline;

    }
    
`}

</style> 
</>


    )

   
}