import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { useState} from 'react';



const Header = ({cart, shouldDisplayProduct}) => {
	
// Function to add a product to the cart
  

  const handleSignInClick = () => {
    // Add your logic here for what should happen when the link is clicked
    // For example, you can navigate to the login page using a routing library like React Router.
    // import { useHistory } from 'react-router-dom';
    // const history = useHistory();
    // history.push('/login');
    console.log('Sign In clicked');
  };
  
 
  const handleShowCart = () => {
	  
	  console.log('Show Cart details===>');
	  shouldDisplayProduct=true;
	  <ul>
        {cart.map((cartProduct, index) => (
          <li key={index}>
            {cartProduct.name} - ${cartProduct.price.toFixed(2)}
          </li>
        ))}
      </ul>

  };
  
  
  
  
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ms-auto'>		
					<Nav.Link href="/MyCart" onClick={handleShowCart()}> <FaShoppingCart/>Cart { true && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cart.length}
                    </Badge>
                  )}
				  </Nav.Link>
					<Nav.Link href="/login"> <FaUser/>Sign In</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
