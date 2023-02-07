import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Companies.css';

function Companies(props) {

  const [companies, setCompanies] = useState([]);

  // get companies
  useEffect(() => {
    axios.get('http://localhost:3000/company').then((response) => {
      setCompanies(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='mb-5'>
          List of companies:
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nit</th>
              <th>Company name</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, key) => {
              return (<tr key={key}>
                <td>{company.nit}</td>
                <td>{company.name}</td>
                <td>{company.address}</td>
                <td>{company.phone}</td>
              </tr>)
            })}
          </tbody>
        </Table>
      </header >
    </div >
  );
}

export default Companies;
