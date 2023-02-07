import { Nav } from 'react-bootstrap';

function NavComponent(props) {

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home" onSelect={props.handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="companies" >Companies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="create">Create company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="update">Update company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="delete">Delete company</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavComponent;
