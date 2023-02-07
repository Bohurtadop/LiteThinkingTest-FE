import './Login.css';
import { useState } from 'react';
import Nav from '../components/Nav';
import Companies from '../components/Companies';
import CreateCompany from '../components/CreateCompany';

function CompaniesView() {

  const [content, setContent] = useState();

  const handleSelect = (key) => {
    switch (key) {
      case 'companies':
        setContent(<Companies />);
        break;
      case 'create':
        setContent(<CreateCompany />);
        break;
      case 'update':
        setContent('update');
        break;
      case 'delete':
        setContent('delete');
        break;
      default:
        console.log('Default case');
    }
  }


  return (
    <div>
      <Nav handleSelect={handleSelect} />
      {content}
    </div>
  );
}

export default CompaniesView;
