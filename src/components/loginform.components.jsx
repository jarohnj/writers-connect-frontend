import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Header from "./header.components.jsx";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }}>
    <Card bg="light" className="Sub-header" border="info" style={{ width: "18rem" }}>
      <Card.Header as="h5">LOGIN</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        Need an account? Register <Link to="/register">here</Link>.
      </Card.Footer>
    </Card>
  </div>
);

export default LoginForm;
