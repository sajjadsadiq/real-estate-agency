import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export function useAuthStatus() {
    const [loggedIn, setLoggendIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged (auth, (user) => {
            if(user){
                setLoggendIn(true)
            }
            setCheckingStatus(false)
        })
    }, [])
  return {loggedIn, checkingStatus}
}






