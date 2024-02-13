import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
    const user = useSelector((state) => state.user)

    return (
        <header>
            <div>Redux toolkit example</div>
            <ul>
                <li>Name:{user.name}</li>
                <li>Username:{user.username}</li>
                <li>Email:{user.email}</li>
            </ul>
        </header>
    )
}
