import Avatar from "../../components/Avatar";
import useTimeAgo from "../../hooks/useTimeAgo"
export default function Bweet ({avatar, username, email, message, id, img, createdAt}) {
const timeago = useTimeAgo(createdAt)    
    return(
<>
    <article>
    <div>
    <Avatar alt={username} src={avatar}/>
    </div>
    <section>
        <header>
    <strong>{email}</strong>
    <span>·</span>
    <date>{timeago}</date>
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
    p{
        line-height:1.3125;
        margin:0;
    }
    date {
        color: #555;
        font-size:12px;
    }
    
`}

</style> 
</>


    )

   
}