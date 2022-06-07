import Bweet from "../../components/Bweet"
export default function BweetPage (props) {
    return( <>
    <Bweet {...props}/>
    <style jsx>{`
        
        
        
        
        `}


    </style>
    
    </>
)
}

export async function getServerSideProps(context){

    const {params, res} = context
    const {id} = params
    const apiResponse = await fetch (`http://localhost:3000/api/bweets/${id}`)
    if(apiResponse.ok) { 
        const props = await apiResponse.json()
        return{props}
    }
    if (res){
        res.writeHead(301, {Location:"/home"})
}



}