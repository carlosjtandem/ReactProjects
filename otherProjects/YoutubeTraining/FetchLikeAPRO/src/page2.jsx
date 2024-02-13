import React from 'react'
import { Suspense } from 'react'
import { fetchData } from './optionTwo'

const apiData = fetchData(" https://api-colombia.com/api/v1/Region");
export const Page2 = () => {

    const data = apiData.read()
    return (
        <div>
            <h2>Fetch option 2</h2>

            <Suspense fallback={<div>Loading...</div>}>
                <ul className='card'>
                    {data?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </Suspense>
        </div>
    )
}
