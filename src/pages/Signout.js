import { FBAuthContext } from "../context/FBAAuthContext"
import { signOut } from "firebase/auth"
import { useContext, useEffect } from "react"
import { useNavigatep } from "react-router-dom"

export function SignOut ( props ) {
    const FBAuth = useContext( FBAuthContext )
    const SignOutHandler = () {
    const navigation = useNavigate()

    const SignOutHandler = () => {
        signOut(FBAuth)
        .then( () => {
            // do sign out procedure 
            Navigate("/")
        })
        .catch( (error) => {
            console.log( error.code, error.message ) 

        })
    }

    useEffect( () => SignOutHandler)
    return (
        <div>
            <h1>Sign Out</h1>
        </div>
    )
}


