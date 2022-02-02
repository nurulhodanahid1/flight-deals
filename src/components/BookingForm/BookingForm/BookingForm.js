import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import { useForm, FormProvider } from "react-hook-form";
import From from '../From/From';
import PassengersTravel from '../PassengersTravel/PassengersTravel';
import To from '../To/To';

const BookingForm = () => {
    const [receivedBookingData, setReceivedBookingData] = useState();
    console.log("data:", receivedBookingData);
    const methods = useForm();
    const onSubmit = data => {
        const bookingData = {
            from: data.from,
            to: data.to,
            class: data.class,
        };
        setReceivedBookingData(bookingData);
    };


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <h1>Flight deals with Virgin Atlantic</h1>
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)} >
                        <Row>
                            <Col><From></From></Col>
                            <Col><To></To></Col>
                            <Col>3 of 3</Col>
                        </Row>
                        <Row>
                            <Col><PassengersTravel></PassengersTravel></Col>
                            <Col>2 of 3</Col>
                            <Col><input type="submit" onClick={handleShow} /></Col>
                        </Row>
                    </form>
                </FormProvider>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Hello{receivedBookingData.from}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookingForm;