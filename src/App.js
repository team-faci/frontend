import './App.css';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <DemoHomepage/>
  );
}

function DemoHomepage() {
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center bg-light">
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
