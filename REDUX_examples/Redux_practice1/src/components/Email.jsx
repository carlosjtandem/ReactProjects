import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

export const Email = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);

    const handleChange = (e) => {
        dispatch(changeEmail(e.target.value))  //nos da el valor del inpu)t
    }

    return (
        <div>
            <input type='email' value={email} placeholder='' onChange={handleChange} />
        </div>
    )
}
