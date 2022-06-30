import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="bg-light">
      <DemoNavbar />
      <Routes>
        <Route path="/" element={<DemoHomepage />}/>
      </Routes>
    </div>
  );
}

function DemoNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Network App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function DemoHomepage() {
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <Col
        xs={10}
        md={5}
        style={{borderRadius: "40px"}}
        className="p-5 text-center shadow-lg"
      >
        <div className="p-5 d-flex flex-column align-items-center gap-3">
          <h1 className="mb-3 fw-bold display-5">Welcome To Network App</h1>
          <Button size="lg" className="w-50">Log in</Button>
          <Button size="lg" className="w-50">Sign up</Button>
        </div>
      </Col>
    </div>
  );
}

export default App;
