import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

const PassengersTravel = () => {
    const { register } = useFormContext();

    let [adultNum, setAdultNum] = useState(1);
    let incAdultNum = () => {
        if (adultNum < 9 && passengers < 9) {
            setAdultNum(Number(adultNum) + 1);
        }
    };
    let decAdultNum = () => {
        if (adultNum > 1) {
            setAdultNum(adultNum - 1);
        }
    }
    let handleAdultChange = (e) => {
        setAdultNum(e.target.value);
    };

    let [youngNum, setYoungNum] = useState(0);
    let incYoungNum = () => {
        if (youngNum < 9 && passengers < 9) {
            setYoungNum(Number(youngNum) + 1);
        }
    };
    let decYoungNum = () => {
        if (youngNum > 0) {
            setYoungNum(youngNum - 1);
        }
    }
    let handleYoungChange = (e) => {
        setYoungNum(e.target.value);
    };

    const passengers = adultNum + youngNum;

    const [flightClass, setFlightClass] = useState("Economy");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {passengers} passenger {flightClass}
            </Button>

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
                    <Form.Select {...register("class", {onChange: e => setFlightClass(e.target.value)})} aria-label="Default select example">
                        <option value="Economy">Economy</option>
                        <option value="Premium">Premium</option>
                        <option value="Upper Class">Upper Class</option>
                    </Form.Select>

                    <p>{passengers}</p>
                    <>
                        <div className="col-xl-1">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary" type="button" onClick={decAdultNum}>-</button>
                                </div>
                                <input type="text" className="form-control" value={adultNum} onChange={handleAdultChange} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary" type="button" onClick={incAdultNum}>+</button>
                                </div>
                            </div>
                        </div>
                    </>
                    <>
                        <div className="col-xl-1">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary" type="button" onClick={decYoungNum}>-</button>
                                </div>
                                <input type="text" className="form-control" value={youngNum} onChange={handleYoungChange} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-primary" type="button" onClick={incYoungNum}>+</button>
                                </div>
                            </div>
                        </div>
                    </>
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

export default PassengersTravel;