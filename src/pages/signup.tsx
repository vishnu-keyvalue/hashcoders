import PublicLayout from "@/components/PublicLayout";
import { brandName } from "@/constants/common";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap"

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const { replace } = useRouter();

  const submitDisabled = !(email.length && password.length && confirmedPassword.length);


  const onSignUp = () => {
    replace('/home');
  }
  
  return (
      <PublicLayout>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">{brandName}</h2>
                  <p className=" mb-5">Please enter details</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control 
                         onChange={(e) => setEmail(e.target.value)} 
                         type="email"
                         placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                         onChange={(e) => setPassword(e.target.value)}
                         type="password"
                         placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                         type="password" placeholder="Password" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button onClick={onSignUp} disabled={submitDisabled} variant="primary" type="submit">
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-primary fw-bold">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </PublicLayout>
  );
}
