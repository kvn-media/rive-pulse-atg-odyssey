// src/components/forms/Form.js
import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Implement logic for handling form submission
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Username:
                <input {...register('username', { required: 'Username is required'})} />
            </label>
            <br />
            <label>
                Password:
                <input {...register('password', { required: 'Password is required'})} />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;