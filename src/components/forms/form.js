// src/components/forms/Form.js
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import Button from '../common/Button';
import FirebaseService from '../../services/FirebaseService';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        // Implement logic for handling form submission
        try {
            await FirebaseService.addUser(data);
            console.log('User data submitted successfully:', data);
        } catch (error) {
            console.error('Error submitting user data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto p-4">
            <div className="mb-4">
                <label className="block text-soft-white mb-2">Username:</label>
                <Input {...register('username', { required: 'Username is required'})} />
            </div>
            <div className="mb-4">
                <label className="block text-soft-white mb-2">Password:</label>
                <Input {...register('password', { required: 'Password is required'})} type="password" />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    );
}

export default Form;