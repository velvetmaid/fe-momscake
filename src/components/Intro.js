import { Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="jumbotron bgCakes">
      <div className="intro">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title-w">Welcome To Mom's Cake</div>
              <div className="title-d">We Serve Quality Cakes</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
