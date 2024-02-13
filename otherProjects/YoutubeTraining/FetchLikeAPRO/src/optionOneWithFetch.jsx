import React from 'react'
import { useFetch } from './useFetch'

export const OptionOneWithFetch = () => {
    const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users/");
    return (
        <div className='card'>
            <h2>Fetch option 1</h2>
            <button type='button' style={{backgroundColor: 'green'}} onClick={handleCancelRequest}>CAncel Request</button>
            <ul>
                {error && <li>Error...{error}</li>}
                {loading && <li>Loading...</li>}
                {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ul>
        </div>
    )
}
