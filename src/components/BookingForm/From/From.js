import React from 'react';
import { useFormContext } from 'react-hook-form';

const From = () => {
    const { register } = useFormContext();
    return (
        <input {...register("from")} />
    );
};

export default From;