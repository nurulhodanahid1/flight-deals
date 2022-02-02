import React from 'react';
import { useFormContext } from 'react-hook-form';

const To = () => {
    const { register } = useFormContext();
    return (
        <input {...register("to")} />
    );
};

export default To;