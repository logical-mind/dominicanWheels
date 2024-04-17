import { FC } from "react"
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


export const Navbar2: FC = () => {
  const navigate = useNavigate();

  return (
    <>


      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link className="custom-link" href="" onClick={() => navigate("/")}>Inicio</Nav.Link>
              <Nav.Link href="" onClick={() => navigate("/filtros")}>Neumáticos</Nav.Link>


              <NavDropdown title="Productos" id="navbarScrollingDropdown">

                <NavDropdown.Item href="" onClick={() => navigate("/productos", { state: { key: "Pasanger_car" } })}>Passanger Cars</NavDropdown.Item>

                <NavDropdown.Item href=""  onClick={() => navigate("/productos", { state: { key: "suv_4wd" } })}>
                  SUV/4WD
                </NavDropdown.Item>

                <NavDropdown.Item href="" onClick={() => navigate("/productos", { state: { key: "van_lihgt" } })}>
                  VAN/LIHGT
                </NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Marcas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="" onClick={() => navigate("/filtros", { state: { key: "HABILEAD" } })}>Nereus</NavDropdown.Item>
                <NavDropdown.Item href="" onClick={() => navigate("/filtros", { state: { key: "MILEKING" } })}>
                  Kapsen
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link href="#" >
                Nosotros
              </Nav.Link>

              <Nav.Link href="#" >
                Contacto
              </Nav.Link>





            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}