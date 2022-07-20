import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import "./style/landingPage.css";
import "./fonts/Ruthie-Regular.ttf";

function App() {
  return (
    <div>
      <div className="bgCakes">
        <NavBar />
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title-w">Welcome To Mom's Cake</div>
                <div className="title-d">We Serve Quality Cakes</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
