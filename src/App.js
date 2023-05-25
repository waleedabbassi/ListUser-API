
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {

  const [listOfUSer, setlistOfUSer]=useState([])



  useEffect (()=> {
  axios.get('https://jsonplaceholder.typicode.com/users')
  
  .then(res => setlistOfUSer(res.data))
  .catch((err) => console.log(err))
  
  })


  return (
    <div className="App">
      <h1> axios </h1>
      
        {listOfUSer.map((user) => (
        <ul><li>
          <Card>
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item>{user.username}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        </Card>
        </li></ul>
        ))}
      
      
      
    
    



    
    </div>
  );
}

export default App;
