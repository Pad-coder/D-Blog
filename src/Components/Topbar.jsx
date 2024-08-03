import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useLocation } from 'react-router-dom';

function Topbar() {
  let {pathname} = useLocation()
  return (
    <Navbar bg="dark" theme="dark">
    <Container>
      <Navbar.Brand><Link to='/' style={{textDecoration:'none',color:'#ffffff'}}>D-Blog</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Nav style={{marginRight:'5px'}}><Link to='/' style={{textDecoration:'none',color:'#ffffff'}} className={`${pathname==='/'? 'active':""}`}>Home</Link></Nav>
        <Nav style={{marginRight:'5px'}}><Link to='/dashboard' style={{textDecoration:'none',color:'#ffffff'}} className={`${pathname==='/dashboard'? 'active':""}`}>Dashboard</Link></Nav>
        <Nav><Link to='/create' style={{textDecoration:'none',color:'#ffffff'}} className={`${pathname==='/create'? 'active':""}`}>Create</Link></Nav>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Topbar