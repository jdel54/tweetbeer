import { Router } from "next/router"
import { useEffect, useState } from "react"
import {onFirebaseAuthStateChange} from '../firebase/client'
import {useRouter} from 'next/router'

export const USER_STATES ={
        NOT_LOGGED: null,
        NOT_KNOWN: undefined,
        
        }

        export default function useUser (){
            const [user, setUser] = useState(USER_STATES.NOT_KNOWN) 

            const router = useRouter()
        

        useEffect(() => {
            onFirebaseAuthStateChange(setUser)
          }, [])

          useEffect (() => {
            user === USER_STATES.NOT_LOGGED && router.push('/')
          }, [user])

          return user
        }