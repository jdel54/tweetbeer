import AppLayout from "../../../components/AppLayout";
import Button from "../../../components/Button";
import { fonts } from "../../../styles/theme";
import { useEffect, useId, useState } from "react";
import useUser from "../../../hooks/useUser";
import { addBweet, upLoadImage, getImgURL } from "../../../firebase/client";
import { useRouter } from "next/router";
import Head from "next/head"
import Avatar from "../../../components/Avatar"
import Link from "next/link";
import Create from "/components/Icons/Create"
import Home from "/components/Icons/Home"
import { colors } from "../../../styles/theme";

const Compose_STATES = {
    User_not_known:0,
    Loading:1,
    Success:2,
    ERROR: -1,
}
const DRAG_IMAGE_STATES ={
    ERROR: -1,
    None: 0,
    Drag_over: 1,
    Uploading: 2,
    Complete: 3

}
export default function ComposeTweet ()
{
    const [message, setMessage] =useState('')
    const [status, setStatus] = useState(Compose_STATES.User_not_known)
    const [drag,setDrag] = useState(DRAG_IMAGE_STATES.None)
    const [task, setTask] =useState(null)
    const [imgURL, setImgURL] = useState(null)

    const user = useUser()
    const router =useRouter()

    useEffect(() => {
    if(task) {
        let onProgress = () => {}
        let onError = () => {}
        let onComplete = () => {
        console.log('on complete')
        getImgURL(task, setImgURL)


        }

        
        task.on('state_changed', onProgress, onError, onComplete)
    }

    },[task])

const handleChange = (event) => {
const {value} = event.target
setMessage(value)

}

const handleSubmit = (event) => {

    event.preventDefault()
    setStatus(Compose_STATES.Loading)
    addBweet({
    avatar: user.avatar,
    content: message,
    email: user.email,
    uid: user.uid,
    img:imgURL
    })
    .then(() => {
    router.push("/home")
    })
    .catch((err) => {
    console.error(err) 
    setStatus(Compose_STATES.ERROR)   
})
}

const handleDragEnter = (e) => {
    e.preventDefault()
setDrag(DRAG_IMAGE_STATES.Drag_over)
}
const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.None)
}

const handleDrop =(e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.None)
    const file = e.dataTransfer.files[0]
    const task = upLoadImage(file)
    setTask(task)
}
const isButtonDisabled = !message.length || status === Compose_STATES.Loading
return ( 
<>
    <Head>
    <title>Bweet something</title>
    </Head>
    <section className="form-container">
    { user && 
    (<section className="avatar-container">
    <Avatar src={user.avatar} />
    </section>
    )}
    

<form onSubmit = {handleSubmit}>
<textarea
onChange={handleChange}
onDragEnter={handleDragEnter}
onDragLeave={handleDragLeave}
onDrop={handleDrop}
placeholder='Take a sip and Bweet' value={message}></textarea>
{imgURL && (
    <section className="remove-img">
    <button onClick={() => setImgURL(null)}>x</button>
    <img src={imgURL} />
    </section>)}

<div><Button disabled= {isButtonDisabled} >Bweet 🍺</Button></div>
</form>
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

form {
padding: 10px;
} 
.avatar-container {
          padding-top: 20px;
          padding-left: 10px;
        }

.form-container {
          align-items: flex-start;
          display: flex;
        }

nav {
    background:white;
    bottom: 0;
    box-shadow: 2px 2px 2px 4px #F3AF38aa;     
    display: flex;
    min-height: 49px;
    position: fixed;
    width: 100%;
    z-index:9999;
    align-items:center;

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
button {
    background: #F3AF38aa;
    border: 0;
    border-radius: 999px;
    color: #fff;
    font-size: 24px;
    width: 32px;
    height: 32px;
    bottom: 600px;
    position: absolute;
    right: 150px;
    cursor:pointer;
    z-index:999999;
        }
        

img {
    border-radius: 10px;
    height: auto;
    width: 50%;
    position:relative;
    left:25%;
        }

textarea{
border:${drag === DRAG_IMAGE_STATES.Drag_over ? "2px dashed #F3AF38aa" :"3px solid transparent"};
border-radius:10px;
padding:19px;
font-size:18px;
width:100%;
resize:none;
outline:0;
font-family: ${fonts.base};
min-height:200px;
}

div{
    padding:15px;
}
    
    
    `}
</style>

</>
)
}