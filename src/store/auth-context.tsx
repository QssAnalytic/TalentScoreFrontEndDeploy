import { useState, createContext } from 'react'

import {AuthContextType} from './../hooks/useAuth'
import { getPersona, personaUser, viewingAs } from 'demo/viewAs'

// While viewing as a demo persona the app sees that persona as the user; the
// signed-in account (and its tokens) stay unchanged underneath.
const viewAs = getPersona(viewingAs())
const viewAsUser = viewAs ? personaUser(viewAs) : null
export const AuthContext = createContext<AuthContextType>({
    user: {first_name:'',last_name:'',report_test:false,email:'',profile_photo: '', birth_date: ''},
    setUser: () => { },
    accessToken: null,
    refreshToken: null,
    csrftoken: null,
    setAccessToken: () => { },
    setRefreshToken: () => { },
    setCSRFToken: () => { }
})

export function AuthContextProvider(props:any) {
    const [user, setUser] = useState({first_name:'',last_name:'',report_test:false,email:'',profile_photo: '',birth_date: ''
    
    }); 
    const [accessToken, setAccessToken] = useState(null); 
    const [refreshToken, setRefreshToken] = useState(null); 
    const [csrftoken, setCSRFToken] = useState(null); 

    
    return <AuthContext.Provider value={{
        user: (viewAsUser as any) || user, setUser,
        accessToken, setAccessToken,
        refreshToken, setRefreshToken,
        csrftoken, setCSRFToken
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext