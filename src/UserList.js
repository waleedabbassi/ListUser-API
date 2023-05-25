import ListGroup from 'react-bootstrap/ListGroup';
import {Card} from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const UserCard =(person) => {

console.log('person',person)

  return (
    <Card style={{ width: '18rem' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>{person.name}</ListGroup.Item>
      <ListGroup.Item>{person.username}</ListGroup.Item>
      <ListGroup.Item>{person.email}</ListGroup.Item>
    </ListGroup>
  </Card>
  );
}

export default UserCard;
