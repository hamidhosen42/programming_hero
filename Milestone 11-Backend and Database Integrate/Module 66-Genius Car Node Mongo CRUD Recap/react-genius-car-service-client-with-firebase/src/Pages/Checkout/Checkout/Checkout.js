import React from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    return (
      <div>
        <h2 className='text-center mt-5'>Please Checkout your booking</h2>
        <div className="mt-5 w-50 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </div>
    );
};

export default Checkout;