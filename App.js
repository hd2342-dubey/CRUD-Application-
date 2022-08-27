// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from "./Components/create-student.component";
import EditStudent from "./Components/edit-student.component";
import StudentList from "./Components/student-list.component";
import BranchList from "./Components/branch-list.component";


// App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/create-student" className="nav-link">
                  Information System
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to="/create-student" className="nav-link">
                    Insert Record
                  </Link>
                </Nav>

                <Nav>
                  <Link to="/student-list" className="nav-link">
                    Device List
                  </Link>
                </Nav>

                <Nav>
                  <Link to="/branch-list" className="nav-link">
                    Branch Wise
                  </Link>
                </Nav>

                <Nav>
                  <Link to="/branch-list" className="nav-link">
                    Device Wise
                  </Link>
                </Nav>



              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<CreateStudent />} />
                  <Route path="/create-student" element={<CreateStudent />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                  <Route path="/branch-list" element={<BranchList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;