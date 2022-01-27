import { createContext, useReducer, useEffect } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext()

export default function UserContextProvider(props) {
    
    const [user, dispatch] = useReducer(userReducer, [], () => {
        const initialusers = localStorage.getItem("user")
        return initialusers ? JSON.parse(initialusers) : ""
    })

    useEffect( () => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={{user, dispatch}}>
            { props.children }
        </UserContext.Provider>
    )
}