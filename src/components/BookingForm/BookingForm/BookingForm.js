import React, { useState, createContext } from 'react';
import { Col, Row, Form, Container, Modal, Button } from 'react-bootstrap';
import { useForm, FormProvider } from "react-hook-form";
import From from '../From/From';
import Voucher from '../Voucher/Voucher';
import PassengersTravel from '../PassengersTravel/PassengersTravel';
import To from '../To/To';
import DepartureReturn from '../DepartureReturn/DepartureReturn';

export const PassengerContext = createContext();

const BookingForm = () => {
    const [passengersDetails, setPassengersDetails] = useState();
    console.log("p", passengersDetails);
    const [receivedBookingData, setReceivedBookingData] = useState();
    console.log("data:", receivedBookingData);
    const methods = useForm();
    const onSubmit = data => {
        const bookingData = {
            from: data.from,
            to: data.to,
            code: data.code,
            class: data.class,
        };
        setReceivedBookingData(bookingData);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <h1>Flight deals with Virgin Atlantic</h1>
                <FormProvider {...methods} >
                    <Form onSubmit={methods.handleSubmit(onSubmit)} >
                        <Row>
                            <Col><From></From></Col>
                            <Col><To></To></Col>
                            <Col><DepartureReturn></DepartureReturn></Col>
                        </Row>
                        <Row>
                            <Col>
                                <PassengerContext.Provider value={[passengersDetails, setPassengersDetails]}>
                                    <PassengersTravel></PassengersTravel>
                                </PassengerContext.Provider>
                            </Col>
                            <Col><Voucher></Voucher></Col>
                            <Col><input type="submit" onClick={handleShow} /></Col>
                        </Row>
                    </Form>
                </FormProvider>
            </Container>


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
                    Hello{receivedBookingData?.from}
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