import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    return (
        <Navbar bg="light" expand="lg" className=''>
            <Container fluid>
                <Link className='text-danger text-decoration-none ms-5' to='/'><h1>Quiz For Developer</h1></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-auto"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className='text-danger'>
                            <Link className='text-primary text-decoration-none mx-4' to='/home'>Home</Link>
                            <Link className='text-primary text-decoration-none mx-4' to='/subtitles'>Charts</Link>
                            <Link className='text-primary text-decoration-none mx-4' to='/blog'>Blog</Link>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;