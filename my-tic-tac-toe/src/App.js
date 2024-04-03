import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Tic Tac Toe </p>
      </header>
      <Container>
        <Row>
          <Col>
            <button> 1 </button>
            <button> 2 </button>
            <button> 3 </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button> 4 </button>
            <button> 5 </button>
            <button> 6 </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <button> 7 </button>
            <button> 8 </button>
            <button> 9 </button>
          </Col>
        </Row>
        <Row style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
          <button className="reset" style={{width: '100px', borderRadius: '7px', height: '50px'}}> Reset </button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
