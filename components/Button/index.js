import { colors } from "../../styles/theme";

export default function ({children, onClick}){
return(
    <>
    <button onClick = {onClick}>
    {children}
    </button> 
    
    <style jsx>{`
        button {
            align-items:center;
        background-color: ${colors.black};
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

        button:hover{
        opacity: .7;

        }
            `}
    
    </style>
    
    </>
)
    }