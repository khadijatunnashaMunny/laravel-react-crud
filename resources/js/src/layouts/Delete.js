import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Delete() {
    return (

      
        <div className="container">

              <div>
                <ul className="list-group mt-3">
                    <li>
                        <button
                            className="btn btn-success btn-sm mr-2" 
                        >View</button>
                        <button
                            className="btn btn-warning btn-sm mr-2"
                        >Edit</button>
                        <button
                            className="btn btn-danger btn-sm"
                        >Delete</button>
                    </li>
                    
                </ul>
            </div>
            <Nav defaultActiveKey="/" as="ul">
            
              <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/directory">Directory</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/users">Users</Nav.Link>
              </Nav.Item>
             
            </Nav>
        </div>
    );
}

export default Delete;




