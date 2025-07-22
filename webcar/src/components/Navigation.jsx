import useAxios from "../hooks/useAxios";
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { filterByRepuesto } from '../functions/searchFunctions';

const Navigation = () => { 
  const URL = import.meta.env.VITE_ENDPOINT_BASE;
    
    const { data, error, loading } = useAxios(`${URL}/repuestos`);
    const [rptosFind, setRptosFind] = useState('');
    
    const handleChange=e => {
        setRptosFind(e.target.value);
       // filterByRepuesto(e.target.value);
        console.log("", e.target.value)
    }

    let rptosFiltered = data;

    if(data) {
      rptosFiltered = filterByRepuesto(data, rptosFind);
    }

    // const filterByRepuesto = (temino) => {
    //     const repuestosFiltered = data.filter((nameRpto) => {
    //         if (nameRpto.repuesto.toString().toLowerCase().includes(temino.toLowerCase())) {
    //             return nameRpto;
    //         };
    //     });
    //     setRptosFind(nameRpto);    
    // }
    
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/mecanico.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          ScrewCar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link to="/" className="nav-link">Home</Link>
              {/* <Link to="/newrepuesto" className="nav-link">Intranet</Link> */}
              {/* <Link to="/configRepuesto" className="nav-link">Configuracion Repuestos</Link> */}
            </Nav>
            <NavDropdown title="Repuestos" id="basic-nav-dropdown">
              <Link to="/configRepuesto" className="nav-link">Lista</Link>
              <Link to="/newrepuesto" className="nav-link">Agregar Repuesto</Link>
            </NavDropdown>            
          </Nav>  
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar repuesto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleChange}>Buscar</Button>
          </Form>          
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navigation



