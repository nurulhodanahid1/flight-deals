import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const Voucher = () => {
    const { register } = useFormContext();
    return (
        <div>
            <Form.Label>Voucher or Event Code</Form.Label>
            <Form.Control {...register("code")} type="text" placeholder='Enter Code' />
        </div>
    );
};

export default Voucher;