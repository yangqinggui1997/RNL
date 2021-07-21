import React, { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext'

export const ResovleAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return null
}

export default ResovleAuthScreen