
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const UserCard =(person) => {

console.log('person',person)

  return (
    <Table striped bordered hover size="sm">
      <thead>
      <tr>
          <th>Id: </th>
          <th> {person.id}</th>
          </tr>
          <tr>
          <th>Name: </th>
          <th>{person.name}</th>
          </tr>
          
          <tr>
          <th>Username: </th>
          <th>{person.username}</th>
          </tr>
        
          <tr>
          <th>Email: </th>
          <th>{person.email}</th>
          </tr>
      </thead>
     
    </Table>
)}

export default UserCard;
